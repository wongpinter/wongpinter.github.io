import { useEffect } from 'react';
import { MenuId } from '../types';
import { MENU_ITEMS } from '../data/menu';

interface UseKeyboardNavProps {
  screen: 'title' | 'menu';
  activeModal: MenuId | null;
  activeItem: unknown | null;
  selectedMenuIndex: number;
  onStartGame: () => void;
  onSelectMenuIndex: (index: number | ((prev: number) => number)) => void;
  onOpenModal: (id: MenuId) => void;
  onCloseItemModal: () => void;
  onCloseModal: () => void;
}

export function useKeyboardNav({
  screen,
  activeModal,
  activeItem,
  selectedMenuIndex,
  onStartGame,
  onSelectMenuIndex,
  onOpenModal,
  onCloseItemModal,
  onCloseModal
}: UseKeyboardNavProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Title screen start
      if (screen === 'title' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onStartGame();
        return;
      }

      // Menu navigation
      if (screen === 'menu' && !activeModal) {
        if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
          e.preventDefault();
          onSelectMenuIndex(prev => (prev - 1 + MENU_ITEMS.length) % MENU_ITEMS.length);
        }
        if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
          e.preventDefault();
          onSelectMenuIndex(prev => (prev + 1) % MENU_ITEMS.length);
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          onOpenModal(MENU_ITEMS[selectedMenuIndex].id);
        }
      }

      // Escape to close modals
      if (e.key === 'Escape') {
        if (activeItem) {
          onCloseItemModal();
        } else if (activeModal) {
          onCloseModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screen, activeModal, activeItem, selectedMenuIndex, onStartGame, onSelectMenuIndex, onOpenModal, onCloseItemModal, onCloseModal]);
}

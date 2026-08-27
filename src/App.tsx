import React, { useState, useCallback } from 'react';
import { MenuId, Project } from './types';
import { BackgroundStars } from './components/common/BackgroundStars';
import { ScanlineOverlay } from './components/common/ScanlineOverlay';
import { Header } from './components/layout/Header';
import { PlayerCard } from './components/layout/PlayerCard';
import { TitleScreen } from './components/screens/TitleScreen';
import { CommandMenu } from './components/screens/CommandMenu';
import { AboutModal } from './components/modals/AboutModal';
import { InventoryModal } from './components/modals/InventoryModal';
import { ItemDetailModal } from './components/modals/ItemDetailModal';
import { StatsModal } from './components/modals/StatsModal';
import { QuestLogModal } from './components/modals/QuestLogModal';
import { SavePointModal } from './components/modals/SavePointModal';
import { useKonamiCode } from './hooks/useKonamiCode';
import { useKeyboardNav } from './hooks/useKeyboardNav';

export const App: React.FC = () => {
  const [screen, setScreen] = useState<'title' | 'menu'>('title');
  const [activeModal, setActiveModal] = useState<MenuId | null>(null);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(0);
  const [isStarting, setIsStarting] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { isRainbowMode, toggleRainbowMode } = useKonamiCode();

  const handleStartGame = useCallback(() => {
    if (isStarting) return;
    setIsStarting(true);
    setTimeout(() => {
      setScreen('menu');
      setIsStarting(false);
    }, 500);
  }, [isStarting]);

  const handleOpenModal = useCallback((id: MenuId) => {
    setActiveModal(id);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const handleCloseItemModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Keyboard navigation engine
  useKeyboardNav({
    screen,
    activeModal,
    activeItem: selectedProject,
    selectedMenuIndex,
    onStartGame: handleStartGame,
    onSelectMenuIndex: setSelectedMenuIndex,
    onOpenModal: handleOpenModal,
    onCloseItemModal: handleCloseItemModal,
    onCloseModal: handleCloseModal
  });

  return (
    <div
      className={`min-h-screen w-full bg-[#060a18] text-white overflow-hidden relative select-none flex flex-col ${
        isRainbowMode ? 'rainbow-mode' : ''
      }`}
      style={{ fontFamily: "'VT323', monospace" }}
    >
      {/* Background Animated Stars */}
      <BackgroundStars />

      {/* Retro CRT Scanline Layer */}
      <ScanlineOverlay />

      {/* Top Right Quick GitHub Link (matching original) */}
      <a
        href="https://github.com/wongpinter"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="wongpinter (Sugeng. S) · GitHub"
        className="fixed top-3 right-3 z-[60] w-10 h-10 bg-black border-[3px] border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors press text-[12px]"
      >
        ⌁
      </a>

      {/* Main View Router */}
      {screen === 'title' ? (
        <TitleScreen onStart={handleStartGame} isStarting={isStarting} />
      ) : (
        <div className="relative min-h-[100dvh] w-full flex flex-col justify-between bg-[#060a18] overflow-hidden">
          {/* Top Header */}
          <Header
            isRainbowMode={isRainbowMode}
            onToggleRainbow={toggleRainbowMode}
          />

          {/* Background Ambient Texture */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/avatar.webp"
              className="w-full h-full object-cover opacity-[0.10]"
              alt="Jakarta night skyline background"
            />
            <div className="absolute inset-0 bg-[#060a18]/85" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#060a18]/40 via-transparent to-[#060a18]" />
          </div>

          {/* Main Content Area */}
          <div className="relative z-10 w-full max-w-[1100px] mx-auto px-3 md:px-6 py-6 md:py-8 flex flex-col gap-4 flex-1 justify-center">
            {/* Game Screen Frame */}
            <div className="w-full bg-[#0a1228]/90 backdrop-blur-[2px] border-[4px] border-white game-screen-shadow p-3 md:p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
                {/* Left Sidebar (PlayerCard) */}
                <PlayerCard isRainbowMode={isRainbowMode} />

                {/* Right Content (CommandMenu) */}
                <CommandMenu
                  selectedIndex={selectedMenuIndex}
                  onSelectIndex={setSelectedMenuIndex}
                  onOpenModal={handleOpenModal}
                />
              </div>
            </div>

            {/* Bottom Status Banner */}
            {!activeModal && !selectedProject && (
              <div className="w-full border-[4px] border-white/20 bg-black/60 backdrop-blur px-3 py-2 flex items-center justify-between press text-[7px] text-white/30">
                <span>© SUGENG SUPRIYADI • WONGPINTER.COM • GO 95</span>
                <a
                  href="https://github.com/wongpinter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline hover:text-white"
                >
                  wongpinter (Sugeng. S) · GitHub • JAKARTA NIGHTS 2025
                </a>
                <span className="md:hidden">12+ YRS</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modals */}
      {activeModal === 'about' && <AboutModal onClose={handleCloseModal} />}
      {activeModal === 'inventory' && (
        <InventoryModal
          onClose={handleCloseModal}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}
      {activeModal === 'stats' && <StatsModal onClose={handleCloseModal} />}
      {activeModal === 'quests' && <QuestLogModal onClose={handleCloseModal} />}
      {activeModal === 'save' && <SavePointModal onClose={handleCloseModal} />}

      {/* Item Detail Modal */}
      {selectedProject && (
        <ItemDetailModal
          project={selectedProject}
          onClose={handleCloseItemModal}
        />
      )}
    </div>
  );
};

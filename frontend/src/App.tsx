import React, { useState, useEffect, useCallback, useRef } from 'react';
import { profileData } from './data/profile';
import { deckCards } from './data/cards';
import { Header } from './components/Header';
import { CardDeck } from './components/CardDeck';
import { DeckControls } from './components/DeckControls';
import { ExpandedModal } from './components/ExpandedModal';
import { TerminalModal } from './components/TerminalModal';
import { soundEngine } from './utils/audio';

export const App: React.FC = () => {
  const [deckMode, setDeckMode] = useState<'stacked' | 'spread'>('stacked');
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [isAudioOn, setIsAudioOn] = useState<boolean>(true);

  const lastWheelTimeRef = useRef<number>(0);

  // Stepper & Wheel Scroll Navigation
  const navigateDeck = useCallback((direction: number) => {
    soundEngine.playHover();
    setActiveCardIndex((prev) => {
      const nextIndex = (prev + direction + deckCards.length) % deckCards.length;
      return nextIndex;
    });
  }, []);

  // Cursor Wheel / Trackpad Scroll Listener (STRICTLY HORIZONTAL deltaX IN SPREAD VIEW)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // ONLY active in Spread View when modal or terminal are NOT open
      if (deckMode !== 'spread' || expandedIndex !== null || isTerminalOpen) return;

      // Ignore vertical scrolling (deltaY) to prevent user confusion between up/down vs left/right
      if (Math.abs(e.deltaX) < 8) return;

      const now = Date.now();
      // Throttle wheel scroll ticks by 200ms for smooth horizontal card cycling
      if (now - lastWheelTimeRef.current < 200) return;

      lastWheelTimeRef.current = now;
      if (e.deltaX > 0) {
        // Scroll Right -> Cycle focus to the Right card (+1)
        navigateDeck(1);
      } else {
        // Scroll Left -> Cycle focus to the Left card (-1)
        navigateDeck(-1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [deckMode, expandedIndex, isTerminalOpen, navigateDeck]);

  // Section Cycling inside Expanded Modal
  const cycleModalSection = useCallback((direction: number) => {
    setExpandedIndex((prev) => {
      if (prev === null) return 0;
      const nextIndex = (prev + direction + deckCards.length) % deckCards.length;
      return nextIndex;
    });
  }, []);

  // Global Keyboard Shortcuts (Arrow Keys)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (expandedIndex !== null || isTerminalOpen) return;

      if (e.key === 'ArrowLeft') {
        navigateDeck(-1);
      } else if (e.key === 'ArrowRight') {
        navigateDeck(1);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [expandedIndex, isTerminalOpen, navigateDeck]);

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen overflow-x-hidden tech-grid flex flex-col justify-between selection:bg-primary-container selection:text-surface-container-lowest font-body-md relative">
      {/* Top Application Header Bar */}
      <Header
        onResetDeck={() => {
          soundEngine.playHover();
          setExpandedIndex(null);
          setDeckMode('stacked');
        }}
        onToggleTerminal={() => {
          soundEngine.playModalOpen();
          setIsTerminalOpen(true);
        }}
        isAudioOn={isAudioOn}
        onToggleAudio={() => setIsAudioOn(!isAudioOn)}
      />

      {/* Main Canvas Container */}
      <main className="relative flex-1 w-full max-w-[1440px] mx-auto pt-24 pb-12 px-gutter-sm md:px-margin flex flex-col justify-between items-center z-10">
        {/* Identity Telemetry Header */}
        <section className="w-full text-center flex flex-col items-center gap-space-xs mb-space-md max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-space-sm py-1 border border-outline-variant bg-surface-container/60 mb-space-xs">
            <span className="w-2 h-2 rounded-full bg-primary-container pulse-dot"></span>
            <span className="font-label-sm text-label-sm text-primary-container tracking-widest uppercase">
              {profileData.statusBadge}
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight font-extrabold uppercase">
            {profileData.name}
          </h1>

          <p className="font-label-lg text-label-lg text-primary-container tracking-wider font-bold uppercase">
            {profileData.title} // {profileData.subTitle}
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1 text-center font-normal">
            {profileData.bio}
          </p>
        </section>

        {/* Card Deck Engine Viewport */}
        <CardDeck
          mode={deckMode}
          activeCardIndex={activeCardIndex}
          onSelectCard={(idx) => {
            setActiveCardIndex(idx);
          }}
          onExpandCard={(idx) => {
            setActiveCardIndex(idx);
            setExpandedIndex(idx);
            soundEngine.playModalOpen();
          }}
        />

        {/* Deck Controller HUD & Quick Selector */}
        <DeckControls
          mode={deckMode}
          activeCardIndex={activeCardIndex}
          totalCards={deckCards.length}
          onSetMode={(m) => {
            soundEngine.playHover();
            setDeckMode(m);
          }}
          onNavigate={navigateDeck}
        />
      </main>

      {/* Expanded Modal Overlay (Full-screen Experience) */}
      <ExpandedModal
        expandedIndex={expandedIndex}
        onClose={() => setExpandedIndex(null)}
        onCycleSection={cycleModalSection}
      />

      {/* Interactive Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
};

export default App;

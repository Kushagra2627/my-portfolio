import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DeckControlsProps {
  mode: 'stacked' | 'spread';
  activeCardIndex: number;
  totalCards: number;
  onSetMode: (mode: 'stacked' | 'spread') => void;
  onNavigate: (direction: number) => void;
}

export const DeckControls: React.FC<DeckControlsProps> = ({
  mode,
  activeCardIndex,
  totalCards,
  onSetMode,
  onNavigate
}) => {
  const formatCardNumber = (num: number) => (num < 9 ? `0${num + 1}` : `${num + 1}`);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-md border border-outline-variant bg-surface-container/80 backdrop-blur-sm p-space-sm z-20">
      {/* Spread / Stack Mode Toggle */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => onSetMode('stacked')}
          className={`px-space-sm py-1 font-label-sm text-label-sm font-bold border ${
            mode === 'stacked'
              ? 'bg-primary-container text-on-primary-container border-primary-container'
              : 'text-on-surface-variant hover:text-on-surface border-transparent hover:border-outline-variant'
          }`}
        >
          [ STACKED DECK ]
        </button>

        <button
          onClick={() => onSetMode('spread')}
          className={`px-space-sm py-1 font-label-sm text-label-sm font-bold border ${
            mode === 'spread'
              ? 'bg-primary-container text-on-primary-container border-primary-container'
              : 'text-on-surface-variant hover:text-on-surface border-transparent hover:border-outline-variant'
          }`}
        >
          [ SPREAD VIEW ]
        </button>
      </div>

      {/* Stepper controls */}
      <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
        <button
          onClick={() => onNavigate(-1)}
          className="p-1 border border-outline-variant hover:border-primary-container hover:text-primary-container transition-colors"
          title="Previous Card (← / Scroll Left)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        <span className="px-space-xs text-on-surface font-bold">
          CARD {formatCardNumber(activeCardIndex)} / {formatCardNumber(totalCards - 1)}
        </span>

        <button
          onClick={() => onNavigate(1)}
          className="p-1 border border-outline-variant hover:border-primary-container hover:text-primary-container transition-colors"
          title="Next Card (→ / Scroll Right)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Keyboard & Scroll Guide */}
      <div className="hidden md:flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
        {mode === 'spread' ? (
          <>
            <kbd className="px-1.5 py-0.5 bg-surface-container-lowest border border-outline-variant text-on-surface">← → SCROLL</kbd>
            <span>FAN CARDS</span>
          </>
        ) : (
          <>
            <kbd className="px-1.5 py-0.5 bg-surface-container-lowest border border-outline-variant text-on-surface">← →</kbd>
            <span>CYCLE</span>
          </>
        )}
        <kbd className="px-1.5 py-0.5 bg-surface-container-lowest border border-outline-variant text-on-surface ml-1">ESC</kbd>
        <span>BACK</span>
      </div>
    </div>
  );
};

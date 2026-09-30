import React, { useState, useEffect } from 'react';
import { deckCards } from '../data/cards';
import { DeckCard } from './DeckCard';

interface CardDeckProps {
  mode: 'stacked' | 'spread';
  activeCardIndex: number;
  onSelectCard: (index: number) => void;
  onExpandCard: (index: number) => void;
}

export const CardDeck: React.FC<CardDeckProps> = ({
  mode,
  activeCardIndex,
  onSelectCard,
  onExpandCard
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id="deckViewport"
      className="relative w-full max-w-[1240px] h-[460px] sm:h-[500px] md:h-[540px] my-space-sm flex justify-center items-center perspective-[1200px] overflow-visible z-10"
    >
      {/* Ambient Glow Orbs */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-secondary-fixed/5 rounded-full blur-3xl pointer-events-none"></div>

      {deckCards.map((card, index) => (
        <DeckCard
          key={card.id}
          card={card}
          index={index}
          totalCards={deckCards.length}
          mode={mode}
          activeCardIndex={activeCardIndex}
          windowWidth={windowWidth}
          onSelect={onSelectCard}
          onExpand={onExpandCard}
        />
      ))}
    </div>
  );
};

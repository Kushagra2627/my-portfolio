import React, { useEffect } from 'react';
import { deckCards } from '../data/cards';
import { ArrowLeft, ArrowUp, ArrowDown, X } from 'lucide-react';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { soundEngine } from '../utils/audio';

interface ExpandedModalProps {
  expandedIndex: number | null;
  onClose: () => void;
  onCycleSection: (direction: number) => void;
}

export const ExpandedModal: React.FC<ExpandedModalProps> = ({
  expandedIndex,
  onClose,
  onCycleSection
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (expandedIndex === null) return;

      if (e.key === 'Escape') {
        soundEngine.playModalOpen();
        onClose();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        soundEngine.playHover();
        onCycleSection(-1);
      } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        soundEngine.playHover();
        onCycleSection(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedIndex, onClose, onCycleSection]);

  if (expandedIndex === null) return null;

  const currentCard = deckCards[expandedIndex];

  const renderSectionContent = (index: number) => {
    switch (index) {
      case 0: return <AboutSection />;
      case 1: return <ProjectsSection />;
      case 2: return <ExperienceSection />;
      case 3: return <SkillsSection />;
      case 4: return <AchievementsSection />;
      case 5: return <EducationSection />;
      case 6: return <ContactSection />;
      default: return <AboutSection />;
    }
  };

  return (
    <div
      id="expandedOverlay"
      className="fixed inset-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl opacity-100 flex flex-col justify-between overflow-y-auto transition-opacity duration-300"
    >
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 w-full bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant px-gutter-sm md:px-margin py-space-sm flex justify-between items-center">
        <button
          onClick={() => {
            soundEngine.playModalOpen();
            onClose();
          }}
          className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface border border-outline-variant px-space-md py-space-xs hover:border-primary-container hover:text-primary-container transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>[← BACK TO DECK]</span>
        </button>

        <div className="flex items-center gap-space-sm">
          <span className="font-label-md text-label-md text-primary-container tracking-wider font-bold">
            SECTION {currentCard.cardNumber} / 07 — {currentCard.title.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-space-xs font-label-sm text-label-sm">
          <button
            onClick={() => {
              soundEngine.playHover();
              onCycleSection(-1);
            }}
            className="p-1.5 border border-outline-variant hover:border-primary-container hover:text-primary-container transition-colors"
            title="Previous Section (↑)"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              soundEngine.playHover();
              onCycleSection(1);
            }}
            className="p-1.5 border border-outline-variant hover:border-primary-container hover:text-primary-container transition-colors"
            title="Next Section (↓)"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              soundEngine.playModalOpen();
              onClose();
            }}
            className="p-1.5 border border-outline-variant hover:border-primary-container hover:text-primary-container transition-colors ml-2"
            title="Close [ESC]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Dynamic Section Content Container */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-gutter-sm md:px-margin py-space-xl text-on-surface">
        {renderSectionContent(expandedIndex)}
      </div>
    </div>
  );
};

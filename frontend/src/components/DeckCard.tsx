import React from 'react';
import { DeckCardMeta } from '../data/cards';
import { ArrowRight, Fingerprint, Terminal, Briefcase, Cpu, Award, GraduationCap, Send } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface DeckCardProps {
  card: DeckCardMeta;
  index: number;
  totalCards: number;
  mode: 'stacked' | 'spread';
  activeCardIndex: number;
  windowWidth: number;
  onExpand: (index: number) => void;
  onSelect: (index: number) => void;
}

export const DeckCard: React.FC<DeckCardProps> = ({
  card,
  index,
  totalCards,
  mode,
  activeCardIndex,
  windowWidth,
  onExpand,
  onSelect
}) => {
  const isTopCard = activeCardIndex === index;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'fingerprint': return <Fingerprint className="w-4 h-4 text-primary-container" />;
      case 'terminal': return <Terminal className="w-4 h-4 text-primary-container" />;
      case 'work': return <Briefcase className="w-4 h-4 text-primary-container" />;
      case 'memory': return <Cpu className="w-4 h-4 text-primary-container" />;
      case 'military_tech': return <Award className="w-4 h-4 text-primary-container" />;
      case 'school': return <GraduationCap className="w-4 h-4 text-primary-container" />;
      case 'send': return <Send className="w-4 h-4 text-primary-container" />;
      default: return <Fingerprint className="w-4 h-4 text-primary-container" />;
    }
  };

  // Calculate relative offset from active card (-3, -2, -1, 0, 1, 2, 3)
  const getRelativeOffset = (): number => {
    let diff = index - activeCardIndex;
    const half = Math.floor(totalCards / 2);
    if (diff > half) diff -= totalCards;
    if (diff < -half) diff += totalCards;
    return diff;
  };

  // Get responsive scale factor for X/Y offsets and rotation based on screen width
  const getResponsiveMultiplier = () => {
    if (windowWidth >= 1280) return { x: 1.0, y: 1.0, rotate: 1.0 };
    if (windowWidth >= 1024) return { x: 0.82, y: 0.85, rotate: 0.9 };
    if (windowWidth >= 768)  return { x: 0.60, y: 0.70, rotate: 0.75 };
    if (windowWidth >= 480)  return { x: 0.40, y: 0.50, rotate: 0.60 };
    return { x: 0.28, y: 0.38, rotate: 0.45 };
  };

  // 3D Positioning & Transform Calculation
  const getCardStyle = (): React.CSSProperties => {
    const rel = getRelativeOffset();

    if (mode === 'stacked') {
      // STACKED MODE: Layered vertically behind active front card
      const offset = (index - activeCardIndex + totalCards) % totalCards;

      if (offset === 0) {
        return {
          transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)',
          zIndex: 30,
          opacity: 1
        };
      }

      const translateY = offset * 12;
      const scale = Math.max(0.82, 1 - offset * 0.035);
      const rotate = (offset % 2 === 1 ? 0.6 : -0.6) * Math.min(offset, 4);
      const zIndex = 30 - offset;
      const opacity = offset > 4 ? 0 : 1 - offset * 0.16;

      return {
        transform: `translate3d(0px, ${translateY}px, 0px) scale(${scale}) rotate(${rotate}deg)`,
        zIndex,
        opacity
      };
    } else {
      // SPREAD MODE: Physical 3D radial fanned deck composition around active card
      const mult = getResponsiveMultiplier();

      let baseX = 0;
      let baseY = 0;
      let baseRotate = 0;
      let baseScale = 1;
      let zIndex = 15;

      switch (rel) {
        case 0:
          baseX = 0;
          baseY = 0;
          baseRotate = 0;
          baseScale = 1.0;
          zIndex = 35;
          break;
        case -1:
          baseX = -190;
          baseY = 18;
          baseRotate = -8;
          baseScale = 0.92;
          zIndex = 28;
          break;
        case 1:
          baseX = 190;
          baseY = 18;
          baseRotate = 8;
          baseScale = 0.92;
          zIndex = 28;
          break;
        case -2:
          baseX = -340;
          baseY = 58;
          baseRotate = -15;
          baseScale = 0.85;
          zIndex = 22;
          break;
        case 2:
          baseX = 340;
          baseY = 58;
          baseRotate = 15;
          baseScale = 0.85;
          zIndex = 22;
          break;
        case -3:
          baseX = -460;
          baseY = 115;
          baseRotate = -22;
          baseScale = 0.78;
          zIndex = 16;
          break;
        case 3:
          baseX = 460;
          baseY = 115;
          baseRotate = 22;
          baseScale = 0.78;
          zIndex = 16;
          break;
      }

      const finalX = baseX * mult.x;
      const finalY = baseY * mult.y;
      const finalRotate = baseRotate * mult.rotate;

      return {
        transform: `translate3d(${finalX}px, ${finalY}px, 0px) scale(${baseScale}) rotate(${finalRotate}deg)`,
        zIndex,
        opacity: 1
      };
    }
  };

  return (
    <div
      onClick={() => {
        soundEngine.playSelect();
        if (isTopCard) {
          onExpand(index);
        } else {
          onSelect(index);
        }
      }}
      onMouseEnter={() => soundEngine.playHover(index * 0.2)}
      style={getCardStyle()}
      className={`deck-card absolute w-[86%] sm:w-[500px] md:w-[560px] lg:w-[600px] h-[360px] md:h-[390px] bg-surface-container-low border p-space-lg cursor-pointer flex flex-col justify-between group hover:border-primary-container ${
        isTopCard ? 'border-primary-container/80 photon-glow' : 'border-outline-variant'
      }`}
    >
      {/* Top Header */}
      <div className="flex justify-between items-center border-b border-outline-variant pb-space-sm">
        <div className="flex items-center gap-space-xs font-label-md text-label-md text-primary-container">
          {renderIcon(card.icon)}
          <span>{card.subtitle}</span>
        </div>
        <span className="font-label-sm text-label-sm text-outline border border-outline-variant px-space-xs py-0.5">
          {card.badge}
        </span>
      </div>

      {/* Main Body */}
      <div className="space-y-space-sm my-auto">
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          [ {card.cardNumber} // {card.title.split(' ')[0]} ]
        </span>
        <h2 className="font-headline-md text-headline-md text-primary group-hover:text-primary-container transition-colors">
          {card.title}
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
          {card.description}
        </p>

        {/* Metrics Grid */}
        {card.metrics && (
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-outline-variant/60 font-label-sm text-label-sm">
            {card.metrics.map((m, i) => (
              <div key={i} className="bg-surface-container p-2 border border-outline-variant/40">
                <div className="text-primary-container font-bold">{m.value}</div>
                <div className="text-outline text-[9px]">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        {card.tags && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {card.tags.map((t) => (
              <span key={t} className="text-label-sm font-label-sm border border-outline-variant px-2 py-0.5 bg-surface-container text-on-surface-variant">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between items-center pt-space-sm border-t border-outline-variant font-label-sm text-label-sm">
        <span className="text-outline group-hover:text-primary-container flex items-center gap-1 transition-colors">
          <span className="w-1.5 h-1.5 bg-primary-container inline-block"></span>
          PRESS TO EXPAND
        </span>
        <ArrowRight className="w-4.5 h-4.5 text-outline group-hover:text-primary-container group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

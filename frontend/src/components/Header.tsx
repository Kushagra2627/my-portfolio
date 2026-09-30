import React from 'react';
import { profileData } from '../data/profile';
import { Volume2, VolumeX, Download, Terminal } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface HeaderProps {
  onResetDeck: () => void;
  onToggleTerminal: () => void;
  isAudioOn: boolean;
  onToggleAudio: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onResetDeck,
  onToggleTerminal,
  isAudioOn,
  onToggleAudio
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-gutter-sm md:px-margin bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant py-space-sm">
      {/* Brand & Identity Anchor */}
      <div className="flex items-center gap-space-md">
        <button
          onClick={onResetDeck}
          className="text-label-lg font-label-lg font-bold tracking-wider text-on-surface uppercase flex items-center gap-space-xs group text-left"
        >
          <span className="text-primary-container inline-block transition-transform group-hover:rotate-90">❖</span>
          <span>{profileData.name} // PORTFOLIO</span>
        </button>
        <span className="hidden xl:inline-block text-label-sm font-label-sm text-outline border border-outline-variant px-space-xs py-0.5">
          {profileData.systemRevision}
        </span>
      </div>

      {/* Trailing Tools */}
      <div className="flex items-center gap-space-sm">
        {/* SFX Toggle */}
        <button
          onClick={() => {
            onToggleAudio();
            soundEngine.toggleAudio();
          }}
          className="relative group flex items-center gap-space-xs border border-outline-variant px-space-sm py-space-xs font-label-sm text-label-sm text-on-surface hover:border-primary-container transition-all"
          title="MECHANICAL FLIP AUDIO (WEB AUDIO SYNTH)"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isAudioOn ? 'bg-primary-container pulse-dot' : 'bg-outline'
            }`}
          ></span>
          {isAudioOn ? (
            <Volume2 className="w-4 h-4 text-primary-container" />
          ) : (
            <VolumeX className="w-4 h-4 text-outline" />
          )}
          <span className="font-bold tracking-wider">SFX [{isAudioOn ? 'ON' : 'OFF'}]</span>
        </button>

        {/* Download Resume */}
        <a
          href={profileData.resumeUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-space-xs bg-primary-container text-on-primary-container px-space-md py-space-xs font-label-md text-label-md font-bold uppercase transition-colors hover:bg-secondary-container hover:text-on-secondary-container"
        >
          <Download className="w-4 h-4" />
          <span>DOWNLOAD_RESUME</span>
        </a>

        {/* Terminal Modal Trigger */}
        <button
          onClick={onToggleTerminal}
          className="p-space-xs border border-outline-variant text-on-surface hover:border-primary-container hover:text-primary-container transition-colors"
          title="EXECUTE_TERMINAL"
        >
          <Terminal className="w-4.5 h-4.5" />
        </button>
      </div>
    </header>
  );
};

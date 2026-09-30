import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import { skillsData } from '../data/skills';
import { achievementsData } from '../data/achievements';
import { soundEngine } from '../utils/audio';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: number;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 1,
      command: 'sys.init',
      output: (
        <div className="text-on-surface-variant space-y-1">
          <p className="text-primary-container font-bold">KUSHAGRA TOMAR PORTFOLIO CLI ENGINE [v3.4.1]</p>
          <p>Type <span className="text-primary-container">help</span> to view available system commands.</p>
        </div>
      )
    }
  ]);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    soundEngine.playHover(0.8);
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="text-on-surface-variant space-y-1">
            <p className="text-primary font-bold">Available Commands:</p>
            <p><span className="text-primary-container">bio / about</span> — View identity telemetry</p>
            <p><span className="text-primary-container">projects</span> — List production builds</p>
            <p><span className="text-primary-container">experience</span> — View iTURSH venture details</p>
            <p><span className="text-primary-container">skills</span> — View capability registry</p>
            <p><span className="text-primary-container">achievements</span> — View competitive ranks & honors</p>
            <p><span className="text-primary-container">education</span> — View academic details</p>
            <p><span className="text-primary-container">contact</span> — View direct dispatch channels</p>
            <p><span className="text-primary-container">clear</span> — Clear terminal output</p>
            <p><span className="text-primary-container">exit</span> — Terminate session</p>
          </div>
        );
        break;

      case 'bio':
      case 'about':
        outputNode = (
          <div className="text-on-surface-variant space-y-1">
            <p><span className="text-primary-container">NAME:</span> {profileData.name}</p>
            <p><span className="text-primary-container">DEGREE:</span> B.Tech CSE @ IIIT Bhopal (2024-Present)</p>
            <p><span className="text-primary-container">CODEFORCES:</span> kushagratomar2627 (Rating 1274 // Round 1112 Rank 289)</p>
            <p><span className="text-primary-container">GITHUB:</span> {profileData.github}</p>
            <p><span className="text-primary-container">EMAIL:</span> {profileData.email}</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-on-surface-variant space-y-2">
            {projectsData.map((p, i) => (
              <div key={i} className="border-l border-primary-container/40 pl-2">
                <p className="text-primary font-bold">{p.projectNumber}: {p.title}</p>
                <p className="text-[11px] text-outline">Tech: {p.technologies.join(', ')}</p>
                <p className="text-[12px]">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="text-on-surface-variant space-y-2">
            {experienceData.map((exp, i) => (
              <div key={i} className="border-l border-primary-container/40 pl-2">
                <p className="text-primary font-bold">{exp.role} @ {exp.company}</p>
                <p className="text-[11px] text-primary-container">{exp.period}</p>
                <p className="text-[12px]">{exp.summary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-on-surface-variant space-y-1">
            {skillsData.map((s, i) => (
              <p key={i}>
                <span className="text-primary-container font-bold">{s.category}:</span> {s.skills.join(', ')}
              </p>
            ))}
          </div>
        );
        break;

      case 'achievements':
        outputNode = (
          <div className="text-on-surface-variant space-y-1">
            {achievementsData.map((a, i) => (
              <p key={i}>• <span className="text-primary font-bold">{a.title}</span> — {a.subtitle}</p>
            ))}
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="text-on-surface-variant space-y-1">
            <p><span className="text-primary font-bold">IIIT Bhopal:</span> B.Tech CSE (2024–Present)</p>
            <p><span className="text-primary font-bold">St. Mary's Sr. Sec. School Haridwar:</span> Class XII CBSE (89.8%)</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-on-surface-variant space-y-1">
            <p><span className="text-primary-container">EMAIL:</span> {profileData.email}</p>
            <p><span className="text-primary-container">PHONE:</span> {profileData.phone}</p>
            <p><span className="text-primary-container">GITHUB:</span> {profileData.github}</p>
            <p><span className="text-primary-container">LINKEDIN:</span> {profileData.linkedin}</p>
            <p><span className="text-primary-container">CODEFORCES:</span> {profileData.codeforces}</p>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      case 'exit':
      case 'close':
        onClose();
        setInputVal('');
        return;

      default:
        outputNode = (
          <p className="text-error">
            Command not recognized: '<span className="underline">{cmd}</span>'. Type 'help' for available commands.
          </p>
        );
    }

    setLogs((prev) => [
      ...prev,
      { id: Date.now(), command: inputVal, output: outputNode }
    ]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center p-space-sm sm:p-space-lg">
      <div className="w-full max-w-3xl h-[520px] bg-surface-container-lowest border border-primary-container shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="bg-surface-container px-space-md py-space-xs border-b border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary-container" />
            <span className="font-label-sm text-label-sm text-on-surface font-bold">
              root@kushagra-vm:~# (BASH CLI)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-outline hover:text-primary-container transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body Log */}
        <div className="flex-1 p-space-md overflow-y-auto space-y-space-sm font-body-sm text-body-sm font-mono">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-primary">
                <span className="text-primary-container font-bold">root@kushagra-vm:~#</span>
                <span>{log.command}</span>
              </div>
              <div className="pl-4">{log.output}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Command Input Prompt */}
        <form onSubmit={handleCommand} className="bg-surface-container p-space-xs border-t border-outline-variant flex items-center gap-2">
          <span className="text-primary-container font-bold font-mono text-label-sm pl-2">
            root@kushagra-vm:~#
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type command (e.g. help, bio, projects)..."
            className="flex-1 bg-transparent border-none text-primary font-mono font-body-sm focus:outline-none"
          />
          <button type="submit" className="p-1 text-primary-container hover:text-primary">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

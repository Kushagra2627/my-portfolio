import React from 'react';
import { achievementsData } from '../../data/achievements';
import { Award, Trophy, Code, Target, Activity } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'cf-289': return <Trophy className="w-5 h-5 text-primary-container" />;
      case 'cf-pupil': return <Code className="w-5 h-5 text-primary-container" />;
      case 'dsa-500': return <Target className="w-5 h-5 text-primary-container" />;
      case 'sih-selection': return <Award className="w-5 h-5 text-primary-container" />;
      case 'basketball-state': return <Activity className="w-5 h-5 text-primary-container" />;
      default: return <Award className="w-5 h-5 text-primary-container" />;
    }
  };

  return (
    <div className="space-y-space-xl">
      <div className="border-b border-outline-variant pb-space-lg">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">
          [ VERIFIED MILESTONES // HONORS ]
        </span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-extrabold uppercase mt-1">
          ACHIEVEMENTS
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-2 font-normal">
          Competitive contest ranks, institutional hackathon selections, algorithmic solve counts, and state athletic achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            className="bg-surface-container-low border border-outline-variant p-space-lg flex flex-col justify-between hover:border-primary-container transition-colors"
          >
            <div>
              <div className="flex justify-between items-center mb-space-xs">
                <span className="font-label-sm text-label-sm text-outline uppercase">{item.category}</span>
                <span className="font-label-sm text-label-sm text-primary-container border border-primary-container/40 bg-surface-container px-2 py-0.5">
                  {item.badge}
                </span>
              </div>

              <div className="flex items-start gap-space-sm mt-space-sm">
                <div className="p-2 bg-surface-container border border-outline-variant mt-1">
                  {getIcon(item.id)}
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">{item.title}</h3>
                  <p className="font-label-sm text-label-sm text-primary-container mt-0.5">{item.subtitle}</p>
                </div>
              </div>

              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

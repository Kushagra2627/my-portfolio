import React from 'react';
import { skillsData } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  return (
    <div className="space-y-space-xl">
      <div className="border-b border-outline-variant pb-space-lg">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">
          [ CAPABILITY REGISTRY // SYSTEM TOOLS ]
        </span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-extrabold uppercase mt-1">
          TECHNICAL SKILLS
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-2 font-normal">
          No vague skill bars or percentage meters. Raw operational fluency across modern languages, distributed state engines, smart contract development, and ML models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {skillsData.map((categoryItem, idx) => (
          <div
            key={idx}
            className="bg-surface-container-low border border-outline-variant p-space-lg hover:border-primary-container transition-colors"
          >
            <div className="flex items-center justify-between border-b border-outline-variant pb-space-sm mb-space-md">
              <span className="font-label-md text-label-md text-primary-container font-bold">
                {categoryItem.category}
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                {categoryItem.skills.length} MODULES
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categoryItem.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-surface-container border border-outline-variant text-on-surface font-label-sm text-label-sm hover:border-primary-container hover:text-primary-container transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

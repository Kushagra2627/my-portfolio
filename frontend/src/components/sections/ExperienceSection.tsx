import React from 'react';
import { experienceData } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-space-xl">
      <div className="border-b border-outline-variant pb-space-lg">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">
          [ VENTURE LEADERSHIP & ENGINEERING TIMELINE ]
        </span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-extrabold uppercase mt-1">
          WORK EXPERIENCE
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-2 font-normal">
          Demonstrated capability taking software concepts from ideation and zero lines of code to commercial validation and active student userbases.
        </p>
      </div>

      <div className="border-l-2 border-primary-container pl-space-lg space-y-space-xl relative">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative">
            <span className="absolute -left-[33px] top-1.5 w-3 h-3 bg-primary-container border-4 border-surface-container-lowest rounded-full"></span>
            
            <div className="bg-surface-container-low border border-outline-variant p-space-lg">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 mb-2">
                <h3 className="font-headline-md text-headline-md text-primary">{exp.role}</h3>
                <span className="font-label-sm text-label-sm text-primary-container border border-primary-container/30 bg-surface-container px-2 py-1">
                  {exp.period}
                </span>
              </div>
              
              <div className="font-label-md text-label-md text-primary-container mb-space-sm font-bold">
                {exp.company.toUpperCase()} // {exp.location.toUpperCase()}
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                {exp.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md border-t border-outline-variant pt-space-md">
                <div>
                  <div className="font-label-sm text-label-sm text-outline mb-1">ENGINEERING HIGHLIGHTS:</div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-label-sm text-label-sm text-outline mb-1">METRICS & IMPACT:</div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                    {exp.metrics.map((metric, idx) => (
                      <li key={idx} className="text-primary-container font-medium">{metric}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="border border-outline-variant px-2 py-0.5 bg-surface-container font-label-sm text-label-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

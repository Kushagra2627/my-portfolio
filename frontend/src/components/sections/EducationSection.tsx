import React from 'react';
import { educationData } from '../../data/education';

export const EducationSection: React.FC = () => {
  return (
    <div className="space-y-space-xl">
      <div className="border-b border-outline-variant pb-space-lg">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">
          [ ACADEMIC ACCREDITATION // PEDAGOGY ]
        </span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-extrabold uppercase mt-1">
          EDUCATION
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-2 font-normal">
          Formal academic training in computer science engineering and core computer science fundamentals.
        </p>
      </div>

      <div className="space-y-space-lg">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-surface-container-low border border-outline-variant p-space-lg hover:border-primary-container transition-colors"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 mb-2">
              <h3 className="font-headline-md text-headline-md text-primary">{edu.degree}</h3>
              <span className="font-label-sm text-label-sm text-primary-container border border-primary-container/30 bg-surface-container px-2 py-1">
                {edu.period}
              </span>
            </div>

            <div className="font-label-md text-label-md text-primary-container mb-space-sm font-bold">
              {edu.institution.toUpperCase()} // {edu.location.toUpperCase()}
            </div>

            {edu.score && (
              <div className="inline-block bg-primary-container/10 text-primary-container border border-primary-container/30 font-label-sm text-label-sm px-2 py-0.5 mb-2 font-bold">
                {edu.score}
              </div>
            )}

            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              {edu.details}
            </p>

            {edu.coursework && (
              <div className="mt-space-md border-t border-outline-variant pt-space-sm">
                <div className="font-label-sm text-label-sm text-outline mb-2">KEY COURSEWORK:</div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course) => (
                    <span key={course} className="px-2 py-0.5 border border-outline-variant bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

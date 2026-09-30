import React from 'react';
import { projectsData } from '../../data/projects';
import { ExternalLink, Code } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <div className="space-y-space-xl">
      <div className="border-b border-outline-variant pb-space-lg">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">
          [ PRODUCTION BUILDS // SOURCE CONTROL ]
        </span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-extrabold uppercase mt-1">
          FEATURED PROJECTS
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-2 font-normal">
          Every project reflects real database design, algorithm optimization, and clean software architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-surface-container-low border border-outline-variant p-space-lg flex flex-col justify-between group hover:border-primary-container transition-colors"
          >
            <div>
              <div className="flex justify-between items-center text-label-sm font-label-sm text-outline mb-2">
                <span className="text-primary-container font-bold">{project.projectNumber} // {project.badgeText || project.category}</span>
                {project.period && <span>{project.period}</span>}
              </div>
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary-container transition-colors">
                {project.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                {project.description}
              </p>

              <ul className="font-body-sm text-body-sm text-on-surface-variant my-3 space-y-1 list-disc list-inside">
                {project.contributions.map((contrib, i) => (
                  <li key={i}>{contrib}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1 font-label-sm text-label-sm mt-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="border border-outline-variant px-2 py-0.5 bg-surface-container">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-space-sm pt-space-md border-t border-outline-variant mt-space-md font-label-sm text-label-sm">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-on-surface hover:text-primary-container transition-colors"
                >
                  <Code className="w-4 h-4" />
                  <span>VIEW GITHUB</span>
                </a>
              ) : (
                <span className="flex items-center gap-1 text-outline">
                  <Code className="w-4 h-4" />
                  <span>SOURCE CONFIGURED</span>
                </span>
              )}

              {project.liveUrl && (
                <>
                  <span className="text-outline">|</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary-container hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>VIEW LIVE</span>
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

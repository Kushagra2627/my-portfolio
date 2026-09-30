import React from 'react';
import { profileData } from '../../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-space-xl">
      <div className="border-b border-outline-variant pb-space-lg">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">
          [ {profileData.name} // IDENTITY METRICS ]
        </span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-extrabold uppercase mt-1">
          ABOUT THE ENGINEER
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-2 font-normal">
          Pursuing Computer Science & Engineering at the {profileData.institution} (3rd Year, 2024–Present).
          Architecting software systems with mathematical rigor, clean code quality, and production resiliency.
        </p>
      </div>

      {/* Telemetry & Performance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
        <div className="bg-surface-container-low border border-outline-variant p-space-md">
          <div className="font-label-sm text-label-sm text-outline">CODEFORCES_RATING</div>
          <div className="font-headline-lg text-headline-lg text-primary-container font-extrabold mt-1">1274</div>
          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Title: Pupil // Global Round Rank 289</div>
        </div>
        <div className="bg-surface-container-low border border-outline-variant p-space-md">
          <div className="font-label-sm text-label-sm text-outline">ALGORITHMIC_SOLVES</div>
          <div className="font-headline-lg text-headline-lg text-primary font-extrabold mt-1">500+</div>
          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">LeetCode, Codeforces & CodeChef</div>
        </div>
        <div className="bg-surface-container-low border border-outline-variant p-space-md">
          <div className="font-label-sm text-label-sm text-outline">COMMERCIAL_IMPACT</div>
          <div className="font-headline-lg text-headline-lg text-primary-container font-extrabold mt-1">100+</div>
          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Verified student rental bookings</div>
        </div>
        <div className="bg-surface-container-low border border-outline-variant p-space-md">
          <div className="font-label-sm text-label-sm text-outline">NATIONAL_SELECTION</div>
          <div className="font-headline-lg text-headline-lg text-primary font-extrabold mt-1">SIH</div>
          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Smart India Hackathon Selected</div>
        </div>
      </div>

      {/* Terminal Diagnostic Box */}
      <div className="bg-surface-container-lowest border border-outline-variant p-space-md font-body-sm text-body-sm">
        <div className="flex items-center justify-between border-b border-outline-variant pb-2 mb-3 text-label-sm font-label-sm text-outline">
          <span>root@kushagra-vm:~# uname -a & cat /etc/identity</span>
          <span className="text-primary-container">DIAGNOSTIC_VERIFIED</span>
        </div>
        <div className="text-on-surface-variant space-y-2">
          <p><span className="text-primary-container">INSTITUTION:</span> {profileData.institution} (2024–Present)</p>
          <p><span className="text-primary-container">SPECIALIZATION:</span> Full-Stack Scalability, EVM Smart Contracts, Computer Vision & Machine Learning, Competitive Programming.</p>
          <p><span className="text-primary-container">CORE BELIEF:</span> Software must be deterministically fast, cleanly engineered, and solve real-world problems.</p>
        </div>
      </div>
    </div>
  );
};

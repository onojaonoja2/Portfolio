import React from 'react';
import SectionShell from './SectionShell';
import Reveal from './Reveal';

const certifications = [
  {
    title: 'SAP Certified Integration Developer',
    issuer: 'SAP',
    year: '2026',
  },
  {
    title: 'SAP Certified DB Administrator – SAP HANA',
    issuer: 'SAP',
    year: '2026',
  },
  {
    title: 'GitHub Copilot Certified',
    issuer: 'Microsoft',
    year: '2026',
  },
  {
    title: 'Kubernetes & Cloud Native Associate',
    issuer: 'Linux Foundation',
    year: '2026',
  },
  {
    title: 'Elements of AI for Business',
    issuer: 'University of Helsinki',
    year: '2026',
  },
  {
    title: 'AI for Developers I & II',
    issuer: 'ALX Africa',
    year: '2025',
  },
  {
    title: 'Microsoft 365 Fundamentals',
    issuer: 'Microsoft',
    year: '2024',
  },
  {
    title: 'Agile Project Management & IBM Agile/Scrum',
    issuer: 'HP LIFE & IBM',
    year: '2024',
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    year: '2023',
  },
];

const Certifications = () => {
  return (
    <SectionShell
      id="certifications"
      number="03"
      title="Credentials"
      intro="Certified across SAP integration, HANA, cloud-native infrastructure, and AI."
    >
      <div className="border-t border-line">
        <div className="hidden grid-cols-[72px_1fr_180px] gap-6 border-b border-line py-3 sm:grid">
          <span className="eyebrow text-muted">Year</span>
          <span className="eyebrow text-muted">Credential</span>
          <span className="eyebrow text-muted">Issuer</span>
        </div>

        {certifications.map((cert, index) => (
          <Reveal key={`${cert.title}-${cert.year}`} delay={Math.min(index * 35, 210)}>
            <div className="grid grid-cols-[48px_1fr] gap-3 border-b border-line py-5 sm:grid-cols-[72px_1fr_180px] sm:items-baseline sm:gap-6">
              <span className="font-mono text-[11px] font-medium text-accent">
                {cert.year}
              </span>
              <h3 className="font-sans text-[15px] font-medium leading-6 text-ink">
                {cert.title}
              </h3>
              <span className="col-start-2 text-sm text-muted sm:col-start-3">
                {cert.issuer}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
};

export default Certifications;

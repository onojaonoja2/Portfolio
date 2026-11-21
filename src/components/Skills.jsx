import React from 'react';
import SectionShell from './SectionShell';
import Reveal from './Reveal';

const skillGroups = [
  {
    title: 'Full-Stack Web',
    skills: [
      'Next.js',
      'React.js',
      'Vue.js',
      'Node.js',
      'NestJS',
      'Express',
      'TypeScript',
      'JavaScript',
      'Python (Django, Flask)',
      'PHP',
      'Laravel',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Enterprise & SAP Stack',
    skills: ['SAP ABAP', 'SAP Fiori / UI5', 'SAP HANA', 'SAP Integration Suite'],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'AWS (EC2, S3, RDS)',
      'GCP',
      'Docker',
      'Kubernetes Basics',
      'Linux / Shell Scripting',
      'CI/CD',
    ],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SAP HANA DB'],
  },
  {
    title: 'AI & Automation',
    skills: [
      'AI Agentic Workflows',
      'RAG Pipelines',
      'n8n',
      'Zapier',
      'OpenRouter / LLM APIs',
    ],
  },
];

const Skills = () => {
  return (
    <SectionShell
      id="skills"
      number="02"
      title="Capabilities"
      intro="The tools I reach for across product, platform, and enterprise work."
    >
      <div className="border-t border-line">
        <div className="hidden grid-cols-[220px_1fr_48px] gap-6 border-b border-line py-3 sm:grid">
          <span className="eyebrow text-muted">Discipline</span>
          <span className="eyebrow text-muted">Tools</span>
          <span className="eyebrow text-right text-muted">Count</span>
        </div>

        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 50}>
            <div className="grid gap-3 border-b border-line py-7 sm:grid-cols-[220px_1fr_48px] sm:items-baseline sm:gap-6">
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
                {group.title}
              </h3>
              <p className="text-[15px] leading-7 text-ink">
                {group.skills.map((skill, skillIndex) => (
                  <React.Fragment key={skill}>
                    {skill}
                    {skillIndex < group.skills.length - 1 ? (
                      <span className="text-line" aria-hidden="true">
                        {'\u00A0/ '}
                      </span>
                    ) : null}
                  </React.Fragment>
                ))}
              </p>
              <span className="hidden text-right font-mono text-[11px] text-muted sm:block">
                {String(group.skills.length).padStart(2, '0')}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
};

export default Skills;

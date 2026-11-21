import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionShell from './SectionShell';
import Reveal from './Reveal';

const projects = [
  {
    title: "ByteOps Digital",
    description: "A premier provider of tech training, IT consultancy, and digital solutions. Offering expert web development, AI automation, and business innovation services to transform businesses.",
    link: "https://www.byteops.digital/",
    linkText: "Visit ByteOps",
    image: "/new byteops ui.png",
    tags: ["Tech Training", "IT Consultancy", "Digital Solutions", "AI Automation"]
  },
  {
    title: "Elkris Bio Foods CRM & Sugar Tracker",
    description: "A sugar control tracking and CRM tool built with Laravel for Elkris Bio Foods. Manages customer relationships, tracks sugar intake data, and provides insights for healthier living.",
    link: "https://dfas.elkrisfoods.com/",
    linkText: "Visit Elkris Bio Foods",
    image: "/dfas_ui.png",
    tags: ["Laravel", "MySQL", "Health Analytics"]
  },
  {
    title: "TestWise",
    description: "A secure and intelligent AI-assisted online examination platform designed for smart exam management.",
    link: "https://testwise.byteops.digital/",
    linkText: "Visit TestWise",
    image: "/testwiseupdated.png",
    tags: ["React", "Node.js", "AI-Assisted", "Online Examination"]
  },
  {
    title: "Elkris Foods",
    description: "The official Elkris Foods e-commerce website, trusted for healthy, blood-sugar-friendly food alternatives. Browse products, meal ideas, the video hub, and shop online.",
    link: "https://elkrisfoods.com/",
    linkText: "Visit Elkris Foods",
    image: "/elkrisfoodsshot.png",
    tags: ["Laravel", "Inertia.js", "React", "E-Commerce"]
  },
  {
    title: "Learn Edmore",
    description: "An Abuja-based online and on-site tutoring academy with global reach. Expert-led lessons in Mathematics, English Language, Igbo Language, Science, Adult Literacy, and more for early learners through grade school students.",
    link: "https://learnedmore.academy/",
    linkText: "Visit Learn Edmore",
    image: "/learnedmorepic.png",
    tags: ["EdTech", "Tutoring", "Web Platform"]
  },
  {
    title: "Elkris Reporting",
    description: "A secure reporting and management portal for Elkris Bio-Health Foods, giving authenticated users access to internal reports and business tools.",
    link: "https://reporting.elkrisfoods.com/",
    linkText: "Visit Elkris Reporting",
    image: "/reportingElkris.png",
    tags: ["Node.js", "Express", "Internal Portal", "Reporting"]
  }
];

const ProjectMedia = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    tabIndex={-1}
    aria-hidden="true"
    className="block overflow-hidden rounded-[2px] border border-line bg-surface p-2"
  >
    <span className="block overflow-hidden">
      <img
        src={project.image}
        alt=""
        className="aspect-[2/1] w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
        loading="lazy"
        decoding="async"
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = 'https://via.placeholder.com/1200x600?text=Project+Preview';
        }}
      />
    </span>
  </a>
);

const ProjectCard = ({ project, index, variant = 'default' }) => {
  const isFeatured = variant === 'featured';
  const isWide = variant === 'wide';
  const number = String(index + 1).padStart(2, '0');

  const title = (
    <div className="flex items-baseline gap-3">
      <span className="eyebrow text-accent">{number}</span>
      <h3
        className={`font-display leading-[1.1] tracking-[-0.02em] transition-colors duration-200 group-hover:text-accent ${
          isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[1.7rem]'
        }`}
      >
        {project.title}
      </h3>
    </div>
  );

  const description = (
    <>
      <p className="mt-4 text-[15px] leading-7 text-muted">{project.description}</p>
      <p className="eyebrow mt-5 text-muted">{project.tags.join(' / ')}</p>
    </>
  );

  const visitLink = (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="link-arrow mt-5 inline-flex text-sm text-ink"
    >
      {project.linkText}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );

  return (
    <Reveal as="article" delay={Math.min(index * 60, 240)} className="group">
      {isWide ? (
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <ProjectMedia project={project} />
          </div>
          <div className="lg:col-span-5">
            {title}
            {description}
            {visitLink}
          </div>
        </div>
      ) : (
        <>
          <ProjectMedia project={project} />
          <div className={isFeatured ? 'mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10' : 'mt-6'}>
            <div className={isFeatured ? 'lg:col-span-6' : ''}>
              {title}
              {isFeatured ? (
                visitLink
              ) : (
                <>
                  <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-muted">
                    {project.description}
                  </p>
                  <p className="eyebrow mt-5 text-muted">{project.tags.join(' / ')}</p>
                  {visitLink}
                </>
              )}
            </div>
            {isFeatured ? (
              <div className="lg:col-span-6">
                {description}
              </div>
            ) : null}
          </div>
        </>
      )}
    </Reveal>
  );
};

const Projects = () => {
  const [featured, ...rest] = projects;
  const gridProjects = rest.slice(0, 4);
  const closingProject = rest[4];

  return (
    <SectionShell
      id="projects"
      number="01"
      title="Selected work"
      intro="Six products spanning e-commerce, education, enterprise tooling, and internal platforms."
    >
      <ProjectCard project={featured} index={0} variant="featured" />

      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {gridProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index + 1} />
        ))}
      </div>

      {closingProject ? (
        <div className="mt-14 border-t border-line pt-12">
          <ProjectCard
            project={closingProject}
            index={projects.length - 1}
            variant="wide"
          />
        </div>
      ) : null}
    </SectionShell>
  );
};

export default Projects;

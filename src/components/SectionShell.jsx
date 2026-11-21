import React from 'react';
import Reveal from './Reveal';

const SectionShell = ({
  id,
  number,
  title,
  intro,
  children,
  border = true,
  className = '',
}) => {
  return (
    <section
      id={id}
      tabIndex={-1}
      className={`${border ? 'border-t border-line' : ''} ${className} focus:outline-none`.trim()}
    >
      <div className="container-page grid gap-10 py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <div className="self-start lg:sticky lg:top-24 lg:col-span-3">
          <Reveal>
            <p className="eyebrow text-accent">{number}</p>
            <div className="mt-4 h-px w-8 bg-line" aria-hidden="true" />
            <h2 className="mt-5 font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.02em]">
              {title}
            </h2>
            {intro ? (
              <p className="mt-4 max-w-xs text-sm leading-6 text-muted">{intro}</p>
            ) : null}
          </Reveal>
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
};

export default SectionShell;

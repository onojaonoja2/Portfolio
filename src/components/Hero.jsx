import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { EMAIL } from '../data/site';

const STACK = ['Node.js', 'React', 'Next.js', 'Python', 'SAP'];

const Hero = () => {
  return (
    <section id="about" tabIndex={-1} className="relative overflow-hidden focus:outline-none">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" aria-hidden="true" />

      <div className="container-page relative grid items-center gap-14 py-16 sm:py-20 lg:min-h-[calc(100svh-72px)] lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7">
          <p
            className="eyebrow animate-enter text-muted"
            style={{ '--enter-delay': '0ms' }}
          >
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-accent align-middle" aria-hidden="true" />
            Abuja, Nigeria <span className="mx-2 text-line">/</span> Available for work
          </p>

          <h1
            className="animate-enter mt-7 font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.9] tracking-[-0.035em]"
            style={{ '--enter-delay': '80ms' }}
          >
            Samuel
            <br className="hidden sm:block" /> Onoja
          </h1>

          <p
            className="animate-enter mt-6 font-display text-2xl italic leading-tight text-muted sm:text-3xl"
            style={{ '--enter-delay': '160ms' }}
          >
            Full-stack engineer &amp; certified SAP developer
          </p>

          <p
            className="animate-enter mt-7 max-w-xl text-[15px] leading-7 text-muted sm:text-base"
            style={{ '--enter-delay': '240ms' }}
          >
            I build modern web applications and the enterprise systems behind them — working across
            Node.js, React, Next.js, Python, and SAP ABAP/Fiori/HANA, with a focus on AI workflow
            automation and resilient cloud infrastructure.
          </p>

          <div
            className="animate-enter mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
            style={{ '--enter-delay': '320ms' }}
          >
            <a href="#projects" className="btn-primary">
              View selected work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-link">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div
            className="animate-enter mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-5"
            style={{ '--enter-delay': '400ms' }}
          >
            {STACK.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 ? (
                  <span className="text-line" aria-hidden="true">
                    /
                  </span>
                ) : null}
                <span className="eyebrow text-muted">{item}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div
          className="animate-enter lg:col-span-5 lg:justify-self-end"
          style={{ '--enter-delay': '200ms' }}
        >
          <div className="relative mx-auto w-full max-w-[360px]">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-full border border-accent/40"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-full border border-line bg-surface">
              <img
                src="/Professional_head_shot.png"
                alt="Samuel Onoja"
                className="aspect-square w-full object-cover object-center"
                width="768"
                height="768"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <p className="eyebrow mt-5 text-center text-muted">Samuel Onoja / Abuja, NG</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

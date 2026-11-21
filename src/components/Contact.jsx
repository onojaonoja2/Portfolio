import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Download } from 'lucide-react';
import SectionShell from './SectionShell';
import Reveal from './Reveal';
import { EMAIL, RESUME_URL, SOCIALS } from '../data/site';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    },
    []
  );

  const markCopied = () => {
    setCopied(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      markCopied();
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = EMAIL;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand('copy');
        markCopied();
      } catch {
        /* clipboard is unavailable */
      }

      document.body.removeChild(textarea);
    }
  };

  return (
    <SectionShell
      id="contact"
      number="04"
      title="Contact"
      intro="Remote or on-site, worldwide."
      border={false}
    >
      <Reveal>
        <p className="max-w-3xl text-balance font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
          Have a system worth building?
        </p>

        <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted">
          I'm available for full-stack, SAP, and AI automation work — remote or on-site.
        </p>

        <div className="mt-12 border-t border-line pt-8">
          <p className="eyebrow text-muted">Email</p>
          <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${EMAIL}`}
              className="break-all font-display text-[clamp(1.5rem,4.5vw,3rem)] leading-tight tracking-[-0.02em] underline decoration-line decoration-1 underline-offset-[8px] transition-colors duration-200 hover:text-accent hover:decoration-accent"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex shrink-0 items-center gap-2 rounded-[2px] border border-line px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
              aria-live="polite"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow eyebrow text-ink"
            >
              {social.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>

        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-10"
        >
          <Download className="h-4 w-4" />
          Download résumé
        </a>
      </Reveal>
    </SectionShell>
  );
};

export default Contact;

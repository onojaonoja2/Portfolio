import React, { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../data/site';

const getAbujaTime = () =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Lagos',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());

const Footer = () => {
  const [time, setTime] = useState(getAbujaTime);

  useEffect(() => {
    const interval = window.setInterval(() => setTime(getAbujaTime()), 30000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-[2px] bg-ink font-mono text-[10px] tracking-[0.08em] text-paper">
            SO
          </span>
          <div>
            <p className="font-display text-lg leading-none">Samuel Onoja</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
              Full-stack engineer
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="eyebrow text-muted transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 text-left lg:text-right">
          <p className="eyebrow text-muted">Abuja, NG — {time} WAT</p>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Samuel Onoja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

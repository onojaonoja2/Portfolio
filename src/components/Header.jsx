import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { EMAIL, NAV_ITEMS } from '../data/site';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const handleDesktop = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };

    desktopQuery.addEventListener('change', handleDesktop);
    return () => desktopQuery.removeEventListener('change', handleDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = menuRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.setTimeout(() => menuButtonRef.current?.focus(), 0);
  };

  const handleMobileNav = (id) => {
    setIsMenuOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.focus({ preventScroll: true });
    }, 0);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper">
        <div className="container-page flex h-[72px] items-center justify-between gap-6">
          <a href="#about" className="group flex items-center gap-3" aria-label="Samuel Onoja — back to top">
            <span className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-ink font-mono text-[11px] font-medium tracking-[0.08em] text-paper transition-colors duration-200 group-hover:bg-accent">
              SO
            </span>
            <span className="font-display text-xl leading-none sm:text-2xl">Samuel Onoja</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-7">
                {NAV_ITEMS.map((item) => {
                  const active = activeSection === item.id;

                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        aria-current={active ? 'location' : undefined}
                        className={`eyebrow inline-flex items-center gap-2 transition-colors duration-200 hover:text-accent ${
                          active ? 'text-accent' : 'text-muted'
                        }`}
                      >
                        <span
                          className={`h-1 w-1 rounded-full bg-accent transition-opacity duration-200 ${
                            active ? 'opacity-100' : 'opacity-0'
                          }`}
                          aria-hidden="true"
                        />
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <DarkModeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <DarkModeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="fixed inset-0 z-[60] flex flex-col bg-paper text-ink md:hidden"
        >
          <div className="container-page flex h-[72px] shrink-0 items-center justify-between border-b border-line">
            <span className="eyebrow text-muted">Menu</span>
            <div className="flex items-center gap-2">
              <DarkModeToggle />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMenu}
                className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
                aria-label="Close navigation menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <nav aria-label="Mobile" className="container-page flex min-h-0 flex-1 flex-col justify-center overflow-y-auto py-8">
            <ul>
              {NAV_ITEMS.map((item, index) => {
                const active = activeSection === item.id;

                return (
                  <li key={item.id} className="border-b border-line first:border-t">
                    <a
                      href={`#${item.id}`}
                      onClick={() => handleMobileNav(item.id)}
                      aria-current={active ? 'location' : undefined}
                      className={`flex items-baseline justify-between gap-4 py-5 transition-colors duration-200 hover:text-accent ${
                        active ? 'text-accent' : 'text-ink'
                      }`}
                    >
                      <span className="font-display text-4xl leading-none">{item.label}</span>
                      <span className="font-mono text-[11px] text-muted">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="container-page pb-10 pt-6">
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;

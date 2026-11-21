import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-[2px] border border-line bg-paper text-ink transition-all duration-300 hover:border-accent hover:text-accent ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};

export default ScrollToTop;

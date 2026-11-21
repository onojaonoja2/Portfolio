import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    Tag,
    {
      ref,
      className: `reveal ${visible ? 'is-visible' : ''} ${className}`.trim(),
      style: { '--reveal-delay': `${delay}ms` },
    },
    children
  );
};

export default Reveal;

// src/components/SectionDivider.jsx
import React from 'react';

const SectionDivider = () => {
  return (
    <div aria-hidden="true" className="max-w-7xl mx-auto px-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-400/40 dark:via-violet-500/40 to-transparent"></div>
    </div>
  );
};

export default SectionDivider;
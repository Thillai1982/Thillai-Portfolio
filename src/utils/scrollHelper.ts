import React from 'react';

/**
 * Robust smooth scrolling utility that safely handles fixed navbar offset
 * and works seamlessly in iframe and standalone browser environments.
 */
export const scrollToSection = (sectionId: string, e?: React.MouseEvent | React.TouchEvent) => {
  if (e) {
    e.preventDefault();
  }
  const cleanId = sectionId.replace(/^#/, '');
  if (!cleanId) return;

  const element = document.getElementById(cleanId);
  if (element) {
    const navbarOffset = 76; // Offset for fixed top navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const targetY = elementPosition + window.scrollY - navbarOffset;

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: 'smooth',
    });

    try {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#${cleanId}`);
      }
    } catch {
      // Ignore if iframe origin policy restricts URL modification
    }
  }
};

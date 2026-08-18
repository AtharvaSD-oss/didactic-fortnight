import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const MagneticButton = ({ 
  children = "Book Your Race", 
  onClick, 
  href = null,
  target = "_blank",
  rel = "noreferrer",
  className = "", 
  showArrow = true,
  strength = 0.25,
  variant = "primary" // "primary" (black w/ orange hover), "orange" (bright orange), "outline" (black outline)
}) => {
  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        rotate: x * 0.02,
        duration: 0.3,
        ease: 'power2.out'
      });

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: x * (strength * 0.4),
          y: y * (strength * 0.4),
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.5,
        ease: 'power2.out'
      });

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  const getVariantClasses = () => {
    if (variant === 'orange' || variant === 'secondary') {
      return 'btn-variant-orange shadow-sm';
    }
    if (variant === 'outline') {
      return 'btn-variant-outline';
    }
    // Default: primary (black w/ orange accent on hover)
    return 'shadow-sm';
  };

  const baseClasses = `
    btn-uiverse text-xs font-mono tracking-widest uppercase font-bold
    px-6 py-3 cursor-pointer text-decoration-none
    ${getVariantClasses()}
    ${className}
  `;

  const innerContent = (
    <span ref={contentRef} className="relative z-10 flex items-center">
      <span className="btn-label">{children}</span>
      {showArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 66 43"
          className="chevron-svg text-[#F47C20]"
          aria-hidden="true"
        >
          <polygon points="0 0, 26 0, 46 21.5, 26 43, 0 43, 20 21.5" />
          <polygon points="20 0, 46 0, 66 21.5, 46 43, 20 43, 40 21.5" />
          <polygon points="40 0, 66 0, 86 21.5, 66 43, 40 43, 60 21.5" />
        </svg>
      )}
    </span>
  );

  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={baseClasses}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={baseClasses}
    >
      {innerContent}
    </button>
  );
};

export default MagneticButton;

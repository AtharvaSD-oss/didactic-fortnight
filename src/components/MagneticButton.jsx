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
      return 'bg-[#F47C20] text-white border-[#F47C20] hover:bg-[#0A0A0A] hover:border-[#0A0A0A] hover:text-white shadow-sm';
    }
    if (variant === 'outline') {
      return 'bg-white text-[#0A0A0A] border-[#E5E5E5] hover:border-[#0A0A0A] hover:bg-[#F9F9F9]';
    }
    // Default: primary (black w/ orange accent on hover)
    return 'bg-[#0A0A0A] text-white border-[#0A0A0A] hover:bg-[#F47C20] hover:border-[#F47C20] hover:text-white shadow-sm';
  };

  const baseClasses = `
    racing-button-anim relative inline-flex items-center justify-center group overflow-hidden rounded-[4px] font-mono font-bold tracking-widest text-xs uppercase
    px-6 py-3 transition-all duration-300 cursor-pointer text-decoration-none border
    ${getVariantClasses()}
    ${className}
  `;

  const innerContent = (
    <span ref={contentRef} className="relative z-10 flex items-center gap-2">
      <span className="btn-text">{children}</span>
      {showArrow && (
        <svg 
          viewBox="0 0 65 40" 
          className="chevron-arrow text-[#F47C20] group-hover:text-white"
          aria-hidden="true"
        >
          <polygon points="0,0 13,0 26,20 13,40 0,40 13,20" />
          <polygon points="16,0 29,0 42,20 29,40 16,40 29,20" />
          <polygon points="32,0 45,0 58,20 45,40 32,40 45,20" />
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

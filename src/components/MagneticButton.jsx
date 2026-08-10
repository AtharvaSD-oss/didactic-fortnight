import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const MagneticButton = ({ 
  children = "Book Your Race", 
  onClick, 
  href = null,
  target = "_blank",
  rel = "noreferrer",
  className = "", 
  showArrow = true,
  strength = 0.35 
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
        rotate: x * 0.04,
        duration: 0.3,
        ease: 'power2.out'
      });

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: x * (strength * 0.5),
          y: y * (strength * 0.5),
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
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)'
      });

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)'
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

  const baseClasses = `
    relative inline-flex items-center justify-center group overflow-hidden rounded-full font-display font-bold tracking-wide text-xs sm:text-sm uppercase
    px-7 py-3.5 transition-all duration-300 transform active:scale-95 cursor-pointer text-decoration-none
    bg-gradient-to-r from-[#EE3124] via-[#EA281B] to-[#D32F2F]
    text-white border border-white/20
    shadow-[0_8px_25px_rgba(238,49,36,0.35)]
    hover:shadow-[0_12px_35px_rgba(238,49,36,0.5)]
    hover:scale-[1.03]
    light-sweep-effect ${className}
  `;

  const innerContent = (
    <>
      {/* Outer ambient glow */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EE3124] to-[#F59E0B] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10" />

      {/* Button content with icon */}
      <span ref={contentRef} className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110 text-white" />
        )}
      </span>
    </>
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

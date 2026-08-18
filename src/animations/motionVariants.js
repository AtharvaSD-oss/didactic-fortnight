// Unified Kartomania Motorsport Motion System
// FAST: 200–300ms (Buttons & Hover)
// MEDIUM: 500–800ms (Text & Image Reveals)
// SLOW: 1000–1500ms (Hero & Cinematic Entrances)

export const EASE_MOTORSPORT = [0.16, 1, 0.3, 1]; // Quintic Ease-Out

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.08,
      ease: EASE_MOTORSPORT,
    },
  }),
};

export const fadeBlur = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: EASE_MOTORSPORT,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: EASE_MOTORSPORT,
    },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: EASE_MOTORSPORT,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const drawerSlide = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      duration: 0.35,
      ease: EASE_MOTORSPORT,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

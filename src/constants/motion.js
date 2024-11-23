const fadeIn = (delay, duration) => {
  return {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};

const slideInFromTop = (yStart, delay, duration) => {
  return {
    hidden: { y: yStart, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};

const slideInFromBottom = (yStart, delay, duration) => {
  return {
    hidden: { y: yStart, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};

const slideInFromLeft = (delay, duration) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};

const slideInFromRight = (delay, duration) => {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};

const rotateY = (delay, duration) => {
  return {
    hidden: { x: 100, opacity: 0, rotateZ: 180 },
    visible: {
      x: 0,
      opacity: 1,
      rotateZ: 0,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};

export {
  fadeIn,
  slideInFromTop,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  rotateY,
};

import { motion } from 'motion/react';

// 3 dot loader for when ai is generating response
// dots stagger and opacity change while loading

const TypingLoader = () => {
  const dotsArr = [1, 2, 3];

  return (
    <div className="flex items-center justify-start gap-1">
      {dotsArr.map((dot) => (
        <motion.span
          key={dot}
          className="h-2 w-2 bg-neutral-400 rounded-full"
          animate={{
            y: [0, -3, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: dot * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default TypingLoader;

import { motion } from "framer-motion";
import { skills } from "../constants";
import { useTheme } from "../contexts/ThemeContext";

const getImage = (fileName) =>
  new URL(`/src/assets/skills/${fileName}`, import.meta.url).href;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Skill = () => {
  const { darkMode } = useTheme();

  return (
    <section className="py-16 md:py-24">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Kỹ năng & <span className="text-primary">Công nghệ</span>
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="skill-card cursor-pointer w-20 sm:w-24 md:w-28"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
              {skill.image ? (
                <img
                  src={getImage(
                    darkMode && skill.darkImage
                      ? skill.darkImage
                      : skill.image,
                  )}
                  alt={skill.name}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex w-full h-full items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold text-primary"
                >
                  {skill.name
                    .split(/\s+/)
                    .map((word) => word[0])
                    .join("")}
                </span>
              )}
            </div>
            <span className="text-sm font-medium text-center text-secondary">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

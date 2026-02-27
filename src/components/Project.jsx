import { motion } from "framer-motion";
import { ProjectData } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faPlay,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const getImage = (fileName) =>
  new URL(`/src/assets/project/${fileName}`, import.meta.url).href;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Project = () => {
  return (
    <section className="py-16 md:py-24">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Dự án <span className="text-primary">nổi bật</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {ProjectData.map((project, index) => (
          <motion.article
            key={index}
            variants={itemVariants}
            className="group relative bg-white dark:bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-[#667eea]/50"
          >
            {/* Image Container with Overlay */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={getImage(project.image)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={project.title}
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Hover Actions */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-[#667eea] hover:text-white transition-all duration-300 shadow-xl"
                >
                  <FontAwesomeIcon icon={faPlay} className="text-xs" />
                  <span>Xem Demo</span>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 border border-white/30"
                  aria-label={`Visit ${project.title}`}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 md:p-6">
              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-[#667eea] transition-colors duration-300 line-clamp-2">
                {project.title}
              </h3>

              {/* Role Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.role.map((role, roleIndex) => (
                  <span
                    key={roleIndex}
                    className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#667eea]/15 to-[#764ba2]/15 text-[#667eea] dark:text-[#a78bfa] border border-[#667eea]/20"
                  >
                    {role}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                {project.descript}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-5">
                {project.technology.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technology.length > 4 && (
                  <span className="text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    +{project.technology.length - 4}
                  </span>
                )}
              </div>

              {/* Link Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#667eea] hover:text-[#764ba2] transition-colors duration-300 group/link"
              >
                <span>Xem chi tiết</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </a>
            </div>

            {/* Bottom Gradient Border Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

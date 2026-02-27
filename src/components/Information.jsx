import { motion } from "framer-motion";
import avatar from "/src/assets/image/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import cvFile from "/src/assets/file/CV_HoDuMaiTran.pdf";

const SOCIAL_LINKS = [
  { icon: faGithub, href: "https://github.com/hodumaitran", label: "GitHub" },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/mai-tr%C3%A2n-h%E1%BB%93-d%C6%B0-802111313/",
    label: "LinkedIn",
  },
  {
    icon: faFacebook,
    href: "https://www.facebook.com/ho.du.mai.tran.2024",
    label: "Facebook",
  },
];

export const Information = () => {
  return (
    <section className="py-12 ">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="inline-block w-12 h-[2px] bg-gradient-to-r from-[#667eea] to-[#764ba2]" />
            <span className="text-sm font-medium tracking-wider uppercase text-secondary">
              Xin chào, tôi là
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hồ Dư Mai Trân
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-3 md:mt-4 text-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-secondary max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Frontend Developer với hơn 2 năm kinh nghiệm, chuyên về React, React
            Native, Next.js và WordPress. Đam mê công nghệ, luôn tìm kiếm giải
            pháp sáng tạo và không ngừng học hỏi để tiến tới mục tiêu trở thành
            Fullstack Developer.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 md:gap-4 mt-3 md:mt-4 text-secondary text-sm md:text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#667eea]" />
            <span>Việt Nam</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 md:gap-4 mt-2 text-secondary text-sm md:text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-[#667eea]" />
            <a
              href="mailto:hodumaitran.work@gmail.com"
              className="hover:text-[#667eea] transition-colors"
            >
              hodumaitran.work@gmail.com
            </a>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex flex-wrap items-center gap-3 md:gap-4 mt-6 md:mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href={cvFile}
              download="CV_HoDuMaiTran.pdf"
              className="btn-primary"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>Download CV</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Avatar - Hidden on small screens */}
        <motion.div
          className="order-1 lg:order-2 hidden sm:flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="avatar-glow rounded-3xl">
              <img
                src={avatar}
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-3xl"
                alt="Hồ Dư Mai Trân - Frontend Developer"
              />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#764ba2]/20 to-[#667eea]/20 rounded-full blur-xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

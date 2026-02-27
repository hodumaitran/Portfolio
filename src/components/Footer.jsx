import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">Portfolio</h3>
            <p className="text-sm text-secondary">
              &copy; {CURRENT_YEAR} Hồ Dư Mai Trân. All Rights Reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={social.icon} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-xs sm:text-sm">
          <p className="text-secondary">Made with</p>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          </motion.span>
          <p className="text-secondary">using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

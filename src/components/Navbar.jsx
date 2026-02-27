import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Toggle } from "./Toggle";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "about", label: "Giới thiệu" },
  { id: "skill", label: "Kỹ năng" },
  { id: "project", label: "Dự án" },
  { id: "timeline", label: "Hành trình" },
  { id: "contact", label: "Liên hệ" },
];

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    offset={-80}
    className="nav-link"
    onClick={onClick}
  >
    {children}
  </Link>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-[100] navbar-glass">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.h1
              className="text-2xl font-bold text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <NavLink to={item.id}>{item.label}</NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Toggle />
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors !bg-transparent !shadow-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faBars : faBars}
                className="text-xl"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Outside header to avoid stacking context issues */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 md:hidden"
              style={{ zIndex: 9998 }}
              onClick={closeMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-72 md:hidden shadow-2xl"
              style={{
                zIndex: 9999,
                backgroundColor: "var(--bg-primary, #ffffff)",
              }}
            >
              <div className="p-6 h-full bg-white dark:bg-[#0f0f1a]">
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Close menu"
                  >
                    <FontAwesomeIcon icon={faXmark} className="text-xl" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <NavLink to={item.id} onClick={closeMenu}>
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="mt-4"
                  >
                    <Toggle />
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

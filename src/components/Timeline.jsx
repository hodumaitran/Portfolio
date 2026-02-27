import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { timelineData } from "../constants";

export const Timeline = () => {
  return (
    <section className="py-16 md:py-24">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Hành trình <span className="text-primary">của tôi</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="timeline-line hidden lg:block" />

        {/* Timeline Items */}
        <div className="space-y-8 lg:space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon - Desktop Only */}
              <div className="timeline-icon !hidden lg:!flex">
                <FontAwesomeIcon icon={item.icon} />
              </div>

              {/* Card */}
              <div
                className={`w-full lg:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                }`}
              >
                <div className="timeline-card">
                  {/* Mobile Icon + Content wrapper */}
                  <div className="flex gap-4 lg:block">
                    {/* Mobile Icon */}
                    <div className="lg:hidden flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>

                    <div className="flex-1">
                      {/* Time Badge */}
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 text-[#667eea] mb-3">
                        {item.time}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg font-semibold mb-2 leading-tight">
                        {item.title}
                      </h3>

                      {/* Content */}
                      <p className="text-sm text-secondary leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block lg:w-[calc(50%-40px)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

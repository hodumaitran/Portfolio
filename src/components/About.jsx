import { motion } from "framer-motion";
import image from "/src/assets/image/avatar1.jpg";

const HIGHLIGHTS = [
  { number: "2+", label: "Năm kinh nghiệm" },
  { number: "15+", label: "Dự án hoàn thành" },
  { number: "3.82", label: "GPA tốt nghiệp" },
];

export const About = () => {
  return (
    <section className="py-16 md:py-24">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Đôi nét về <span className="text-primary">bản thân</span>
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto px-2">
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="avatar-glow rounded-2xl">
              <img
                src={image}
                className="w-full max-w-md rounded-2xl object-cover"
                alt="About me"
              />
            </div>

            {/* Stats Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass-card p-4 hidden sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex gap-6">
                {HIGHLIGHTS.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {item.number}
                    </div>
                    <div className="text-xs text-secondary mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-secondary mb-4 md:mb-6">
              Tôi là{" "}
              <span className="font-semibold text-primary">
                Frontend Developer
              </span>{" "}
              có kinh nghiệm tham gia và triển khai các dự án thực tế với React,
              Next.js, React Native và WordPress. Tôi tập trung xây dựng giao
              diện responsive, tối ưu hiệu suất và mang lại trải nghiệm tốt cho
              người dùng.
            </p>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-secondary mb-4 md:mb-6">
              Bên cạnh Frontend, tôi cũng phát triển kỹ năng{" "}
              <span className="font-semibold text-primary">
                Backend với Node.js, NestJS, PostgreSQL, Prisma, Redis và
                RESTful API
              </span>
              , giúp tôi có khả năng tham gia toàn diện hơn vào quá trình phát
              triển sản phẩm.
            </p>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-secondary">
              Ngoài lập trình, tôi có kinh nghiệm về{" "}
              <span className="font-semibold text-primary">
                WordPress, UI/UX và SEO
              </span>
              . Tôi luôn chủ động học hỏi công nghệ mới, cải thiện chất lượng
              sản phẩm và phối hợp hiệu quả cùng đội ngũ trong quá trình phát
              triển dự án.
            </p>
          </div>

          {/* Mobile Stats */}
          <div className="flex justify-center gap-3 sm:gap-6 mt-6 sm:hidden">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-3 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-xl sm:text-2xl font-bold text-primary">
                  {item.number}
                </div>
                <div className="text-xs text-secondary mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import image from "/src/assets/image/avatar1.jpg";

const HIGHLIGHTS = [
  { number: "2+", label: "Năm kinh nghiệm" },
  { number: "10+", label: "Dự án hoàn thành" },
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
              Trong quá trình học tập và làm việc, tôi đã tích lũy kinh nghiệm
              với các công nghệ như{" "}
              <span className="font-semibold text-primary">
                React, React Native, Next.js, WordPress, Node.js, MySQL và
                MongoDB
              </span>
              . Tôi đã tham gia và triển khai nhiều dự án thực tế, từ phát triển
              website, ứng dụng di động đến tối ưu hiệu suất và trải nghiệm
              người dùng.
            </p>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-secondary mb-4 md:mb-6">
              Bên cạnh lập trình, tôi còn có kiến thức về{" "}
              <span className="font-semibold text-primary">SEO</span> và kỹ năng
              tối ưu website, giúp cải thiện khả năng hiển thị và hiệu quả trên
              các công cụ tìm kiếm.
            </p>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-secondary">
              Tinh thần luôn hướng tới việc tạo ra những sản phẩm chất lượng cao
              đã thúc đẩy tôi không ngừng học hỏi công nghệ mới, sẵn sàng đón
              nhận thử thách và hợp tác hiệu quả cùng đội ngũ để đạt được kết
              quả tốt nhất.
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

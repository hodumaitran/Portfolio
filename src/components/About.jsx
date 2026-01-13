import React from "react";
import image from "/src/assets/image/avatar1.jpg";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="md:py-14 py-10 w-full flex justify-center">
      <div className="max-w-5xl w-full px-4">
        <motion.h3
          className="text-center text-3xl md:text-4xl font-medium md:mb-20 mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        >
          Đôi nét về <span className="text-primary">bản thân</span>
        </motion.h3>

        <div className="flex flex-col-reverse md:flex-row items-start gap-10 md:gap-16 w-full">
          {/* Ảnh */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0 }}
          >
            <img
              src={image}
              className="w-full md:max-w-md lg:max-w-lg rounded-2xl"
              alt="Avatar"
            />
          </motion.div>
          {/* Nội dung */}
          <motion.div
            className="flex-1 flex justify-center md:justify-start px-4 md:px-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0 }}
          >
            <p className="text-lg font-normal leading-relaxed md:leading-loose text-center md:text-left">
              Trong quá trình học tập và làm việc, tôi đã tích lũy kinh nghiệm
              với các công nghệ như React, React Native, Next.js, WordPress,
              Node.js, MySQL và MongoDB. Tôi đã tham gia và triển khai nhiều dự
              án thực tế, từ phát triển website, ứng dụng di động đến tối ưu
              hiệu suất và trải nghiệm người dùng. Bên cạnh lập trình, tôi còn
              có kiến thức về SEO và kỹ năng tối ưu website, giúp cải thiện khả
              năng hiển thị và hiệu quả trên các công cụ tìm kiếm. <br />
              <br />
              inh thần luôn hướng tới việc tạo ra những sản phẩm chất lượng cao
              đã thúc đẩy tôi không ngừng học hỏi công nghệ mới, sẵn sàng đón
              nhận thử thách và hợp tác hiệu quả cùng đội ngũ để đạt được kết
              quả tốt nhất.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

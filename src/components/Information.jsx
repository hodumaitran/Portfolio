import React from "react";
import { motion } from "framer-motion";
import avatar from "/src/assets/image/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cvFile from "/src/assets/file/CV_HoDuMaiTran.pdf";

export const Information = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 px-4 md:py-20 py-10 ">
      {/* Thông tin */}
      <div>
        <motion.h1
          className="text-[80px] md:text-start text-center font-semibold text-primary"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0 }}
        >
          Hồ Dư Mai Trân
        </motion.h1>

        <motion.h3
          className="text-4xl md:text-start text-center font-semibold text-primary mt-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Frontend Developer
        </motion.h3>

        <motion.p
          className="mt-2 md:text-start text-center text-color mt-10 text-lg font-normal"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Frontend Developer với hơn 2 năm kinh nghiệm, chuyên về React, React
          Native, Next.js và WordPress. Ngoài ra còn có Node.js, MySQL, MongoDB
          cùng kỹ năng triển khai UI/UX tối ưu trải nghiệm người dùng. Đam mê
          công nghệ, luôn tìm kiếm giải pháp sáng tạo và không ngừng học hỏi để
          tiến tới mục tiêu trở thành Fullstack Developer.{" "}
        </motion.p>

        <div className="w-full flex md:justify-start justify-center items-center">
          <motion.button
            className="button mt-12 !rounded-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <a
              className="flex justify-center items-center gap-3"
              href={cvFile}
              download="CV_HoDuMaiTran.pdf"
            >
              <p>Download CV</p>
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </motion.button>
        </div>
      </div>

      {/* Ảnh */}
      <motion.div
        className="md:w-full hidden px-5 md:flex justify-end items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0 }}
      >
        <img
          src={avatar}
          className="md:w-full object-cover rounded-3xl"
          alt="Avatar"
        />
      </motion.div>
    </div>
  );
};

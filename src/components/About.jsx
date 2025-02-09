import React from 'react';
import image from '/src/assets/image/avatar.jpg';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <div className='md:py-28 py-10 w-full flex justify-center'>
            <div className="max-w-5xl w-full px-4">
                <motion.h3
                    className='text-center text-3xl md:text-4xl font-medium md:mb-20 mb-10'
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                >
                    Đôi nét về <span className='text-primary'>bản thân</span>
                </motion.h3>

                <div className='flex flex-col-reverse md:flex-row items-start gap-10 md:gap-16 w-full'>
                    {/* Ảnh */}
                    <motion.div
                        className="flex-1 flex justify-center items-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0 }}
                    >
                        <img src={image} className='w-full md:max-w-md lg:max-w-lg rounded-2xl' alt="Avatar" />
                    </motion.div>
                    {/* Nội dung */}
                    <motion.div
                        className="flex-1 flex justify-center md:justify-start px-4 md:px-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0 }}
                    >
                        <p className='text-lg font-normal leading-relaxed md:leading-loose text-center md:text-left'>
                            Tôi là một lập trình viên frontend đầy đam mê và nhiệt huyết, luôn cam kết xây dựng những website có hiệu năng cao và giao diện thân thiện với người dùng. Vừa mới tốt nghiệp, tôi đã tích lũy được hơn 2 năm kinh nghiệm học tập và làm việc với các công nghệ như React, Next.js, Node.js, MySQL, và MongoDB.
                            <br /><br />
                            Hành trình của tôi trong lĩnh vực phát triển web bắt đầu từ niềm đam mê tạo ra những trải nghiệm người dùng mượt mà, điều này đã thúc đẩy tôi không ngừng cải thiện kỹ năng và khám phá các xu hướng mới. Tôi yêu thích việc học hỏi công nghệ mới, giải quyết các thách thức, và hợp tác với đồng đội để mang lại kết quả vượt mong đợi. Ngoài lập trình, tôi luôn tìm cách mở rộng kiến thức, thử nghiệm những ý tưởng mới, và chuẩn bị cho mục tiêu trở thành lập trình viên fullstack trong tương lai.
                        </p>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

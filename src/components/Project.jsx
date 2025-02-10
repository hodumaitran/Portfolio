import React from 'react';
import { motion } from 'framer-motion';
import { ProjectData } from '../constants';

const getImage = (fileName) => new URL(`/src/assets/project/${fileName}`, import.meta.url).href;
export const Project = () => {
    return (
        <div className='md:py-20 py-10 flex justify-center items-center'>
            <div className="w-full">
                <motion.h3
                    className='text-center text-4xl font-medium md:mb-20 mb-10'
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Dự án
                </motion.h3>

                <div className="w-full flex justify-center items-center">
                    <div className="md:w-[70%] w-full">
                        {ProjectData.map((project, index) => (
                            <div
                                key={index}
                                className='grid items-start md:grid-cols-3 grid-cols-1 gap-8 mb-10'
                            >
                                {/* Hình ảnh */}
                                <motion.div
                                    className="w-full flex justify-center items-center"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, ease: 'easeOut', delay: index * 0.2 }}
                                >
                                    <img
                                        src={getImage(project.image)}
                                        className='w-full rounded-md object-cover'
                                        alt={project.title}
                                    />
                                </motion.div>

                                {/* Nội dung dự án */}
                                <motion.div
                                    className="w-full flex md:justify-start justify-center items-center text-center md:text-left md:col-span-2 col-span-1"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, ease: 'easeOut', delay: index * 0.2 }}
                                >
                                    <div>
                                        <p className='text-lg font-semibold mb-1'>{project.title}</p>
                                        <p className='font-medium mb-1'>{project.role.join(', ')}</p>
                                        <p className='text-blue-500 mb-2 md:block hidden'>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                {project.link}
                                            </a>
                                        </p>

                                        <p className='mb-3 text-gray-500'>{project.descript}</p>

                                        {/* Công nghệ */}
                                        <div className="w-full flex flex-wrap justify-center md:justify-start items-center gap-2">
                                            {project.technology.map((tech, techIndex) => (
                                                <div key={techIndex} className="py-1 px-2 text-black text-sm bg-purple-100 rounded-sm">
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};  

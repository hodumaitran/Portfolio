import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants';

const getImage = (fileName) => new URL(`/src/assets/skills/${fileName}`, import.meta.url).href;

export const Skill = () => {
    return (
        <div className="md:py-28 py-10">
            <motion.h3
                className="text-center text-4xl font-medium mb-20"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Chút ít skill của tôi
            </motion.h3>

            <div className="w-full flex justify-center items-center">
                <motion.div
                    className="w-4/5 flex flex-wrap justify-center gap-10"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: Math.random() * 4 + 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="size-16">
                                <img
                                    src={getImage(skill.image)}
                                    alt={skill.name}
                                    loading="lazy"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { timelineData } from '../constants';

export const Timeline = () => {
    return (
        <div className='py-28'>
            <motion.h3
                className='text-center text-4xl font-medium mb-20'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            >
                Hành trình
            </motion.h3>

            <div className="timeline">
                <div className="timeline-height">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex ${index % 2 === 0 ? 'xl:justify-start justify-end' : 'justify-end'} xl:items-center items-start mb-10 px-2`}
                        >
                            <motion.div
                                className="xl:w-[40%] w-[80%] text-black bg-white shadow-md border border-gray-200 p-4 rounded-lg"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}                            >
                                <h3 className='font-semibold mb-2'>{item.title}</h3>
                                <p>{item.content}.</p>
                                <p className='mt-2 text-gray-500 font-medium'>{item.time}</p>
                            </motion.div>
                            <div className="timeline-icon rounded-full shadow-md">
                                <p className='md:size-16 size-14 border border-2 border-gray-100 rounded-full text-black bg-white flex justify-center items-center'>
                                    <FontAwesomeIcon icon={item.icon} />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

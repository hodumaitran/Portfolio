import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
export const Contact = () => {
    return (
        <div className='py-14 flex justify-center items-center'>
            <div className="w-full">
                <motion.h3
                    className='text-center text-4xl font-medium mb-10'
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Liên hệ
                </motion.h3>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <p className='text-center underline font-medium mb-3'>tranhoho2004@gmail.com</p>
                    <div className="flex justify-center items-center gap-2">
                        <p className='font-medium'>Cảm ơn bạn đã xem đến đây nhe </p>
                        <motion.div
                            animate={{ y: ['0%', '-20%', '0%'] }} 
                            transition={{
                                repeat: Infinity, 
                                duration: 1,
                                ease: 'easeInOut' 
                            }}
                        >
                            <FontAwesomeIcon icon={faHeart} className='text-red-500' />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

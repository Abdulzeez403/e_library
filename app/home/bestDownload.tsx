"use client"
import React from 'react'
import Image from "next/image"
import BestDownloadImage from "../../public/bestDownlaodImage.png"
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion';

export const BestDownload = () => {
    return (
        <div className='bg-buttonColor py-10'>

            <div className='w-full md:w-[60%] lg:w-[60%] mx-auto'>
                <div className='flex justify-center'>
                    <div className='block md:flex lg:flex justify-between items-center'>

                        <div className="flex justify-center items-center">
                            <motion.div
                                style={{
                                    display: 'inline-block',
                                    perspective: 1000, // Gives a 3D perspective
                                }}
                                animate={{ rotateY: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 10,
                                    ease: 'linear'
                                }}
                            >
                                <Image src={BestDownloadImage} alt="image" width={200} height={200} />
                            </motion.div>
                        </div>

                        <div className='w-full px-10 md:w-[50%] lg:w-[50%] text-center'>
                            <h4 className='font-bold text-[1.5rem] text-white'>Top Pick of the Week!</h4>
                            <p className="text-white py-2">Experience the finest content this week, carefully curated for you. Dive into our top selection and explore the best resources and insights we have to offer.</p>
                            <Button className='bg-white text-buttonColor my-4'>Download</Button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

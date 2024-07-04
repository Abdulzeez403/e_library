"use client"
import React from 'react'
import Image from "next/image"
import BestDownloadImage from "../../public/book11.jpeg"
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion';

export const BestDownload = () => {
    return (
        <div className='bg-slate-200 py-10'>

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
                            <h4 className='font-bold text-[1.5rem]'>Best Download of the Week!</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A beatae laborum nostrum placeat, animi culpa impedit assumenda explicabo fugiat excepturi.</p>
                            <Button className='bg-orange-500 my-4'>Download</Button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

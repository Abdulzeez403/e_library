"use client"
import React, { useEffect, useState } from 'react'
import { DemoData } from '@/constant/data'
import Image from "next/image"
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { motion } from 'framer-motion'
import { useDocumentContext } from '../(admin)/admin/dashboard/upload/context'
import { useCategoryContext } from '../(admin)/admin/dashboard/upload/categorycontext'




export const AllBooks = () => {
    const [activeMenu, setActiveMenu] = useState('Educational Technology');

    const { getDocumentsByCategory, categoryDocument } = useDocumentContext()

    const { getAllCategories, categories } = useCategoryContext()

    useEffect(() => {
        getAllCategories();
        getDocumentsByCategory(activeMenu)


    }, [activeMenu])

    const handleMenuClick = (menu: any) => {
        setActiveMenu(menu.name);
        console.log(activeMenu, "the active cateo")
    };

    return (
        <div className='my-10'>
            <div className='flex justify-center'>
                <div className="w-full max-w-xl px-4">
                    <h4 className='font-bold text-2xl text-center'>All <span className="text-orange-400">Books</span></h4>
                    <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis debitis eaque quaerat quam nostrum molestiae accusantium.</p>
                </div>
            </div>

            <div className='flex justify-center m-0'>
                <div className='w-[90%] mx-auto py-10'>
                    <div className='my-4 justify-center flex'>
                        <Menubar className='border-none'>
                            <MenubarMenu>
                                {categories.map((menu: any, index: number) => (
                                    <MenubarTrigger
                                        key={menu?._id}
                                        onClick={() => handleMenuClick(menu)}
                                        className={`px-4 py-2 text-sm ${menu?.name === activeMenu ? 'bg-orange-500 text-white' : 'text-gray-700'}`}
                                    >
                                        {menu?.name}
                                    </MenubarTrigger>
                                ))}
                            </MenubarMenu>
                        </Menubar>
                    </div>

                    {/* Mobile View: Display 4 books */}
                    <div className='flex md:hidden lg:hidden justify-center'>
                        <div className='grid grid-cols-2 gap-6'>
                            {categoryDocument.slice(0, 4).map((book, index) => (
                                <div key={index} className="w-full max-w-xs mx-auto">
                                    <div className='w-full'>
                                        <motion.div
                                            className="flex flex-wrap w-60 p-4 border border-gray-200 rounded-md shadow-md h-80 bg-gradient-to-r from-blue-500 to-green-500"
                                            whileHover={{
                                                scale: 1.05,
                                            }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1 }}
                                            style={{ perspective: 1000 }}
                                        >
                                            <div className="w-full text-center mt-24">
                                                <h5 className="font-bold text-lg text-white">{book.title}</h5>

                                                <h5 className="font-bold text-lg text-white pt-8">{book.code}</h5>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop View: Display 8 books */}
                    <div className='hidden md:flex lg:flex justify-center'>
                        <div className='grid grid-cols-4 gap-4'>
                            {categoryDocument?.slice(0, 8).map((book: any, index: number) => (
                                <div key={index} className="w-full max-w-xs mx-auto">
                                    <div className='w-full'>
                                        <motion.div
                                            className="flex flex-wrap w-60 p-4 border border-gray-200 rounded-md shadow-md h-80 bg-gradient-to-r from-blue-500 to-green-500"
                                            whileHover={{
                                                scale: 1.05,
                                            }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1 }}
                                            style={{ perspective: 1000 }}
                                        >
                                            <div className="w-full text-center mt-24">
                                                <h5 className="font-bold text-lg text-white">{book.title}</h5>

                                                <h5 className="font-bold text-lg text-white pt-8">{book.code}</h5>
                                            </div>
                                        </motion.div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

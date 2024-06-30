"use client"
import React, { useState } from 'react'
import { DemoData } from '@/constant/data'
import Image from "next/image"
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'

export const AllBooks: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState('All');

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
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
                                {['All', 'Education', 'Art', 'Science', 'Engineering'].map((menu, index) => (
                                    <MenubarTrigger
                                        key={index}
                                        onClick={() => handleMenuClick(menu)}
                                        className={`px-4 py-2 ${menu === activeMenu ? 'bg-orange-500 text-white' : 'text-gray-700'}`}
                                    >
                                        {menu}
                                    </MenubarTrigger>
                                ))}
                            </MenubarMenu>
                        </Menubar>
                    </div>

                    {/* Mobile View: Display 4 books */}
                    <div className='flex md:hidden lg:hidden justify-center'>
                        <div className='grid grid-cols-2 gap-6'>
                            {DemoData.slice(0, 4).map((book, index) => (
                                <div key={index} className="w-full max-w-xs mx-auto">
                                    <div className='w-full'>
                                        <Image src={book.img} alt={book.name} width={200} height={200} className='rounded-md w-full' />
                                    </div>
                                    <div className='text-center mt-2'>
                                        <h4 className='font-medium'>{book.name}</h4>
                                        <h4 className='text-gray-500'>{book.author}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop View: Display 8 books */}
                    <div className='hidden md:flex lg:flex justify-center'>
                        <div className='grid grid-cols-4 gap-4'>
                            {DemoData.slice(0, 8).map((book, index) => (
                                <div key={index} className="w-full max-w-xs mx-auto">
                                    <div className='w-full'>
                                        <Image src={book.img} alt={book.name} width={200} height={200} className='rounded-md w-full' />
                                    </div>
                                    <div className='text-center mt-2'>
                                        <h4 className='font-medium'>{book.name}</h4>
                                        <h4 className='text-gray-500'>{book.author}</h4>
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

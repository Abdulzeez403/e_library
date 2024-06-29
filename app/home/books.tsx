"use client"
import React, { useState } from 'react'
import { DemoData } from '@/constant/data'
import Image from "next/image"
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'

export const AllBooks = () => {
    const [activeMenu, setActiveMenu] = useState('All');

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };
    return (
        <div className='my-10'>
            <div className='flex justify-center'>
                <div className="w-[30rem]">
                    <h4 className='font-bold text-[2rem] text-center'>All  <span className="text-orange-400">Books</span></h4>
                    <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis debitis eaque quaerat quam nostrum molestiae accusantium .</p>
                </div>

            </div>



            <div className='w-[80%] mx-auto py-10'>
                <div className='my-4 justify-center flex'>
                    <Menubar className='border-none'>
                        <MenubarMenu>
                            {['All', 'Education', 'Art', 'Science', 'Engineering'].map((menu, index) => (
                                <MenubarTrigger
                                    key={index}
                                    onClick={() => handleMenuClick(menu)}
                                    className={menu === activeMenu ? 'bg-orange-500 text-white' : ''}
                                >
                                    {menu}
                                </MenubarTrigger>
                            ))}
                        </MenubarMenu>
                    </Menubar>
                </div>

                <div className='flex justify-center'>
                    <div className='grid grid-cols-4'>
                        {DemoData.map((book, index) => (
                            <div key={index} className="w-60">
                                <div className='w-60'>
                                    <Image src={book?.img} alt={book.name} width={200} height={200} className='rounded-md' />
                                </div>
                                <div>
                                    <h4>{book.name}</h4>
                                    <h4>{book.author}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}


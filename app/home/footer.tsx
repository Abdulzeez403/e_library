import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import React from 'react'

export const Footer = () => {
    return (
        <div className="flex justify-center bg-black py-4">

            <div className="w-[70%] text-center">
                <h4 className="py-4 text-white text-bold">LuminaLibris (EDT)
                </h4>
                <p className="text-white w-[100%]">Discover a world of knowledge and inspiration. Dive into our vast collection of books spanning education, art, science, engineering, and more. Whether</p>
                <div className="flex justify-center">
                    <Menubar className='border-none bg-black'>
                        <MenubarMenu>
                            <MenubarTrigger className="text-white">Home</MenubarTrigger>
                            <MenubarTrigger className="text-white">Blog</MenubarTrigger>
                            <MenubarTrigger className="text-white">About</MenubarTrigger>
                            <MenubarTrigger className="text-white">Faq</MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                </div>
                <div className=' py-10'>
                    <h4 className="text-white">Copyright &copy; {new Date().getFullYear()} by LuminaLibris (EDT)
                    </h4>
                </div>
            </div>


        </div>

    )
}

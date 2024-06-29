"use client"
import MlButton from './components/button';
import { MdLogin } from "react-icons/md";
import { useState } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';

const HomeLayout = () => {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(false)
    }

    return (
        <div className="bg-slate-300">
            <div className="flex justify-between px-10 py-4">
                <h3 className=' font-bold text-[1.3rem] text-orange-400 '>E-Resourcer</h3>

                <div>
                    <Menubar className='border-none bg-0'>
                        <MenubarMenu>
                            <MenubarTrigger className="text-orange-400">Home</MenubarTrigger>
                            <MenubarTrigger className="text-white">
                                <Link href="/booklisting">Books</Link></MenubarTrigger>
                            <MenubarTrigger className="text-white">About</MenubarTrigger>
                            <MenubarTrigger className="text-white">Faq</MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                </div>
                <div className="pl-4 flex space-x-4">

                    <div onClick={() => setOpen(false)}>
                        <MlButton icon={<MdLogin />} className="border-2 border-[#C9CED6] ">
                            <h4>Login</h4>
                        </MlButton>
                    </div>

                    <MlButton className='bg-white text-orange-400 border-none hidden md:flex lg:flex'>Register Now</MlButton>

                </div>

            </div>
        </div>
    );
};

export default HomeLayout;

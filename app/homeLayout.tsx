"use client"
import MlButton from './components/button';
import { MdLogin } from "react-icons/md";
import { useState } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';
import { SignInForm } from './(auth)/signin';
import { ResponsiveDrawerDialog } from './components/modal/responsivedrawer';
import { SignUpForm } from './(auth)/signup';

interface IProps {
    handleCloseModal: () => void;
    handleOpenModal: () => void;
    open: boolean
}

const HomeLayout = ({ handleOpenModal, handleCloseModal, open }: IProps) => {
    const [toggle, setToggle] = useState(false);


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

                    <div onClick={() => {
                        handleOpenModal();
                        setToggle(true)
                    }}>
                        <MlButton icon={<MdLogin />} className="border-2 border-[#C9CED6] hover:bg-orange-400 hover:text-white">
                            <h4>Login</h4>
                        </MlButton>
                    </div>

                    <MlButton onClick={() => {
                        handleOpenModal();
                        setToggle(false)
                    }} className='bg-orange-400 text-white border-none hidden md:flex lg:flex hover:text-orange-400 hover:bg-white'>Register Now</MlButton>

                </div>

            </div>

            <ResponsiveDrawerDialog
                title="Login/Register"
                description="Let's the journey begins!"
                isOpen={open}
                onClose={handleCloseModal}
            >


                {
                    toggle ? (
                        <SignInForm />

                    ) : (
                        <SignUpForm />

                    )
                }






            </ResponsiveDrawerDialog>
        </div>
    );
};

export default HomeLayout;

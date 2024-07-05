"use client"
import MlButton from './components/button';
import { MdLogin } from "react-icons/md";
import { useEffect, useState } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';
import { SignInForm } from './(auth)/signin';
import { ResponsiveDrawerDialog } from './components/modal/responsivedrawer';
import { SignUpForm } from './(auth)/signup';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Button } from '@/components/ui/button';
import { useUserContext } from './context';


interface IProps {
    user: any;
    handleCloseModal: () => void;
    handleOpenModal: () => void;
    open: boolean;
}

const HomeLayout = ({ handleOpenModal, handleCloseModal, open, user }: IProps) => {
    const [toggle, setToggle] = useState(false);




    return (
        <div className="bg-buttonColor">
            <div className="flex justify-between px-10 py-4">
                <h3 className=' font-bold text-[1.3rem] text-white '>EDT-Library</h3>

                <div className="hidden md:flex lg:flex">
                    <Menubar className='border-none bg-0'>
                        <MenubarMenu>
                            <MenubarTrigger className="text-white hover:border-b-2 border-white  focus:bg-none">
                                <Link href="/">
                                    Home
                                </Link>
                            </MenubarTrigger>
                            <MenubarTrigger className="text-white hover:border-b-2 border-white">
                                <Link href="/home/booklisting">Materials</Link></MenubarTrigger>
                            <MenubarTrigger className="text-white hover:border-b-2 border-white">About</MenubarTrigger>

                            {user?._id &&
                                (<MenubarTrigger className="text-white hover:border-b-2 border-white">
                                    <Link href="/profile">
                                        Profile
                                    </Link></MenubarTrigger>)}


                        </MenubarMenu>
                    </Menubar>
                </div>
                {user?._id ?
                    (<Button className='bg-[#F4683C] text-md  hidden md:flex lg:flex'><Link href="/profile">{user?.name}</Link></Button>) :
                    (<div className="hidden md:flex lg:flex">
                        <div className="pl-4 flex space-x-4">

                            <Button
                                onClick={() => {
                                    handleOpenModal();
                                    setToggle(true)
                                }} className=" bg-white text-[#F4683C]  hover:bg-orange-400 hover:text-white">
                                Login
                            </Button>


                            <Button onClick={() => {
                                handleOpenModal();
                                setToggle(false)
                            }} className='bg-[#F4683C]  text-white border-none hidden md:flex lg:flex hover:text-[#F4683C]  hover:bg-white'>Register Now</Button>


                        </div>
                    </div>)}

                <div className="flex md:hidden lg:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <HiOutlineMenuAlt2 color="white" size={30} />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold text-buttonColor">EDT-Library</SheetTitle>
                                <div className="block items-center">
                                    <div>
                                        <Link href="/" className=' text-[20px]'>Home</Link>
                                    </div>
                                    <div>

                                        <Link href="/home/booklisting" className='text-[20px]'>Materials</Link>
                                    </div>

                                    <div>

                                        <Link href="/" className='text-[20px]'>About</Link>
                                    </div>

                                    {user?._id &&
                                        <div>
                                            <Link href="/profile" className='text-[20px]'>Profile</Link>
                                        </div>}


                                    {user?._id ?
                                        (<Button onClick={() => {
                                            handleOpenModal();
                                            setToggle(false)
                                        }} className='bg-[#F4683C]  text-white border-none hidden md:flex lg:flex hover:text-[#F4683C]  hover:bg-white'>LogOut</Button>) :

                                        (<div className=" flex justify-center">
                                            <div className="pl-4 space-x-4">

                                                <Button
                                                    onClick={() => {
                                                        handleOpenModal();
                                                        setToggle(true)
                                                    }} className=" bg-white text-[#F4683C] hover:text-white border-2 border-buttonColor px-8 my-2">
                                                    Login
                                                </Button>


                                                <Button onClick={() => {
                                                    handleOpenModal();
                                                    setToggle(false)
                                                }} className='bg-[#F4683C]  text-white flex hover:text-[#F4683C]  hover:bg-white  border-2 border-white'>Register Now</Button>


                                            </div>
                                        </div>)
                                    }








                                </div>


                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
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

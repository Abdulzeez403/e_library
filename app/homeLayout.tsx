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
    handleCloseModal: () => void;
    handleOpenModal: () => void;
    open: boolean
}

const HomeLayout = ({ handleOpenModal, handleCloseModal, open }: IProps) => {
    const [toggle, setToggle] = useState(false);

    const { getUserProfile, user } = useUserContext();

    useEffect(() => {
        getUserProfile();
        console.log(user)
    }, [])


    return (
        <div className="bg-slate-200">
            <div className="flex justify-between px-10 py-4">
                <h3 className=' font-bold text-[1.3rem] text-orange-400 '>EDT-Library</h3>

                <div className="hidden md:flex lg:flex">
                    <Menubar className='border-none bg-0'>
                        <MenubarMenu>
                            <MenubarTrigger className="text-orange-400">Home</MenubarTrigger>
                            <MenubarTrigger className="text-white">
                                <Link href="/booklisting">Books</Link></MenubarTrigger>
                            <MenubarTrigger className="text-white">About</MenubarTrigger>

                            {user?._id &&
                                (<MenubarTrigger className="text-white">Profile</MenubarTrigger>)}


                        </MenubarMenu>
                    </Menubar>
                </div>
                {user?._id ? (<Button className='bg-[#F4683C] text-md  hidden md:flex lg:flex'>{user?.name}</Button>) : (<div className="hidden md:flex lg:flex">
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
                            <HiOutlineMenuAlt2 color="orange" size={30} className='border-2 border-buttonColor rounded-md p-4' />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>E-Resource</SheetTitle>
                                <div className="block items-center">
                                    <div>
                                        <Link href="/" className=' text-[20px]'>Home</Link>
                                    </div>
                                    <div>

                                        <Link href="/booklisting" className='text-[20px]'>Books</Link>
                                    </div>

                                    <div>

                                        <Link href="/" className='text-[20px]'>About</Link>
                                    </div>

                                    {user?._id &&
                                        <div>
                                            <Link href="/profile" className='text-[20px]'>Profile</Link>
                                        </div>}
                                    <div>

                                        <Link href="/" className='text-[20px]'>FAQ</Link>
                                    </div>

                                    {user?._id ?
                                        (<Button onClick={() => {
                                            handleOpenModal();
                                            setToggle(false)
                                        }} className='bg-[#F4683C]  text-white border-none hidden md:flex lg:flex hover:text-[#F4683C]  hover:bg-white'>LogOut</Button>) :

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

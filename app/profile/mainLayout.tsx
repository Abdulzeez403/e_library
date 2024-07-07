"use client"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuLayoutDashboard } from "react-icons/lu";
import { PiExam } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { LuHome } from "react-icons/lu";
import { useAuthContext } from '../(auth)/context';
import { HiOutlineMenuAlt2 } from "react-icons/hi";



interface IProps {
    children: React.ReactNode;
}
interface MenuItemIProps {
    title: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    suffix: React.ReactNode;
    link: string
}



export const SidebarComponent = ({ children }: IProps) => {



    const [collapsed, setCollapsed] = useState(false);
    const urlPath = usePathname();
    const courseId = urlPath.split('/')[2];

    const { signOut } = useAuthContext();

    const CustomMenuItem = ({ title, icon, onClick, suffix, link }:
        MenuItemIProps) => {
        const isActive = urlPath === link;
        return (
            <Link href={link} legacyBehavior >
                <MenuItem icon={icon}
                    className={`py-[-1rem] hover:text-[#F4683C] ${isActive ? ' bg-[#F4683C] text-white' : 'text-black'}`} >
                    <span className='text-semibold '>{title}</span>
                    {suffix && <span style={{ marginLeft: 'auto', color: "red", backgroundColor: "red" }}>{suffix}</span>}
                </MenuItem>

            </Link>


        )
    }




    return (
        <div>
            <div style={{ display: 'flex', height: '100vh', overflow: "hidden" }}>

                <div className='hidden md:flex lg:flex'>
                    <Sidebar
                        collapsed={collapsed}
                        backgroundColor="#F3F3F7"
                        transitionDuration={1000}
                        rootStyles={{
                            background:
                                'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)',
                        }}
                    >




                        <div>
                            <h4 className="text-[#F4683C] font-bold text-[1.5rem] py-4 text-center">
                                EDT-Library

                            </h4>
                        </div>


                        <Menu>
                            <CustomMenuItem
                                link={"/profile"}
                                title="Dashboard"
                                suffix
                                icon={<LuLayoutDashboard color="primary" />}
                            />
                            <CustomMenuItem
                                link={"/profile/myshelf"}
                                title="MyShelf"
                                suffix
                                icon={<PiExam color="primary" />}
                            />
                            <CustomMenuItem
                                link={"/profile/profile"}
                                title="Profile"
                                suffix
                                icon={<LuLayoutDashboard color="primary" />}
                            />



                            <CustomMenuItem
                                link={"/"}
                                title="Home"
                                suffix
                                icon={<LuHome color="primary" />}
                            />

                        </Menu>


                    </Sidebar>
                </div>


                <div style={{ display: "block", width: "100%", overflow: "auto" }}>


                    <div className="flex justify-between items-center px-4 py-2">
                        {/* Hamburger Menu for Desktop */}
                        <div onClick={() => setCollapsed(!collapsed)} className="hidden md:flex lg:flex">
                            <GiHamburgerMenu color="black" size={30} />
                        </div>

                        {/* Full Menu for Mobile and Logout Button */}

                        {/* Mobile Menu Trigger */}
                        <div className="flex md:hidden lg:hidden">
                            <Sheet>
                                <SheetTrigger>
                                    <HiOutlineMenuAlt2 color="orange" size={30} />
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle className="font-bold text-buttonColor">EDT-Library</SheetTitle>
                                        <div className="block items-center">
                                            <Menu>
                                                <CustomMenuItem
                                                    link={"/profile"}
                                                    title="Dashboard"
                                                    suffix
                                                    icon={<LuLayoutDashboard color="primary" />}
                                                />
                                                <CustomMenuItem
                                                    link={"/home/booklisting"}
                                                    title="MyShelf"
                                                    suffix
                                                    icon={<PiExam color="primary" />}
                                                />
                                                <CustomMenuItem
                                                    link={"/profile/profile"}
                                                    title="Profile"
                                                    suffix
                                                    icon={<LuLayoutDashboard color="primary" />}
                                                />
                                                <CustomMenuItem
                                                    link={"/"}
                                                    title="Home"
                                                    suffix
                                                    icon={<LuHome color="primary" />}
                                                />
                                            </Menu>
                                        </div>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* Logout Button */}
                        <div>
                            <Button className="bg-buttonColor text-white" onClick={signOut}>LogOut</Button>
                        </div>
                    </div>





                    <div className="p-5 bg-slate-300 h-full">
                        {children}
                    </div>
                </div>

            </div >


        </div>
    );
}

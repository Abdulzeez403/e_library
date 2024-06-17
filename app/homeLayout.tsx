"use client"
import MlButton from './components/button';
import { MdLogin } from "react-icons/md";
import { useState } from 'react';
import SignIn from './(auth)/signin';
import Button from './components/button';

const HomeLayout = () => {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(false)
    }

    return (
        <div className="bg-purple-500">
            <div className="flex justify-between px-10 py-4">
                <h3 className='text-white font-bold text-[1.3rem]'>E-Resourcer</h3>
                <div className="pl-4 flex space-x-4">
                    {/* <li>
                        <a href="http://localhost:3002/auth/google">google</a>
                    </li> */}
                    <div onClick={() => setOpen(false)}>
                        <MlButton icon={<MdLogin />} className="border-2 border-[#C9CED6]">
                            <h4>Login</h4>
                        </MlButton>
                    </div>

                    <MlButton className='bg-white text-purple-500 border-none hidden md:flex lg:flex'>Register Now</MlButton>

                </div>

            </div>
        </div>
    );
};

export default HomeLayout;

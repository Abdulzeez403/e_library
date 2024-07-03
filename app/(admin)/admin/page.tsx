"use client"
import React, { useState } from 'react'
import { SignInForm } from './signin'
import { SignUpForm } from './signup'

export default function Page() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                {toggle ? (<SignInForm />) : (<SignUpForm />)}
                {
                    toggle ? (
                        <h4>Dont have an account? <span className="cursor-pointer text-blue-500" onClick={() => setToggle(false)}>Sign Up</span></h4>
                    ) : (
                        <h4>Already have an account? <span className="cursor-pointer text-blue-500" onClick={() => setToggle(true)}>Sign In</span></h4>
                    )
                }
            </div>
        </div>
    )
}

"use client"
import React, { useEffect, useState } from 'react'
import { SignInForm } from './signin'
import { SignUpForm } from './signup'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Cookies from 'universal-cookie'
import { useRouter } from 'next/navigation'

export default function Page() {
    const cookies = new Cookies()
    const router = useRouter();

    useEffect(() => {

        const token = cookies.get("token")
        if (!token) {
            router.push("/admin")
        } else {
            router.push("/admin/dashboard")
        }

    }, [])

    return (
        <div className='flex justify-center items-center h-screen'>

            <Tabs defaultValue="signin" className=" pr-2">
                <TabsList className=" w-90 grid grid-cols-2">
                    <TabsTrigger value="signin" className='focus:bg-customSecondary'>SignIn</TabsTrigger>
                    <TabsTrigger value="signup" className='active:bg-customSecondary'>SignUp</TabsTrigger>
                </TabsList>

                <TabsContent value="signin">
                    <SignInForm />
                </TabsContent>

                <TabsContent value="signup" >
                    <SignUpForm />

                </TabsContent>

            </Tabs>
        </div>
    )
}

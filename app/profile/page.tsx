"use client"
import React, { useEffect } from 'react'
import { Detail } from './detail'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/navigation';

export default function Page() {
    const cookies = new Cookies()

    const router = useRouter();


    useEffect(() => {

        const token = cookies.get("token")
        if (!token) {
            router.push("/")
        }

    }, [])
    return (
        <div>

            <Detail />
        </div>
    )
}

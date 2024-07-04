"use client"
import { BookOpenCheck, File, ListEnd, UsersRound, Download } from 'lucide-react'
import React, { useEffect } from 'react'
import { Card } from '../../../components/cards'
import { useAdminContext } from './profile/context'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/navigation'

export const Detail = () => {
    const { getDashboardData, dashboardData } = useAdminContext()

    useEffect(() => {
        getDashboardData();

    }, [])

    const cookies = new Cookies()

    const router = useRouter();


    useEffect(() => {

        const token = cookies.get("token")
        if (!token) {
            router.push("/admin")
        }

    }, [])

    return (
        <div className="grid grid-cols-3 gap-4 p-8 ">

            <Card
                className="bg-[#926CFF]"
                total={dashboardData?.libraryStats?.totalUser} title="Total User" icon={
                    <Download className="h-6 w-6" />


                } />
            <Card total={dashboardData?.libraryStats?.totalDocument} title="Total Document" className="bg-[#45BB4E]" icon={
                <File className="h-6 w-6" />


            } />
            <Card
                className="bg-[#F27851]"
                title='Total Category' total={dashboardData?.libraryStats?.totalCategory} icon={
                    <ListEnd className="h-6 w-6" />

                } />

            <Card
                className="bg-[#4D4D4D]"
                title='Total Reading' total={dashboardData?.libraryStats?.totalReading} icon={
                    <UsersRound className="h-6 w-6" />

                } />

            <Card
                className="bg-[#EC6C9A]"
                title='Total Download' total={dashboardData?.libraryStats?.totalDownload} icon={
                    <BookOpenCheck className="h-6 w-6" />


                } />
        </div>
    )
}




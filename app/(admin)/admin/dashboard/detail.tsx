"use client"
import { BookOpenCheck, File, ListEnd, UsersRound, Download } from 'lucide-react'
import React, { useEffect } from 'react'
import { Card } from '../../../components/cards'
import { useAdminContext } from './profile/context'


export const Detail = () => {
    const { getDashboardData, dashboardData } = useAdminContext()



    useEffect(() => {
        getDashboardData();

    }, [])





    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
            <Card
                className="bg-[#926CFF]"
                total={dashboardData?.libraryStats?.totalUser}
                title="Total User"
                icon={<UsersRound className="h-6 w-6" />}
            />
            <Card
                className="bg-[#45BB4E]"
                total={dashboardData?.libraryStats?.totalDocument}
                title="Total Document"
                icon={<File className="h-6 w-6" />}
            />
            <Card
                className="bg-[#F27851]"
                total={dashboardData?.libraryStats?.totalCategory}
                title="Total Category"
                icon={<ListEnd className="h-6 w-6" />}
            />
            <Card
                className="bg-[#EC6C9A]"
                total={dashboardData?.libraryStats?.totalDownload}
                title="Total Download"
                icon={<BookOpenCheck className="h-6 w-6" />}
            />
        </div>

    )
}




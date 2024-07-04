"use client"

import { BookOpenCheck, File, ListEnd, UsersRound, Download } from 'lucide-react'
import React, { useEffect } from 'react'
import { Card } from '../components/cards'
import { useUserContext } from '../context'

export const Detail = () => {

    const { getUserDashboard, dashboardData } = useUserContext()

    useEffect(() => {

        getUserDashboard()
    }, [])


    return (
        <div className="grid grid-cols-3 gap-4 p-8 ">

            <Card
                className="bg-[#926CFF]"
                total={dashboardData?.totalReading} title="Total Reading" icon={
                    <File className="h-6 w-6" />



                } />
            <Card total={dashboardData?.totalDownload} title="Total Download" className="bg-[#45BB4E]" icon={
                <Download className="h-6 w-6" />



            } />



        </div>
    )
}




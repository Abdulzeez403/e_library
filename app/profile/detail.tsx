"use client"

import { BookOpenCheck, File, ListEnd, UsersRound, Download } from 'lucide-react'
import React, { useEffect } from 'react'
import { Card } from '../components/cards'
import { useUserContext } from '../context'
import { MySelfDetail } from './myshelf/detail'

export const Detail = () => {

    const { getUserDashboard, dashboardData } = useUserContext()

    useEffect(() => {

        getUserDashboard()
    }, [])


    return (
        <div className=" p-0 md:p-8 lg:p-8 ">
            <Card total={dashboardData?.totalDownload} title="Total Download" className="bg-[#45BB4E]" icon={
                <Download className="h-6 w-6" />
            } />

            <MySelfDetail />



        </div>
    )
}




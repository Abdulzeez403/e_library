import { BookOpenCheck, File, ListEnd, UsersRound, Download } from 'lucide-react'
import React from 'react'
import { Card } from '../components/cards'

export const Detail = () => {
    return (
        <div className="grid grid-cols-3 gap-4 ">

            <Card
                className="bg-purple-500"
                total='40' title="Total User" icon={
                    <BookOpenCheck className="h-6 w-6" />

                } />
            <Card total='40' title="Total Document" className="bg-green-500" icon={
                <File className="h-6 w-6" />


            } />
            <Card
                className="bg-yellow-500"
                total='40' title="Total Category" icon={
                    <ListEnd className="h-6 w-6" />

                } />

            <Card
                className="bg-slate-500"
                total='40' title="Total Read" icon={
                    <UsersRound className="h-6 w-6" />

                } />

            <Card
                className="bg-red-500"
                total='40' title="Total Download" icon={
                    <Download className="h-6 w-6" />

                } />
        </div>
    )
}




'use client'
import { useUserContext } from '@/app/context'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { User } from 'lucide-react'
import React, { useEffect } from 'react'

export default function Page() {

    const { getUserProfile, user } = useUserContext();
    useEffect(() => {
        getUserProfile()
    }, [])
    return (
        <div>

            <div className="block md:flex md:gap-x-10 lg:flex lg:gap-x-10">
                {/* <div className="border-2 p-4 w-full md:w-80 lg:w-80">
                    <div className="flex justify-center m-0 bg-customSecondary rounded-md">
                        <div className='flex justify-between align-center p-2 pb-3 bg-customSecondary rounded-md '>
                            <div className="block justify-center py-5 ">
                                <div className="relative flex justify-center items-center">
                                    <Image src={User} alt="Logo" width={70} height={70} className="rounded-full py-4" />
                                    <span className={`absolute top-[4.2rem] right-2  text-white rounded-full px-2 py-1 text-xs font-bold 
                                    ${user?.profile?.membership === "free" ? "bg-red-500" : "bg-green-500"}`}>{user?.profile?.membership}</span>
                                </div>


                                <h4 className='text-white text-sm py-2'>{user?.name}</h4>
                            </div>
                        </div>


                    </div>
                    <div className='pt-2 flex justify-center mx-0'>
                        <div className='flex gap-x-4'>

                            <div className="">
                                <h4>MemberShip:</h4>
                                <h4>Current Point</h4>
                                <h4>Total Reward</h4>


                            </div>
                            <div className="">
                                <h4>{user?.profile?.membership}</h4>

                                <h4>{user?.profile?.points}</h4>
                                <h4>{user?.profile?.rewardCount}</h4>

                            </div>



                        </div>

                    </div>

                    <Button
                        onClick={handlepayment}
                        className="w-full mt-4 bg-customPrimary text-customSecondary hover:bg-slate-300"
                        disabled={user?.profile?.membership === "premium" ? true : false}
                    >
                        {user?.profile?.membership === "free" ? (<h4>Upgrade</h4>) : (<h4 className='text-white'>Verifiled</h4>)}
                    </Button>
                </div> */}
                <h4>Profile Info</h4>
                <div className="w-full">
                    <Table className='border-2'>

                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">Name:</div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">{user?.name}</div>
                                </TableCell>
                            </TableRow >
                            <TableRow>

                                <TableCell>
                                    <div className="font-medium">Email:</div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">{user?.email}</div>
                                </TableCell>
                            </TableRow >

                        

                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">Phone:</div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">{user?.phone}</div>
                                </TableCell>
                            </TableRow >

                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

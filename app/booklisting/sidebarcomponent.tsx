import { categories } from '@/constant/data'
import React from 'react'

export const SidebarComponent = () => {
    return (
        <div  >
            <h4 className='border-b-2 border-slate-400 font-bold py-2 '>Books Categories </h4>
            {categories.map((c, index) => (
                <div className='flex justify-between py-2' key={index}>
                    <h3 className=' font-semibold py-2'>{c.name}</h3>
                    <h4 className=" bg-slate-200 rounded-full w-8 h-8 text-sm flex items-center justify-center">{c.count}</h4>
                </div>

            ))
            }

        </div>
    )
}

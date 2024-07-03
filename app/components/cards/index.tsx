import React from 'react'

interface IProps {
    total: string;
    icon: any;
    title: string;
    className: string
}
export const Card = ({ total, icon, title, className }: IProps) => {
    return (
        <div className={`${className} border rounded-md w-full h-[200px] p-8 mb-4 `}>
            <div className="flex justify-between items-center">
                <div className='bg-white rounded-md p-2'>{
                    icon}
                </div>
                <h4 className="font-semibold text-[3rem] text-white">{total}</h4>
            </div>
            <h4 className="text-[1.5rem] font-bold mt-10 text-white">{title}</h4>
        </div>
    );
};

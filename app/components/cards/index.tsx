import React from 'react'

interface IProps {
    total: string;
    icon: any;
    title: string;
    className: string
}
export const Card = ({ total, icon, title, className }: IProps) => {
    return (
        <div className={`${className} border rounded-md w-full h-[200px] p-4 mb-4 px-4`}>
            <div className="flex justify-between items-center">
                <div className='bg-white rounded-md p-2'>{
                    icon}
                </div>
                <h4 className="font-semibold text-[2rem]">{total}</h4>
            </div>
            <h4 className="text-[1.5rem] font-bold mt-10">{title}</h4>
        </div>
    );
};

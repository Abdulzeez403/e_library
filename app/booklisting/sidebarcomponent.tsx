import React from 'react';

interface IProps {
    category: any[];
    handleCategory: (category: any) => void;
    selectedCategory: string; // Assuming selectedCategory is a string representing the currently selected category
}

export const SidebarComponent: React.FC<IProps> = ({ category, handleCategory, selectedCategory }) => {
    return (
        <div>
            <h4 className='border-b-2 border-slate-400 font-bold py-2 px-4'>Books Categories</h4>
            {category.map((c: any) => (
                <div
                    key={c?._id}
                    className={`flex justify-between py-2 cursor-pointer px-2 hover:text-buttonColor ${selectedCategory === c.name ? 'bg-buttonColor rounded-md' : ''}`}
                    onClick={() => handleCategory(c.name)}
                >
                    <h3 className='font-semibold py-2'>{c.name}</h3>
                    <h4 className="bg-slate-200 rounded-full w-8 h-8 text-sm flex items-center justify-center">10</h4>
                </div>
            ))}
        </div>
    );
};

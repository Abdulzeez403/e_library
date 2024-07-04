import React from 'react';
import { Input } from '@/components/ui/input'; // Adjust path as per your project structure

interface IProps {
    type: string;
    placeholder: string;
    icon: React.ReactNode;
    onChange: (val: string) => void; // Define onChange prop as a function that takes a string parameter and returns void
}

export const InputSearchComponent: React.FC<IProps> = ({ type, placeholder, icon, onChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value); // Call onChange with the input value
    };

    return (
        <div className="flex gap-x-2 items-center w-96 border-2 rounded-lg">
            <Input type={type} placeholder={placeholder} onChange={handleInputChange} className="outline-0 border-0" />
            <div className="px-2">{icon}</div>
        </div>
    );
};

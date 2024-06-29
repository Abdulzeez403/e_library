// components/SelectDropdown.tsx
import React from 'react';
import * as Select from '@radix-ui/react-select';

interface SelectDropdownProps {
    categories: { value: string; label: string }[];
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ categories }) => {
    return (
        <Select.Root>
            <Select.Trigger className="w-[180px] p-2 bg-gray-100 border border-gray-300 rounded">
                <Select.Value placeholder="Select Category" />
                <Select.Icon />
            </Select.Trigger>
            <Select.Content className="bg-white border border-gray-300 rounded shadow-lg">
                <Select.Viewport>
                    {categories.map((category) => (
                        <Select.Item
                            key={category.value}
                            value={category.value}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                        >
                            <Select.ItemText>{category.label}</Select.ItemText>
                        </Select.Item>
                    ))}
                </Select.Viewport>
            </Select.Content>
        </Select.Root>
    );
};

export default SelectDropdown;

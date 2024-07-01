import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormFieldProps {
    label: string;
    name: string;
    type?: string;
    id?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<FormFieldProps> = ({ label, name, type = 'text', id, className, onChange }) => {
    return (
        <div className={className}>
            <Label htmlFor={id || name}>{label}</Label>
            <Field as={Input} type={type} name={name} id={id || name}
                onChange={onChange}
            />
            <ErrorMessage name={name} component="div" className="text-red-600" />
        </div>
    );
};

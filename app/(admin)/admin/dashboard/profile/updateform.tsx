import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormField } from '@/app/component/input/textInput';
import CustomButton from '@/app/components/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export interface IUser {
    name: string;
    password: string;
    email: string;
    gender: string;
    phone: string;
    role?: string;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    gender: Yup.string().required('Gender is required'),
    phone: Yup.string().required('Phone number is required'),
    role: Yup.string().optional(),
});

export const UpdateForm: React.FC = () => {
    const initialValues: IUser = {
        name: '',
        password: '',
        email: '',
        gender: '',
        phone: '',
        role: '',
    };

    const handleSubmit = (values: IUser, actions: FormikHelpers<IUser>) => {
        console.log(values);
        actions.setSubmitting(false);
    };

    return (
        <div className="container mx-auto p-4">

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form className="space-y-4">
                        <FormField label="Name" name="name" type="text" className="my-4" />
                        <FormField label="Password" name="password" type="password" className="my-4" />
                        <FormField label="Email" name="email" type="email" className="my-4" />
                        <FormField label="Phone" name="phone" type="text" className="my-4" />

                        <div className="my-4">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                            <Select onValueChange={(val: string) => setFieldValue('gender', val)}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <ErrorMessage name="gender" component="div" className="text-red-600" />
                        </div>

                        <FormField label="Role" name="role" type="text" className="my-4" />

                        <div>
                            <CustomButton type="submit" disabled={isSubmitting}>
                                Register
                            </CustomButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};


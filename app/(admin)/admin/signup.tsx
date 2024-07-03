"use client"
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomButton from '@/app/components/button';
import { FormField } from '@/app/component/input/textInput';
import { IAdmin, IUser } from '@/constant/data';
import { useAdminAuthContext } from './context';


const SignUpFormValues = Yup.object().shape({
    name: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),


});

export const SignUpForm: React.FC = () => {

    const { signUp, loading } = useAdminAuthContext()

    const initialValues: IAdmin = {
        name: '',
        email: '',
        password: '',
        role: 'Admin',
        gender: 'Female',

    };

    const handleSubmit = (values: IAdmin) => {
        signUp(values)
        console.log(values);
    };

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={SignUpFormValues}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className='w-80'>

                    <h4 className='text-center font-bold'>SignUn</h4>
                    <p className="text-center">Lorem ipsum dolor  </p>


                    <FormField label="Name" name="name" className="my-4" />
                    <FormField label="Email" name="email" className="my-4" />
                    {/* <FormField label="Phone" name="phone" className="my-4" /> */}
                    {/* <div className='w-full'>
                        <GenderSelect label="Gender" name="gender" />

                    </div> */}
                    <FormField label="Password" name="password" type="password" className="my-4" />
                    <div>
                        <CustomButton type="submit" loading={loading}>
                            SignUp
                        </CustomButton>

                    </div>
                </Form>
            )}
        </Formik>


    );
};

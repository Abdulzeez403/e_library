"use client"
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// import { useAuthContext } from './context';
import { FormField } from '../component/input/textInput';
import CustomButton from '../components/button';
import { IUser } from '@/constant/data';
import { useAuthContext } from './context';



// interface SignUpFormValues {
//     name: string;
//     email: string;
//     gender: string;
//     username: string;
//     password: string;
//     phone: string



// }

const SignUpFormValues = Yup.object().shape({
    name: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    // u: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
    phone: Yup.string().required('Required'),


});

export const SignUpForm: React.FC = () => {

    const { signUp, loading } = useAuthContext()

    const initialValues: IUser = {
        name: '',
        email: '',
        password: '',
        role: 'User',
        gender: 'Female',
        phone: ""

    };

    const handleSubmit = (values: IUser) => {
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
                <Form>
                    <FormField label="Name" name="name" className="my-4" />
                    <FormField label="Email" name="email" className="my-4" />
                    <FormField label="Phone" name="phone" className="my-4" />
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

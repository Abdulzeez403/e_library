"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormField } from '@/app/component/input/textInput';
import CustomButton from '@/app/components/button';
import { useAdminAuthContext } from './context';



interface SignInFormValues {
    email: string;
    password: string;

}

const SignInFormValues = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    password: Yup.string()
        // .min(5, 'Password too short!')
        .required('Required'),

});

export const SignInForm: React.FC = () => {
    const { signIn, loading } = useAdminAuthContext()

    const initialValues: SignInFormValues = {
        email: '',
        password: '',

    };

    const handleSubmit = async (values: SignInFormValues) => {
        await signIn(values)
        window.location.reload();
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignInFormValues}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className='w-80'>

                    <h4 className='text-center font-bold'>LogIn</h4>
                    <FormField label="Email" name="email" className="my-4" />
                    <FormField label="Password" name="password" type="password" />


                    <div>
                        <CustomButton type="submit" loading={loading}>
                            SignIn
                        </CustomButton>

                    </div>
                </Form>
            )}
        </Formik>
    );
};

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormField } from '../component/input/textInput';
import CustomButton from '../components/button';
import { useAuthContext } from './context';



interface SignInFormValues {
    emailOrMatric: string;
    password: string;

}

const SignInFormValues = Yup.object().shape({
    emailOrMatric: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    password: Yup.string()
        // .min(5, 'Password too short!')
        .required('Required'),

});

export const SignInForm: React.FC = () => {
    const { signIn, loading } = useAuthContext()

    const initialValues: SignInFormValues = {
        emailOrMatric: '',
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
                <Form>


                    <FormField label="Email / Matric" name="emailOrMatric" className="my-4" />
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

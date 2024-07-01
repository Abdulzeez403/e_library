"use client"
import { FormField } from '@/app/component/input/textInput'
import CustomButton from '@/app/components/button'
import { Form, Formik } from 'formik'
import React from 'react'

export const CategoryForm = () => {

    const initialValues = {

        category: ''
    }
    const handleSubmit = (value: any) => {
        console.log(value)
    }
    return (


        <Formik
            initialValues={initialValues}
            // validationSchema={SignInFormValues}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="">


                    <FormField label="Category" name="title" className="my-4" />


                    <div>
                        <CustomButton type="submit">
                            Add Category
                        </CustomButton>

                    </div>
                </Form>
            )}
        </Formik>
    )
}

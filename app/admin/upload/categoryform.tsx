"use client"
import { FormField } from '@/app/component/input/textInput'
import CustomButton from '@/app/components/button'
import { Form, Formik } from 'formik'
import React from 'react'
import { useCategoryContext } from './categorycontext'

export const CategoryForm = () => {
    const { createCategory, loading } = useCategoryContext()
    const initialValues = {
        name: ''
    }
    const handleSubmit = (value: any) => {
        createCategory(value)
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


                    <FormField label="Category" name="name" className="my-4" />


                    <div>
                        <CustomButton type="submit" loading={loading}>
                            Add Category
                        </CustomButton>

                    </div>
                </Form>
            )}
        </Formik>
    )
}

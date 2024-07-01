"use client"
import { FormField } from '@/app/component/input/input'
import CustomButton from '@/app/components/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { categories } from '@/constant/data'
import { Form, Formik, FormikHelpers } from 'formik'
import React, { useState } from 'react'


interface FormValues {
    title: string;
    code: string;
    category: string;
}

export const UploadDetail = () => {

    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedTitle, setSelectedTitle] = useState("")
    const [selectedCode, setSelectedCode] = useState("")
    const [selectedColor, setSelectedColor] = useState<string>('bg-blue-300');

    const categories = [
        {
            _id: 1,
            name: "Educatinal Technology"
        },
        {
            _id: 2,
            name: "Educatinal Technology"
        },
        {
            _id: 3,
            name: "Educatinal Technology"
        },
    ]

    const initialValues: FormValues = {
        title: "",
        code: "",
        category: ''
    }
    const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        console.log(values)
    }
    return (
        <div className='flex gap-x-40 items-center'>

            <Formik
                initialValues={initialValues}
                // validationSchema={SignInFormValues}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, isSubmitting }) => (
                    <Form className="w-[60%]">


                        <FormField label="Title" name="title" className="my-4"
                            onChange={(e) => {
                                handleChange(e);
                                setSelectedTitle(e.target.value);
                            }} />
                        <FormField label="Code" name="code"
                            onChange={(e) => {
                                handleChange(e);
                                setSelectedCode(e.target.value);
                            }} />

                        <div className='my-4'>
                            <Select onValueChange={(val: any) => setSelectedCategory(val)}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories?.map((supervisor: any) => (
                                        <SelectItem key={supervisor.name} value={supervisor._id}>
                                            {supervisor.name}

                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <FormField label="Code" name="code" type="password" />


                        <div>
                            <CustomButton type="submit">
                                Upload
                            </CustomButton>

                        </div>
                    </Form>
                )}
            </Formik>


            <div className="border-2 p-2 rounded-md flex justify-center items-center">

                <div className={`w-60 h-[400px] rounded-md mx-4 ${selectedColor}`}>
                    <div className='w-60 bg-red-300'>
                        <div className="mt-30">
                            <h4 className="text-center font-bold text-lg ">{selectedTitle}</h4>

                            <div>
                            </div>
                            <h4 className="text-center ">{selectedCode}</h4>
                        </div>
                    </div>



                </div>
            </div>


        </div>

    )
}

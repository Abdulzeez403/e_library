"use client";
import { FormField } from '@/app/component/input/input';
import CustomButton from '@/app/components/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories } from '@/constant/data';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDocumentContext } from './context';
import { useCategoryContext } from './categorycontext';
import { FilePenLine, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';


interface FormValues {
    title: string;
    code: string;
    category: string;
    // cover: string;
    description: string;
    document: File | null;
}

interface IProps {
    handleOpenModal: () => void;
}

export const UploadDetail = ({ handleOpenModal }: IProps) => {
    const { uploadDocument, loading } = useDocumentContext()
    const { getAllCategories, categories, updateCategoryById, deleteCategoryById } = useCategoryContext()
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedCode, setSelectedCode] = useState('');
    const [selectedColor, setSelectedColor] = useState<string>('bg-blue-300');
    const [coverPreview, setCoverPreview] = useState<string | null>(null);
    const [documentFileName, setDocumentFileName] = useState<string | null>(null);



    const initialValues: FormValues = {
        title: '',
        code: '',
        category: '',
        // cover: '',
        description: '',
        document: null,
    };

    useEffect(() => {
        getAllCategories()
    }, [])





    const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            const payload = { ...values, category: selectedCategory }
            await uploadDocument(payload as any);
            actions.resetForm();
            setDocumentFileName(null);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void) => {
        const file = e.target.files?.[0] || null;
        setFieldValue('document', file);
        setDocumentFileName(file ? file.name : null);
    };

    return (

        // <div className=" block md:flex lg:flex  md:'justify-between  lg:'justify-between">


        //     <Formik
        //         initialValues={initialValues}
        //         onSubmit={handleSubmit}
        //     >
        //         {({ values, handleChange, setFieldValue, isSubmitting }) => (
        //             <Form className=" w-96 md:w-[50%]  lg:w-[50%]  border-2 rounded-md p-4 bg-white px-4">
        //                 <FormField
        //                     label="Title"
        //                     name="title"
        //                     className="my-4"
        //                     onChange={(e) => {
        //                         handleChange(e);
        //                         setSelectedTitle(e.target.value);
        //                     }}
        //                 />
        //                 <FormField
        //                     label="Course Code"
        //                     name="code"
        //                     onChange={(e) => {
        //                         handleChange(e);
        //                         setSelectedCode(e.target.value);
        //                     }}
        //                 />
        //                 <div className="my-4">
        //                     <Select onValueChange={(val: any) => setSelectedCategory(val)}>
        //                         <SelectTrigger className="">
        //                             <SelectValue placeholder="Select Category" />
        //                         </SelectTrigger>
        //                         <SelectContent>
        //                             {categories?.map((c: any) => (
        //                                 <SelectItem key={c.name} value={c.name}>
        //                                     {c.name}
        //                                 </SelectItem>
        //                             ))}
        //                         </SelectContent>
        //                     </Select>
        //                 </div>

        //                 {/* <FormField
        //                     label="Cover"
        //                     name="cover"
        //                     onChange={(e) => {
        //                         handleChange(e);
        //                         setSelectedColor(e.target.value);
        //                     }}
        //                 /> */}

        //                 <div className="my-4">
        //                     <label htmlFor="description" className='font-semibold'>Description</label>
        //                     <Field name="description" as="textarea" className="w-full h-24 border-2" />
        //                 </div>

        //                 {/* <FormField
        //                     label="Description"
        //                     name="description"
        //                     type="textarea"
        //                     onChange={handleChange}
        //                 /> */}
        //                 <div className="pt-2">
        //                     <label htmlFor="document" className=" text-sm font-medium text-gray-700 hidden">Document</label>
        //                     <div className="flex items-center">
        //                         <input
        //                             id="document"
        //                             name="document"
        //                             type="file"
        //                             className="hidden"

        //                             onChange={(e) => handleDocumentChange(e, setFieldValue)}
        //                         />
        //                         <button
        //                             type="button"
        //                             onClick={() => document.getElementById('document')?.click()}
        //                             className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //                         >
        //                             Choose File
        //                         </button>
        //                         {documentFileName}
        //                     </div>
        //                 </div>

        //                 <div>
        //                     <CustomButton type="submit" loading={loading}>
        //                         Upload
        //                     </CustomButton>
        //                 </div>
        //             </Form>
        //         )}
        //     </Formik>


        //     <div className="block bg-white w-96 md:w-[40%] lg:[40%]  border-2 rounded-md p-10 mt-4 md:mt-0 lg:mt-0 ">
        //         <h4 className='font-bold text-center'>Lists of Category</h4>
        //         {
        //             categories.map((c, index) => (
        //                 <div className='flex justify-between py-2' key={index}>
        //                     <h4>{c.name}</h4>

        //                     <div className="flex gap-x-4">
        //                         {/* <FilePenLine color="skyblue" className="h-4 w-4 cursor-pointer" onClick={() => { updateCategoryById(c?.name, c._id) }} /> */}
        //                         <Trash2 color="red" className="h-4 w-4  cursor-pointer "
        //                             onClick={() => { deleteCategoryById(c?._id) }} />

        //                     </div>

        //                 </div>
        //             ))
        //         }

        //         <div>
        //             <Button className="bg-[#F4683C]" onClick={handleOpenModal}>Add Category</Button>
        //         </div>
        //     </div>


        // </div>

        <div className="block md:flex lg:flex md:justify-between lg:justify-between gap-4 p-4">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, setFieldValue, isSubmitting }) => (
                    <Form className="w-full md:w-[50%] lg:w-[50%] border-2 rounded-md p-4 bg-white">
                        <FormField
                            label="Title"
                            name="title"
                            className="my-4"
                            onChange={(e) => {
                                handleChange(e);
                                setSelectedTitle(e.target.value);
                            }}
                        />
                        <FormField
                            label="Course Code"
                            name="code"
                            onChange={(e) => {
                                handleChange(e);
                                setSelectedCode(e.target.value);
                            }}
                        />
                        <div className="my-4">
                            <Select onValueChange={(val) => setSelectedCategory(val)}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories?.map((c) => (
                                        <SelectItem key={c.name} value={c.name}>
                                            {c.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="my-4">
                            <label htmlFor="description" className="font-semibold">Description</label>
                            <Field name="description" as="textarea" className="w-full h-24 border-2" />
                        </div>
                        <div className="pt-2">
                            <label htmlFor="document" className="text-sm font-medium text-gray-700 hidden">Document</label>
                            <div className="flex items-center">
                                <input
                                    id="document"
                                    name="document"
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => handleDocumentChange(e, setFieldValue)}
                                />
                                <button
                                    type="button"
                                    onClick={() => document.getElementById('document')?.click()}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Choose File
                                </button>
                                {documentFileName}
                            </div>
                        </div>
                        <div>
                            <CustomButton type="submit" loading={loading}>
                                Upload
                            </CustomButton>
                        </div>
                    </Form>
                )}
            </Formik>

            <div className="block bg-white w-full md:w-[40%] lg:w-[40%] border-2 rounded-md p-10 mt-4 md:mt-0 lg:mt-0">
                <h4 className="font-bold text-center">Lists of Category</h4>
                {categories.map((c, index) => (
                    <div className="flex justify-between py-2" key={index}>
                        <h4>{c.name}</h4>
                        <div className="flex gap-x-4">
                            <Trash2
                                color="red"
                                className="h-4 w-4 cursor-pointer"
                                onClick={() => { deleteCategoryById(c?._id) }}
                            />
                        </div>
                    </div>
                ))}
                <div>
                    <Button className="bg-[#F4683C]" onClick={handleOpenModal}>Add Category</Button>
                </div>
            </div>
        </div>

    );
};

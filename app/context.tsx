"use client"
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import { notify } from './components/toast';





interface IProp {
    loading: boolean;
    getCategory: () => void;
    createCategory: (value: any) => void;
    updateCategory: (value: any) => void;
    deleteCategory: (value: any) => void;

}
const UserContext = createContext<IProp>({
    loading: false,
    getCategory() {

    },
    createCategory(value) { },
    updateCategory(value) {

    },
    deleteCategory(value) {

    },

});

export const useUserContext = () => {
    let context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("app dispatch must be used within app global provider");
    }
    return context;
};

interface IProps {
    children: React.ReactNode;
}

export const UsersContext: React.FC<IProps> = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [category, setCategory] = useState();
    const cookies = new Cookies();





    const port = "https://e-library-rosy-ten.vercel.app/api/";

    const token = cookies.get("token");


    const getCategory = async () => {
        setLoading(true)

        try {
            const response = await axios.get(`${port}/category`, {
                headers: {
                    'x-auth-token': token,
                },
            });
            setCategory(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }

    }

    const createCategory = (value: any) => {
        setLoading(true)

        try {
            const response = axios.post(`${port}/category`, value, {
                headers: {
                    'x-auth-token': token,
                },
            });
            setLoading(false)

            notify.success("Category Created!")

        } catch (error: any) {
            setLoading(false)

            if (error.response) {
                console.error('Server Error:', error.response.data);
                notify.error(error.response.data.message || 'Server error occurred');
            } else if (error.request) {
                console.error('Network Error:', error.request);
                notify.error('Network error occurred. Please try again later.');
            } else {
                console.error('Error:', error.message);
                notify.error('An error occurred. Please try again.');
            }
            throw error;
        }

    }


    const updateCategory = (value: any) => {
        setLoading(true)

        try {
            const response = axios.put(`${port}/category${value}`, {
                headers: {
                    'x-auth-token': token,
                },
            });
            setLoading(false)

            notify.success("Category Created!")

        } catch (error: any) {
            setLoading(false)

            if (error.response) {
                console.error('Server Error:', error.response.data);
                notify.error(error.response.data.message || 'Server error occurred');
            } else if (error.request) {
                console.error('Network Error:', error.request);
                notify.error('Network error occurred. Please try again later.');
            } else {
                console.error('Error:', error.message);
                notify.error('An error occurred. Please try again.');
            }
            throw error;
        }

    }


    const deleteCategory = (value: any) => {
        setLoading(true)

        try {
            const response = axios.delete(`${port}/category${value}`, {
                headers: {
                    'x-auth-token': token,
                },
            });
            setLoading(false)

            notify.success("Category Created!")

        } catch (error: any) {
            setLoading(false)

            if (error.response) {
                console.error('Server Error:', error.response.data);
                notify.error(error.response.data.message || 'Server error occurred');
            } else if (error.request) {
                console.error('Network Error:', error.request);
                notify.error('Network error occurred. Please try again later.');
            } else {
                console.error('Error:', error.message);
                notify.error('An error occurred. Please try again.');
            }
            throw error;
        }

    }














    return (
        <UserContext.Provider
            value={{ loading, getCategory, createCategory, updateCategory, deleteCategory }}>
            {children}

        </UserContext.Provider>
    )
}
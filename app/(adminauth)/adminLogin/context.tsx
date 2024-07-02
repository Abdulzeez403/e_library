"use client"
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import { IUser } from '@/constant/data';
import { UseSetCookie } from '@/app/components/hooks/cookie';
import { notify } from '@/app/components/toast';





interface IProp {
    loading: boolean;
    user: IUser,
    signIn: (payload: any) => void;
    signUp: (values: any) => void;
    currentUser: (userId: any) => void;
    updateUser: (userId: any, values: any) => void;
    signOut: () => void;
}
// const AuthContext = createContext<IProp>({
//     loading: false,
//     user: null || {},
//     signIn: (payload) => {
//         return null
//     },
//     signUp: (values) => { },
//     currentUser: (userId) => { },
//     updateUser: (userId, values) => { },
//     signOut: () => { },
// });

const AdminAuthContext = createContext<IProp | undefined>(undefined);

export const useAdminAuthContext = () => {
    let context = useContext(AdminAuthContext);
    if (context === undefined) {
        throw new Error("app dispatch must be used within app global provider");
    }
    return context;
};

interface IProps {
    children: React.ReactNode;
}

export const AdminAuthProvider: React.FC<IProps> = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState({} as any);
    const cookies = new Cookies()
    const router = useRouter();




    const port = "https://e-library-rosy-ten.vercel.app/api";
    // const port = "https://e-library-nyh6.onrender.com/api"

    const signIn = async (payload: any) => {
        setLoading(true)
        try {
            const response = await axios.post(`${port}/auth/admin-login`, payload);

            // UseSetCookie("user")
            UseSetCookie("token", response.data.token)
            setUser(response.data);
            setLoading(false)
            router.push('/admin');

            notify.success(response.data.msg);


        } catch (error: any) {
            setLoading(false);
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
        };
    };



    const signUp = async (userData: any) => {
        setLoading(true);
        try {
            const response = await axios.post(`${port}/auth/admin-signup`, userData);
            UseSetCookie("token", response.data.token)
            setUser(response.data);
            notify.success(response.data.msg);
            setLoading(false)
            router.push('/admin');

            setLoading(false);
        } catch (error: any) {
            setLoading(false);
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
    };

    const currentUser = async (userId: any) => {
        try {

            const { token } = cookies.get("token");
            const response = await axios.get(`${port}/user/${userId}`, {
                headers: {
                    'x-auth-token': token
                }
            });
            setUser(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching current user:', error);
            throw error;
        }
    };


    const updateUser = async (userId: any, values: any) => {
        setLoading(true);

        try {

            const { token } = cookies.get("token");
            const response = await axios.post(`${port}/performance/${userId}`, values, {
                headers: {
                    'x-auth-token': token
                }
            });
            setUser(response.data);
            console.log(response.data)
            setLoading(false);
            return response.data;
        } catch (error) {
            console.error('Error fetching current user:', error);
            throw error;
        }
    };





    const signOut = async () => {
        cookies.remove('user');
        cookies.remove('token');
        router.push('/')
        // window.location.reload();

    };


    return (
        <AdminAuthContext.Provider
            value={{ loading, user, signIn, signUp, currentUser, signOut, updateUser }}>
            {children}

        </AdminAuthContext.Provider>
    )
}
"use client"
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import { UseSetCookie } from '../components/hooks/cookie';
import { notify } from '../components/toast';
import { IUser } from '@/constant/data';





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

const AuthContext = createContext<IProp | undefined>(undefined);

export const useAuthContext = () => {
    let context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("app dispatch must be used within app global provider");
    }
    return context;
};




interface IProps {
    children: React.ReactNode;
}

const handleAxiosError = (error: any) => {
    if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Server Error:', error.response.data);
        notify.error(error.response.data.message || error.response.data.msg || 'Server error occurred');
    } else if (error.request) {
        // Request was made but no response was received
        console.error('Network Error:', error.request);
        notify.error('Network error occurred. Please try again later.');
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
        notify.error('An error occurred. Please try again.');
    }
    throw error; // Re-throw the error after handling it
};

export const AuthProvider: React.FC<IProps> = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState({} as any);
    const cookies = new Cookies()
    const router = useRouter();




    // const port = "https://e-library-rosy-ten.vercel.app/api/";
    const port = "https://e-library-nyh6.onrender.com/api"

    const signIn = async (payload: any) => {
        setLoading(true)
        try {
            const response = await axios.post(`${port}/auth/user-login`, payload);

            // UseSetCookie("user")
            UseSetCookie("token", response.data.token)
            setUser(response.data);
            setLoading(false)
            router.push('/profile');
            notify.success(response.data.msg);
        } catch (error: any) {
            setLoading(false);
            handleAxiosError(error)
        };
    };



    const signUp = async (userData: any) => {
        setLoading(true);
        try {
            const response = await axios.post(`${port}/auth/user-signup`, userData);
            UseSetCookie("token", response.data.token)
            setUser(response.data);
            setLoading(false)
            router.push('/profile');
            notify.success(response.data.msg);
        } catch (error: any) {
            setLoading(false);
            notify.error(error.data.msg);
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
        try {
            await cookies.remove('token');
            router.push('/');
            window.location.reload();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };


    return (
        <AuthContext.Provider
            value={{ loading, user, signIn, signUp, currentUser, signOut, updateUser }}>
            {children}

        </AuthContext.Provider>
    )
}
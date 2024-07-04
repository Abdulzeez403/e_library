"use client";
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import Cookies from 'universal-cookie';
import { notify } from './components/toast';

interface IProp {
    loading: boolean;
    dashboardData: any;
    user: any;
    getUserDashboard: () => void;
    getUserProfile: () => void;
    updateUserProfile: (value: any) => void;
    readDocument: (documentId: string) => void;
    downloadDocument: (documentId: string) => void;
}

const UserContext = createContext<IProp>({
    loading: false,
    dashboardData: null,
    user: null,
    getUserDashboard() { },
    getUserProfile() { },
    updateUserProfile(value) { },
    readDocument(documentId) { },
    downloadDocument(documentId) { },
});

export const useUserContext = () => {
    let context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUserContext must be used within UserProvider");
    }
    return context;
};

interface IProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<IProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null);
    const [dashboardData, setDashboardData] = useState<any>(null);
    const cookies = new Cookies();

    // const port = "https://e-library-rosy-ten.vercel.app/api";
    const port = "https://e-library-nyh6.onrender.com/api"


    const token = cookies.get("token");

    const getUserDashboard = async () => {
        setLoading(true);

        try {
            const response = await axios.get(`${port}/user/dashboard`, {
                headers: {
                    'x-auth-token': token,
                },
            });
            setDashboardData(response.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const getUserProfile = async () => {
        setLoading(true);

        try {
            const response = await axios.get(`${port}/user/profile`, {
                headers: {
                    'x-auth-token': token,
                },
            });
            setUser(response.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const updateUserProfile = async (value: any) => {
        setLoading(true);

        try {
            await axios.put(`${port}/user/profile`, value, {
                headers: {
                    'x-auth-token': token,
                },
            });
            notify.success("Profile Updated!");
            await getUserProfile();
        } catch (error: any) {
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
        } finally {
            setLoading(false);
        }
    };

    const readDocument = async (documentId: string) => {
        try {
            await axios.post(
                `${port}/actions/read`,
                { documentId },
                {
                    headers: {
                        'x-auth-token': token,
                    },
                }
            );
        } catch (error) {
            console.error('Failed to record document reading', error);
        }
    };

    const downloadDocument = async (documentId: string) => {
        try {
            await axios.post(
                `${port}/actions/download`,
                { documentId },
                {
                    headers: {
                        'x-auth-token': token,
                    },
                }
            );
        } catch (error) {
            console.error('Failed to record document download', error);
        }
    };

    return (
        <UserContext.Provider
            value={{ loading, dashboardData, user, getUserDashboard, getUserProfile, updateUserProfile, readDocument, downloadDocument }}
        >
            {children}
        </UserContext.Provider>
    );
};

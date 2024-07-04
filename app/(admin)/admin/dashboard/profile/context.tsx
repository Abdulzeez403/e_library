"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { notify } from '@/app/components/toast';

interface AdminContextProps {
    dashboardData: any;
    adminProfile: any;
    loading: boolean;
    getDashboardData: () => Promise<void>;
    getAdminProfile: () => Promise<void>;
    updateAdminProfile: (profile: AdminProfile) => Promise<void>;
}

interface AdminProfile {
    name: string;
    email: string;
    gender: string;
    phone: string;
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const useAdminContext = (): AdminContextProps => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdminContext must be used within an AdminProvider');
    }
    return context;
};

const handleAxiosError = (error: any) => {
    if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Server Error:', error.response.data);
        notify.error(error.response.data.message || 'Server error occurred');
    } else if (error.request) {
        // Request was made but no response was received
        console.error('Network Error:', error.request);
        notify.error('Network error occurred. Please try again later.');
    } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
        notify.error('An error occurred. Please try again.');
    }
    throw error;
};


export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [dashboardData, setDashboardData] = useState<any>(null);
    const [adminProfile, setAdminProfile] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const cookies = new Cookies()
    const token = cookies.get("token");
    const API_BASE_URL = 'https://e-library-nyh6.onrender.com/api';


    const getDashboardData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/admin/dashboard`, {
                headers: { 'x-auth-token': token },
            });
            setDashboardData(response.data);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            handleAxiosError(error);
        } finally {
            setLoading(false);
        }
    };

    const getAdminProfile = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/admin/profile`, {
                headers: { 'x-auth-token': token },
            });
            setAdminProfile(response.data);
        } catch (error) {
            console.error('Error fetching admin profile:', error);
            handleAxiosError(error);
        } finally {
            setLoading(false);
        }
    };

    const updateAdminProfile = async (profile: AdminProfile) => {
        setLoading(true);
        try {
            const response = await axios.put(`${API_BASE_URL}/admin/profile`, profile, {
                headers: { 'x-auth-token': token },
            });
            setAdminProfile(response.data);
            notify.success('Profile updated successfully');
        } catch (error) {
            console.error('Error updating admin profile:', error);
            handleAxiosError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDashboardData();
        getAdminProfile();
    }, []);

    return (
        <AdminContext.Provider
            value={{
                dashboardData,
                adminProfile,
                loading,
                getDashboardData,
                getAdminProfile,
                updateAdminProfile,
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};



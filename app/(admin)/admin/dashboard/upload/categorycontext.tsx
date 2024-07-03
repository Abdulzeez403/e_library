"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { notify } from '@/app/components/toast';



// Define the shape of a category
interface Category {
    _id: string;
    name: string;
}

// Define the shape of the context state
interface CategoryContextType {
    loading: boolean;
    categories: Category[];
    getAllCategories: () => void;
    createCategory: (name: string) => Promise<void>;
    getCategoryById: (id: string) => Promise<Category | null>;
    updateCategoryById: (id: string, name: string) => Promise<void>;
    deleteCategoryById: (id: string) => Promise<void>;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategoryContext must be used within a CategoryProvider');
    }
    return context;
};

const handleAxiosError = (error: any) => {
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

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false)
    const cookies = new Cookies()
    const token = cookies.get("token");
    const API_BASE_URL = 'https://e-library-nyh6.onrender.com/api';

    const createCategory = async (name: string) => {
        try {
            setLoading(true);
            const response = await axios.post(`${API_BASE_URL}/category`, name, {
                headers: {
                    'x-auth-token': token
                }
            });
            notify.success(response.data.msg);
            getAllCategories();
        } catch (error) {
            console.error('Error creating category:', error);
            handleAxiosError(error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch all categories
    const getAllCategories = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/category`, {
                headers: {
                    'x-auth-token': token
                }
            });
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    // Fetch a category by ID
    const getCategoryById = async (id: string): Promise<Category | null> => {
        try {
            const response = await axios.get(`${API_BASE_URL}/category/${id}`, {
                headers: {
                    'x-auth-token': token
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching category by ID:', error);
            return null;
        }
    };

    // Update a category by ID
    const updateCategoryById = async (id: string, name: string) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/category/${id}`, name, {
                headers: {
                    'x-auth-token': token
                }
            });
            notify.success(response.data.msg);
            getAllCategories(); // Refresh the categories list after update
        } catch (error) {
            handleAxiosError(error);

            console.error('Error updating category by ID:', error);
        }
    };

    // Delete a category by ID
    const deleteCategoryById = async (id: string) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/category/${id}`, {
                headers: {
                    'x-auth-token': token
                }
            });
            notify.success(response.data.msg);
            getAllCategories(); // Refresh the categories list after deletion
        } catch (error) {
            handleAxiosError(error);

            console.error('Error deleting category by ID:', error);
        }
    };

    // Fetch all categories on component mount
    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <CategoryContext.Provider
            value={{ loading, categories, getAllCategories, getCategoryById, updateCategoryById, deleteCategoryById, createCategory }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

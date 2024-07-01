
"use client"
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { notify } from '@/app/components/toast';

const API_BASE_URL = 'http://your-api-url'; // Replace with your actual API base URL

interface Document {
    id?: string;
    title: string;
    code: string;
    category: string[];
}

interface DocumentContextType {
    documents: Document[];
    loading: boolean;
    error: string | null;
    uploadDocument: (doc: Document) => Promise<void>;
    updateDocument: (id: string, doc: Document) => Promise<void>;
    getDocument: (id: string) => Promise<Document | null>;
    deleteDocument: (id: string) => Promise<void>;
    getDocumentsByCategory: (category: string) => Promise<Document[]>;
    filterDocuments: (query: Record<string, any>) => Promise<Document[]>;
    searchDocuments: (query: string) => Promise<Document[]>;
    getLatestDocuments: () => Promise<Document[]>;
    getRandomDocuments: () => Promise<Document[]>;
}

const DocumentContext = createContext<DocumentContextType | undefined>(undefined);

export const useDocumentContext = () => {
    const context = useContext(DocumentContext);
    if (!context) {
        throw new Error('useDocumentContext must be used within a DocumentProvider');
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


interface IProps {
    children: React.ReactNode;
}

export const DocumentProvider: React.FC<IProps> = ({ children }) => {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const uploadDocument = async (doc: Document) => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/document/upload`, doc);
            setDocuments((prev) => [...prev, response.data]);
        } catch (error) {
            handleAxiosError(error);
        } finally {
            setLoading(false);
        }
    };

    const updateDocument = async (id: string, doc: Document) => {
        setLoading(true);
        try {
            await axios.put(`${API_BASE_URL}/document/${id}`, doc);
            setDocuments((prev) =>
                prev.map((d) => (d.id === id ? { ...d, ...doc } : d))
            );
        } catch (error) {
            handleAxiosError(error);
        } finally {
            setLoading(false);
        }
    };

    const getDocument = async (id: string): Promise<Document | null> => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/document/${id}`);
            return response.data;
        } catch (error) {
            handleAxiosError(error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const deleteDocument = async (id: string) => {
        setLoading(true);
        try {
            await axios.delete(`${API_BASE_URL}/document/${id}`);
            setDocuments((prev) => prev.filter((d) => d.id !== id));
        } catch (error) {
            handleAxiosError(error);
        } finally {
            setLoading(false);
        }
    };

    const getDocumentsByCategory = async (category: string): Promise<Document[]> => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/document/category/${category}`);
            return response.data;
        } catch (error) {
            handleAxiosError(error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    const filterDocuments = async (query: Record<string, any>): Promise<Document[]> => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/document`, { params: query });
            return response.data;
        } catch (error) {
            handleAxiosError(error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    const searchDocuments = async (query: string): Promise<Document[]> => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/document/search`, { params: { query } });
            return response.data;
        } catch (error) {
            handleAxiosError(error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    const getLatestDocuments = async (): Promise<Document[]> => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/document/latest`);
            return response.data;
        } catch (error) {
            handleAxiosError(error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    const getRandomDocuments = async (): Promise<Document[]> => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/document/random`);
            return response.data;
        } catch (error) {
            handleAxiosError(error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    return (
        <DocumentContext.Provider
            value={{
                documents,
                loading,
                error,
                uploadDocument,
                updateDocument,
                getDocument,
                deleteDocument,
                getDocumentsByCategory,
                filterDocuments,
                searchDocuments,
                getLatestDocuments,
                getRandomDocuments,
            }}
        >
            {children}
        </DocumentContext.Provider>
    );
};

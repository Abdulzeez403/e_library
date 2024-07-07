
"use client"
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { notify } from '@/app/components/toast';
import Cookies from 'universal-cookie';


export interface Document {
    id?: string;
    title: string;
    code: string;
    category: string;
    cover: string;
    description: string;
    document: File;

}

interface DocumentContextType {
    documents: any[];
    document: any;
    categoryDocument: any[];
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
    const [document, setDocument] = useState<Document>({} as any);
    const [categoryDocument, setCategoryDocument] = useState<Document[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const cookies = new Cookies()
    const token = cookies.get("token");
    const API_BASE_URL = 'https://e-library-nyh6.onrender.com/api';



    const uploadDocument = async (doc: Document) => {
        const formData = new FormData();
        formData.append('title', doc.title);
        formData.append('code', doc.code);
        formData.append('category', JSON.stringify(doc.category));
        if (doc.cover) formData.append('cover', doc.cover);
        if (doc.description) formData.append('description', doc.description);
        if (doc.document) formData.append('document', doc.document);

        try {
            setLoading(true)
            const response = await axios.post(`${API_BASE_URL}/document/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': token

                },
            });
            setLoading(false)
            notify.success(response.data.massage);
            notify.success("Document uplaod successfully");
            setDocuments((prevDocs) => [...prevDocs, response.data]);
        } catch (error) {
            setLoading(false)
            handleAxiosError(error);


        }
    };

    const updateDocument = async (id: string, doc: Partial<Document>) => {
        const formData = new FormData();
        if (doc.title) formData.append('title', doc.title);
        if (doc.code) formData.append('code', doc.code);
        if (doc.category) formData.append('category', JSON.stringify(doc.category));
        if (doc.document) formData.append('document', doc.document);

        try {
            const response = await axios.put(`/document/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setDocuments((prevDocs) =>
                prevDocs.map((d) => (d.id === id ? response.data : d))
            );
        } catch (error) {
            console.error('Error updating document:', error);
        }
    };
    const getDocument = async (id: string): Promise<Document | null> => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/document/${id}`);
            setDocument(response.data)
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
            const response = await axios.delete(`${API_BASE_URL}/document/${id}`,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'x-auth-token': token

                    }
                },);
            setDocuments((prev) => prev.filter((d) => d.id !== id));
            notify.success(response.data.msg)
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
            setCategoryDocument(response.data)
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
            setCategoryDocument(response.data)
            return response.data;
        } catch (error) {
            console.log(error)
            return []
        } finally {
            setLoading(false);
        }
    };

    const getLatestDocuments = async (): Promise<Document[]> => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/document/latest`);
            setDocuments(response.data)
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
                document,
                categoryDocument,
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

"use client"
import React, { useEffect } from 'react'
import { MySelfDetail } from './detail'
import { useDocumentContext } from '../upload/context';

export default function Page() {
    const { getLatestDocuments, documents } = useDocumentContext();

    useEffect(() => {
        getLatestDocuments();
        console.log(documents, "the doc")
        console.log("text...")
    }, [])

    return (

        <div>
            <MySelfDetail />

        </div>
    )
}

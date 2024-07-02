import { Button } from '@/components/ui/button';
import React from 'react';

const books = [
    {
        id: 1,
        image: '/book1.jpeg',
        name: 'Book Name 1',
        author: 'Author 1',
        category: 'Category 1',
        availability: 'E-Book',
        status: 'Read'
    },
    {
        id: 2,
        image: '/book4.jpeg',
        name: 'Book Name 2',
        author: 'Author 2',
        category: 'Category 2',
        availability: 'Printed',
        status: 'Unread'
    },
    // Add more books as needed
];

export const MySelfDetail = () => {
    return (
        <div className=" p-4">
            <div className=" p-4 rounded-md mb-4 flex justify-between items-center">
                <h4 className="font-bold w-1/5">Book</h4>
                <h4 className="font-bold w-1/5">Category</h4>
                <h4 className="font-bold w-1/5">Code</h4>
                {/* <h4 className="font-bold w-1/5">Status</h4> */}
                <h4 className="font-bold w-1/5">Actions</h4>
            </div>
            {books.map((book) => (
                <div key={book.id} className="bg-white p-4 mb-4 rounded-md shadow-md flex gap-4 items-center">
                    <div className="flex items-center gap-4 w-1/5">
                        <img src={book.image} alt={book.name} className="w-16 h-16 object-cover rounded-md" />
                        <div>
                            <h5 className="font-bold text-lg">{book.name}</h5>
                            <p className="text-sm text-gray-600">{book.author}</p>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <p className="text-sm text-gray-600 text-start">{book.category}</p>
                    </div>
                    <div className="w-1/5">
                        <p className="text-sm text-gray-600 tex">{book.availability}</p>
                    </div>
                    {/* <div className="w-1/5">
                        <p className="text-sm text-gray-600 ">{book.status}</p>
                    </div> */}
                    <div className="w-1/5 block space-y-2">
                        <Button>Preview</Button>
                        <Button>Download</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

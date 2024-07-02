
export const DemoData = [

    {
        name: "Book of Life",
        author: "Unknown",
        price: "free",
        img: "/book1.jpeg",
        book: ""
    },
    {
        name: "Book of Life",
        author: "Unknown",
        price: "free",
        img: "/book2.png",
        book: ""
    },
    {
        name: "Book of Life",
        author: "Unknown",
        price: "free",
        img: "/book8.jpeg",
        book: ""
    },
    {
        name: "Book of Life",
        author: "Unknown",
        price: "free",
        img: "/book4.jpeg",
        book: ""
    },
    {
        name: "Book of Life",
        author: "Unknown",
        price: "free",
        img: "/book8.jpeg",
        book: ""
    },
    {
        name: "Book of Life",
        author: "Unknown",
        price: "free",
        img: "/book11.jpeg",
        book: ""
    }
    ,
    {
        name: "Book of Life",
        author: "Unknown",
        price: "free",
        img: "/book6.jpeg",
        book: ""
    },
    {
        name: "Book of Life",
        author: "Unknown",
        price: "free",
        img: "/book1.jpeg",
        book: ""
    }




]

export const categories = [
    { name: 'All Books', count: 100 },
    { name: 'Education', count: 40 },
    { name: 'Art', count: 25 },
    { name: 'Science', count: 15 },
    { name: 'Engineering', count: 20 },
];

export interface IUser {
    name: string,
    password: string,
    email: string,
    gender: string,
    phone?: string,
    role?: string

}

export interface IAdmin {
    name: string,
    password: string,
    email: string,
    gender: string,
    role?: string

}
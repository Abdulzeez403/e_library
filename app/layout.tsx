import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeLayout from "../app/homeLayout"
import { AuthProvider } from "./(auth)/context";
import Notification from "./components/toast";
import { UsersContext } from "./context";
import { DocumentProvider } from "./admin/upload/context";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "E-Library",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AuthProvider>
                <UsersContext>
                    <DocumentProvider>
                        <Notification />
                        <body>{children}</body>
                    </DocumentProvider>
                </UsersContext>
            </AuthProvider>

        </html>
    );
}

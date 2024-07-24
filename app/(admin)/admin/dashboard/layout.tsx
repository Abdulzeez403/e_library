"use client"
import { useEffect } from "react";
import { SidebarComponent } from "./mainLayout";
import { AdminProvider } from "./profile/context";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

interface IProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: IProps) {
    const cookies = new Cookies()
    const router = useRouter();

    useEffect(() => {

        const token = cookies.get("token")
        if (!token) {
            router.push("/admin")
        } else {
            router.push("/admin/dashboard")
        }

    }, [])

    return (
        <div>
            <SidebarComponent>
                <div className=' bg-slate-200 '>
                    <AdminProvider>
                        {children}
                    </AdminProvider>

                </div>
            </SidebarComponent>
        </div>
    );
}

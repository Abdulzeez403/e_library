
import { AdminAuthProvider } from "../context";
import { SidebarComponent } from "./mainLayout";
import { AdminProvider } from "./profile/context";

interface IProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: IProps) {

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

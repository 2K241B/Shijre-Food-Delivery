import { Sidebar } from "@/components/sidebar";

const AdminLayout = ({ children }) => {
    return (
        <section className="flex gap-6 ml-[calc((100vw-1258px)/2)] bg-gray-100">
            <Sidebar/>
            {children}
        </section>
    );
}

export default AdminLayout;
import Header from "../components/Header";
import { Outlet } from "react-router";
export default function MainLayout() {
    return (
        <>
            <Header title="Biblioteca Virtual :-)" />
            <main className="container mx-auto p-4">
                <Outlet />
            </main>
        </>
    )
}
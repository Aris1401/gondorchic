import { Outlet } from "react-router"
import { Navbar } from "../_components/Navbar/Navbar"

export const MainLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />   
        </>
    )
}
import { Outlet } from "react-router"
import { Navbar } from "../_components/Navbar/Navbar"
import toast, { Toaster } from 'react-hot-toast';

export const MainLayout = () => {
    const notifyError = (message) => {
        toast.error(message, {
            position: 'top-right',
            style: {
                backgroundColor: "#BFD7EA",
                fontFamily: "Young Serif",
                borderRadius: 0,
                borderTop: "2px solid #204B57",
                borderBottom: "2px solid #204B57",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                userSelect: "none"
            }
        })
    }

    return (
        <>
            <Toaster />
            <Navbar notifyError={notifyError} />
            <Outlet />   
        </>
    )
}
import { Outlet } from "react-router-dom"
import {Header} from "../Header/Header"
import { Footer } from "../Footer/Footer"

export const PageLayout = ()=>{
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
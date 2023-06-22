import { ReactNode } from "react";
import NavBar from "./NavBar"

interface Props{
    children: ReactNode;
}

export default function layout({ children } : Props) {
    return (
        <>
            <NavBar/>
            {children}
        </>
    )
}
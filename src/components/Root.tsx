import Header from "./Header.tsx"
import { Outlet } from "@tanstack/react-router"
import type { JSX } from "react";

const Root = (): JSX.Element => {
    return <>
        <Header />
        <Outlet />
    </>
}

export default Root
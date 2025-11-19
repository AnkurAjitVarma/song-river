import Header from "./Header.tsx"
import { Outlet } from "@tanstack/react-router"
import type { JSX } from "react";

const Root = (): JSX.Element => {
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
    </>
}

export default Root
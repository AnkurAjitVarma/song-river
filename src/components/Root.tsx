import Header from "./Header.tsx"
import { Outlet } from "@tanstack/react-router"
import type { JSX } from "react";
import { Toaster } from 'sonner';
import styles from '../styles/Toast.module.css'

const Root = (): JSX.Element => {
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Toaster
            position="bottom-center"
            closeButton={true}
            toastOptions={{
                classNames: {
                    toast: styles.Toast,
                    title: styles.Title,
                    description: styles.Description,
                    error: styles.Error,
                    success: styles.Success,
                    closeButton: styles.CloseButton,
                }
            }}
        />
    </>
}

export default Root
import { useNavigate } from "@tanstack/react-router";
import { type ChangeEvent, useRef } from "react";

const useSearchNavigation = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        navigate({
            to: '.',
            search: { q: searchValue || undefined },
            replace: true
        });
    };

    const handleClearSearch = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        navigate({
            to: '.',
            search: { q: undefined },
            replace: true
        });
    };

    return { inputRef, handleSearchChange, handleClearSearch };
}

export default useSearchNavigation
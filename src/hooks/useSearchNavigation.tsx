import { useNavigate } from "@tanstack/react-router";
import {type ChangeEvent, useEffect, useRef} from "react";

const useSearchNavigation = (debounceMs: number = 300) => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;

        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        debounceTimerRef.current = setTimeout(() => {
            navigate({
                to: '.',
                search: { q: searchValue || undefined },
                replace: true
            });
        }, debounceMs);
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

    useEffect(() => {
        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, []);

    return { inputRef, handleSearchChange, handleClearSearch };
}

export default useSearchNavigation
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const UniverseContext = createContext(undefined);

export const UniverseProvider = ({ children }) => {
    const [visible, setVisible] = useState();
    useEffect(() => {
        const storedVisible = localStorage.getItem("universeVisible");
        if (storedVisible === "true" || storedVisible === "false") {
            setVisible(storedVisible);
        } else {
            localStorage.setItem("universeVisible", "true");
            setVisible(true);
        }
    }, []);
    // const [theme, setTheme] = useState(storedTheme || "dark");

    const toggleVisibility = () => {
        setVisible((prev) => !prev);
        localStorage.setItem("universeVisible", !visible);
    };

    return (
        <UniverseContext.Provider value={{ visible, toggleVisibility }}>
            {children}
        </UniverseContext.Provider>
    );
};

export const useUniverse = () => {
    const context = useContext(UniverseContext);
    if (!context) {
        throw new Error("useUniverse must be used within a UniverseProvider");
    }
    return context;
};

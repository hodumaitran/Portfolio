import React, { useState, useEffect } from 'react';
import '../App.css';

export const Toggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="switch-container">
            <div 
                className="switch" 
                onClick={() => setDarkMode(!darkMode)} 
            >
                <div className="toggle"></div>
            </div>
        </div>
    );
}

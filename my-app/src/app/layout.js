"use client"; // Mark this file as a client component
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme } from './utils/Themes'; // Adjust path if needed
import '../app/styles/globals.css'; // Ensure this path is correct


export default function Layout({ children }) {
    const [lightMode, setLightMode] = useState(true);

    useEffect(() => {
        document.body.setAttribute('data-loaded', 'true'); // Show body after loading styles
    }, []);

    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={lightMode ? lightTheme: darkTheme}>
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}

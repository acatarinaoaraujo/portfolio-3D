"use client";
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme } from './utils/Themes';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../app/styles/globals.css';
import Head from 'next/head';


export default function Layout({ children }) {
    const [lightMode, setLightMode] = useState(true);

    useEffect(() => {
        document.body.setAttribute('data-loaded', 'true'); // Show body after loading styles
    }, []);

    return (
        <html lang="en">
            <Head>
                <title>Ana Araujo</title>
            </Head>
            <body>
                <ThemeProvider theme={lightMode ? lightTheme: darkTheme}>
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}

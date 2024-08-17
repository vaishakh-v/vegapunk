import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.scss";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Care2Gather",
    description:
        "A place where you can meet with those who may understand you better",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SessionProvider>
                    <Navbar />
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}

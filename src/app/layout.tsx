import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { SessionProvider } from "next-auth/react";

import "./globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
    weight: ["200", "400", "700", "800"],
    subsets: ["latin"],
});

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
            <body className={poppins.className}>
                {/* 
                // HACK : This may cause error as we are not providing a session into it, it automatically picks up the user, but sometimes like in initial render it will not pick up the user 
                */}
                <SessionProvider>
                    <Navbar />
                    <NextTopLoader showSpinner={false} />
                    {children}
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}

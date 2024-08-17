"use client";

import { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRound } from "lucide-react";

import Logo from "@/SVGs/Logo";

import Avatar from "../Avatar";

export default function NavbarContent({
    session,
}: {
    session: Session | null;
}) {
    const path = usePathname();

    return (
        <div>
            <div className="sticky top-0 z-50 bg-[black] bg-opacity-80 p-1 backdrop-blur-md">
                <div className="mx-auto flex max-w-screen-xl items-center justify-between">
                    <Link href="/">
                        <Logo width={200} height={100} />
                    </Link>

                    <ul className="hidden items-center gap-10 md:flex">
                        <li>
                            <Link
                                href="/"
                                className={`${
                                    path === "/"
                                        ? "text-primary-start"
                                        : "text-para opacity-80"
                                } hover:text-primary-start hover:opacity-100`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={`${
                                    path === "/about"
                                        ? "text-primary-start"
                                        : "text-para opacity-80"
                                } hover:text-primary-start hover:opacity-100`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/features"
                                className={`${
                                    path === "/features"
                                        ? "text-primary-start"
                                        : "text-para opacity-80"
                                } hover:text-primary-start hover:opacity-100`}
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/howItWorks"
                                className={`${
                                    path === "/howItWorks"
                                        ? "text-primary-start"
                                        : "text-para opacity-80"
                                } hover:text-primary-start hover:opacity-100`}
                            >
                                How it works
                            </Link>
                        </li>
                    </ul>

                    {session ? (
                        <Avatar
                            name={session.user.name || ""}
                            src={session.user.image || ""}
                            size={40}
                        />
                    ) : (
                        <Link
                            href="/auth/login"
                            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-start to-primary-end px-7 py-4 text-lg font-semibold text-white transition hover:-rotate-3"
                        >
                            <UserRound />
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

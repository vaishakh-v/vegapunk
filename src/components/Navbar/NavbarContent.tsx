"use client";

import { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRound } from "lucide-react";
import { signOut } from "next-auth/react";

import Logo from "@/SVGs/Logo";

import Avatar from "../Avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function NavbarContent({
    session,
}: {
    session: Session | null;
}) {
    const path = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-[black] bg-opacity-80 p-1 backdrop-blur-md">
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
                    <Popover>
                        <PopoverTrigger>
                            <Avatar
                                name={session.user.name || ""}
                                src={session.user.image || ""}
                                size={40}
                            />
                        </PopoverTrigger>
                        <PopoverContent align="end">
                            <Button
                                onClick={() => {
                                    signOut();
                                }}
                            >
                                Sing Out
                            </Button>
                        </PopoverContent>
                    </Popover>
                ) : (
                    <Link href="/auth/login">
                        <Button variant={"grad"}>
                            <UserRound />
                            Login
                        </Button>
                    </Link>
                )}
            </div>
        </nav>
    );
}

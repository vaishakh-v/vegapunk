import { redirect } from "next/navigation";

import { auth } from "@/auth";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    if (!session) {
        redirect("/");
        return;
    }

    if (session.user.role !== "GUEST") {
        redirect("/");
        return;
    }

    return <>{children}</>;
}

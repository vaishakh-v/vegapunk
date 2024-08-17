import { HeartHandshake } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function About() {
    return (
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 pt-28 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[220px]">
            <div className="relative w-full max-w-[586px]">
                <ImageWithFallback
                    src="/AboutImg.jpg"
                    alt="About"
                    aspectRatio={1 / 1}
                />
            </div>

            <div className="flex flex-col items-start gap-4">
                <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
                    About Us
                </h5>
                <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
                    Revolutionizing Mental Health Support Through Community and
                    Innovation
                </h1>
                <p className="mb-4 max-w-[485px] text-para">
                    Welcome to Care2Gather, where we believe in the power of
                    community and support to enhance mental well-being. Our app
                    connects patients and doctors through meaningful
                    interactions and events, fostering a supportive environment
                    for all
                </p>
                <Link href="/auth/login">
                    <Button
                        variant={"grad"}
                        className="rounded-full px-14 py-7 text-2xl font-normal"
                    >
                        <HeartHandshake />
                        Learn more
                    </Button>
                </Link>
            </div>
        </div>
    );
}

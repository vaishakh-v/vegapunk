import { HeartHandshake } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ImageWithFallback";
export default function Hero() {
    return (
        <div className="pd:pb-[90px] mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-4 px-3 pb-10 pt-[60px] md:flex-row lg:gap-[72px] lg:px-0 lg:pt-[108px]">
            <div className="mt-10 flex flex-col items-start gap-6 md:mt-0">
                <h1 className="text-4xl font-bold text-[#031432] md:text-5xl md:leading-[120%]">
                    Empowering Mental Health <br />
                    Through Community.
                </h1>
                <p className="max-w-[452px] text-para">
                    Connect with others, join events, and improve your mental
                    well-being.
                </p>
                <Link href="/auth/login">
                    <Button
                        variant={"grad"}
                        className="rounded-full px-14 py-7 text-2xl font-normal"
                    >
                        <HeartHandshake />
                        Join Now
                    </Button>
                </Link>
            </div>

            <div className="relative w-full max-w-[578px] overflow-hidden rounded-[1.5rem] object-cover">
                <ImageWithFallback
                    src="/HeroImg.jpg"
                    alt="About"
                    aspectRatio={1.8 / 1}
                />
            </div>
        </div>
    );
}

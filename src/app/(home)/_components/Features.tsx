import { Pointer } from "lucide-react";
import Link from "next/link";

import ImageWithFallback from "@/components/ImageWithFallback";
import { Button } from "@/components/ui/button";

export default function Features() {
    return (
        <div className="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-center gap-5 px-3 pb-28 pt-28 md:flex-row md:pb-[180px] lg:gap-6 lg:px-0 lg:pt-[140px]">
            <div className="flex flex-col items-start gap-4">
                <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
                    Features
                </h5>
                <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
                    Explore the Innovative Features That Make Care2Gather
                    Essential for Mental Health Support
                </h1>
                <p className="mb-4 max-w-[485px] text-para">
                    At Care2Gather, we offer a range of cutting-edge features
                    designed to enhance your mental well-being.
                </p>
                <Link href="/auth/login">
                    <Button
                        variant={"grad"}
                        className="rounded-full px-14 py-7 text-2xl font-normal"
                    >
                        <Pointer />
                        Learn more
                    </Button>
                </Link>
            </div>

            <div className="relative w-full max-w-[622px]">
                <ImageWithFallback
                    src="/FeaturesImg.png"
                    alt="About"
                    aspectRatio={1 / 1}
                />
            </div>
        </div>
    );
}

"use client";
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

import { AspectRatio } from "./ui/aspect-ratio";

interface AvatarProps extends ImageProps {
    size?: number;
    name?: string;
    aspectRatio?: number;
    className?: string;
}

const Avatar: React.FC<Omit<AvatarProps, "alt">> = ({
    src,
    name = "GU",
    size = 10,
    className,
    ...props
}) => {
    const [loading, setLoading] = useState(true);

    return (
        <div
            style={{
                width: size + "px",
                height: size + "px",
            }}
        >
            <AspectRatio
                className={cn(
                    "relative w-full overflow-hidden rounded-full",
                    className
                )}
                ratio={1 / 1}
            >
                {loading && (
                    <div className="grid h-full w-full place-content-center bg-gray-300">
                        {name
                            .split(" ")
                            .map((word) => word.charAt(0).toUpperCase())
                            .join("")}
                    </div>
                )}
                <Image
                    {...props} // Spread additional props here
                    fill
                    src={src}
                    alt="user"
                    onLoad={() => setLoading(false)}
                    className={`transition-opacity ${
                        loading ? "opacity-0" : "opacity-100"
                    } object-cover object-center`}
                />
            </AspectRatio>
        </div>
    );
};

export default Avatar;

"use client";
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

import { Skeleton } from "./ui/skeleton";
import { AspectRatio } from "./ui/aspect-ratio";

interface ImageWithFallbackProps extends ImageProps {
    aspectRatio?: number;
    className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
    src,
    alt,
    aspectRatio,
    className,
    ...props
}) => {
    const [loading, setLoading] = useState(true);

    return (
        <AspectRatio
            className={cn("relative w-full overflow-hidden", className)}
            ratio={aspectRatio}
        >
            {loading && <Skeleton className="h-full w-full" />}
            <Image
                fill
                src={src}
                alt={alt}
                onLoad={() => setLoading(false)}
                className={`transition-opacity ${
                    loading ? "opacity-0" : "opacity-100"
                } object-cover object-center`}
                {...props} // Spread additional props here
            />
        </AspectRatio>
    );
};

export default ImageWithFallback;

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ImageMeta } from "@/lib/schemas"
import Image from "next/image"


export function ProjectsCarousel({images}: {images: ImageMeta[]}) {
  return (
    <Carousel>
      <CarouselContent>
          {images.map((image: ImageMeta, idx: number) => (
          <CarouselItem key={idx}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={200}
                    className="w-full h-full object-fill"                  
                    />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

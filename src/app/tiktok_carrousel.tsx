import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const videos = [
  { id: "7468746211697102085" },
  { id: "7467944992758172933" },
  { id: "7467008251213729030" },
  { id: "7465912122887638277" },
  { id: "7465232612999662854" }
]

export function TikTok() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {videos.map((video, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Card className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    width="100%"
                    height="800"
                    src={`https://www.tiktok.com/embed/${video.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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

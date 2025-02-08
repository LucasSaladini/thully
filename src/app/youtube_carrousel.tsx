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
  { id: "DfiaT3ro0NY" },
  { id: "boZ3Yat72B4" },
  { id: "9wu5KCRmCdg" },
  { id: "komRjGEfbfE" },
  { id: "dOOrAMAtGrE" }
]

export function YouTube() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {videos.map((video, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Card className="shadow-lg rounded-lg overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    width="100%"
                    height="800"
                    src={`https://www.youtube.com/embed/${video.id}`}
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

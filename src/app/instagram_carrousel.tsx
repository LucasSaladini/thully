import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const instagramPhotos = [
  {
    id: "1",
    url: "https://instagram.fcpq5-1.fna.fbcdn.net/v/t51.29350-15/464998584_1084069410042986_1038978047577685008_n.heic?stp=dst-jpg_e35_tt6&_nc_ht=instagram.fcpq5-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2AFkYHM07R9plKoubYx0nmmJK-WGA4JZQDr-InizJPL_1gQ0Iw8KJyT0NFo-XSVwNUK_DBsSBvNrm2u-rV564j2j&_nc_ohc=tWXk8jXlwmYQ7kNvgF9ZQuB&_nc_gid=4deb42c773674e3d915be1eef8f6ae79&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYD6Rd9U0AKbSCfljbFKiv8zrJNPDXc2ODOVwa-DLaYUpg&oe=67AD24F1&_nc_sid=d885a2"
  },
  {
    id: "2",
    url: "https://instagram.fcpq5-1.fna.fbcdn.net/v/t51.29350-15/464398905_8895774583801044_7704684739389251730_n.heic?stp=dst-jpg_e35_tt6&_nc_ht=instagram.fcpq5-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2AFRRI4AzGJZf9WTwZkpKIWuvt0eUDrcVFay2stfUsPSylINqI-oXE-FJ6HI4nUuLuBbHkykAvvQa1HcB2JRuTGN&_nc_ohc=IJywjlsgAkoQ7kNvgHotAcd&_nc_gid=04e6bd080a8a41c395e6da382bb2dfc1&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYCN-ZptTrFUOME5F3icQKZJXToKggL66eXjz5tUPHt_IA&oe=67AD1C58&_nc_sid=d885a2"
  },
  {
    id: "3",
    url: "https://instagram.fcpq5-1.fna.fbcdn.net/v/t51.29350-15/464373105_1066935794887356_6959745604363849456_n.heic?stp=dst-jpg_e35_tt6&_nc_ht=instagram.fcpq5-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2AG7_72NJ0oANpMMXknRxuJ8y0w-4f1bMap6Mgj2km0sCTXLPbC8rYs2ye-uQyZKsHSUWB2NI6isKlZ75oOuyaM1&_nc_ohc=V9HVs_1aHQMQ7kNvgH44G9I&_nc_gid=d5f3d57374194c7fbe3d61b647d4c4a6&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYBsu14m01QBvWYgtNq0CWs5VahObL0TS0flMu5PMFHJ8g&oe=67AD2DD5&_nc_sid=d885a2"
  },
  {
    id: "4",
    url: "https://instagram.fcpq5-1.fna.fbcdn.net/v/t51.29350-15/464365018_446776281857362_3493093976950382632_n.heic?stp=dst-jpg_e35_tt6&_nc_ht=instagram.fcpq5-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2AGFVo8j9YFotSte2Bcw-kuIh3i_hTD8aQAj9wstuE_0Sr1P-V938WGJ944n3zmOL1C8K0X77t65-5SJqJ69bfIy&_nc_ohc=ErB2UDe2dRMQ7kNvgFwptWf&_nc_gid=ce5de9abf4394d61819c5e78028acd80&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYBKHZJS9NeVkxuRIdt5WQMhfF0KgKiNOqGthVUeRruMyA&oe=67AD3701&_nc_sid=d885a2"
  }
]

export function Instagram() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {instagramPhotos.map((photo) => (
          <CarouselItem
            key={photo.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-2">
              <Card className="shadow-lg rounded-lg overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={photo.url}
                    alt={`Instagram Photo ${photo.id}`}
                    width={500} // Defina a largura desejada
                    height={500} // Defina a altura desejada
                    className="w-full h-auto rounded-lg"
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

import Image from "next/image"
import { YouTube } from "./youtube_carrousel"
import { TikTok } from "./tiktok_carrousel"
import { Instagram } from "./instagram_carrousel"
import Twitch from "./twitch"

export default function Home() {
  const videoId = "v2374329910"

  return (
    <div className="justify-center items-center h-screen w-full">
      <main className="flex flex-col w-full items-center justify-center">
        <div className="align-center justify-center">
          <Image src="/thully.jpeg" alt="logo" width={500} height={500} />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="name">Thully</h1>
        </div>
        <div className="flex items-center justify-center text-center description w-full">
          <p className="p-6">
            Bem-vindo ao canal da <strong>Thully</strong>! Aqui você encontra os
            melhores momentos das minhas lives na{" "}
            <strong>
              <a href="https://twitch.tv/thully_" target="_blank">
                Twitch
              </a>
            </strong>
            , transformados em cortes divertidos e emocionantes. Siga-me no
            <strong>
              <a href="https://www.youtube.com/@thully_062" target="_blank">
                YouTube
              </a>
            </strong>
            ,{" "}
            <strong>
              <a href="https://www.tiktok.com/@itsme.thully" target="_blank">
                TikTok
              </a>
            </strong>{" "}
            e{" "}
            <strong>
              <a
                href="https://www.instagram.com/thully_062?igsh=MWRnN2xtYmQxNWU5cg=="
                target="_blank"
              >
                Instagram
              </a>
            </strong>{" "}
            para não perder nenhuma novidade e venha fazer parte da nossa
            comunidade! Junte-se à <strong>Thully</strong> em uma jornada cheia
            de risadas e jogadas épicas! Aqui, você encontrará cortes incríveis
            das minhas transmissões ao vivo na Twitch, compartilhados no
            YouTube, TikTok e Instagram e venha fazer parte da nossa comunidade
            no{" "}
            <strong>
              <a href="https://discord.gg/g6Xpq7AmHF" target="_blank">
                Discord
              </a>
            </strong>
            ! Não perca a chance de ver os melhores momentos, dicas e interações
            com a comunidade. Siga-me e venha se divertir!
          </p>
        </div>
        <div className="flex items-center justify-center text-center w-full social_media_alt">
          <Twitch videoId={videoId} />
        </div>
        <div className="flex items-center justify-center text-center w-full social_media">
          <YouTube />
        </div>
        <div className="flex items-center justify-center text-center w-full social_media_alt">
          <TikTok />
        </div>
        <div className="flex items-center justify-center text-center w-full social_media">
          <Instagram />
        </div>
      </main>
    </div>
  )
}

import React from "react"

interface TwitchProps {
  videoId: string
}

const Twitch: React.FC<TwitchProps> = ({ videoId }) => {
  const embedUrl = `https://player.twitch.tv/?video=v${videoId}&parent=thully.vercel.app/&autoplay=false"`

  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
      <iframe
        src={embedUrl}
        height="100%"
        width="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Twitch

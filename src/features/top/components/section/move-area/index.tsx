import React from 'react'
import './index.css'
import { SimpleModal } from '../../../../../components/modal/simpleModal'
import YouTube from 'react-youtube'
import { Options } from 'youtube-player/dist/types'
import { SectionTitle } from '../../../../../components/text/section-title'
import { Title } from '../../../../../components/text/title'
import { Typography } from '../../../../../components/text/typography'
export default function MoveArea() {
  const [open, setOpen] = React.useState(false)
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  } as Options;
  return (
    <section className='move__about-section'>
        <div id="move" style={{textAlign:"center"}}>
            <SectionTitle>紹介動画</SectionTitle>
          </div>
      <div className='move__about-inner'>
        <div className='move__area' style={{ 
        background: "url(/thum.jpeg)", backgroundSize: "cover", backgroundPosition: "center"
      }}>
          <div className='move__area-start' style={open ? {zIndex:0} : {zIndex:10}}>
            <img src="/play_355f41e1.svg" alt="" onClick={() => setOpen(true)}/>
          </div>
        </div>
        <div className='about__area'>
          <div style={{margin:"2rem 0"}}>
          <Title>中板橋とは</Title>
          </div>
          <Typography>
            中板橋は、東京都板橋区の南東部に位置する地域です。<br></br>
            東武東上線がつながっているため、都心へのアクセスも良く、商店街には、たくさんの美味しいお店があります。<br></br>
            また中板橋の由来は、上板橋宿と下板橋宿の中間にあるため「中板橋」と命名したことに由来しています。
          </Typography>
        </div>
      </div>
      <SimpleModal open={open}>
        <YouTube
          videoId="RnGBP90H-8Q"
          opts={opts}
          />
          <div style={{margin:"1rem 0 0 0"}}>
          <button onClick={() => setOpen(!open)}>閉じる</button>
          </div>
      </SimpleModal>
    </section>
  )
}

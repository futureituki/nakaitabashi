// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { InfoBox } from '../article/info-box';
export default function SwiperAnimation() {
  return (
    <Swiper
    modules={[Autoplay, EffectFade, Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}    
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
    loop={true}
    effect='fade'
    fadeEffect={{ crossFade: true }}
  >
    <SwiperSlide>
      <img src="/top-1.jpeg" alt="" />
      <InfoBox catchCopy="中板橋商店街入り口の門" title="結構でかい看板で、初めてみた時かっこいいと思いました。"
description="中板橋商店街" />
    </SwiperSlide>
    <SwiperSlide>
        <img src="/top-2.jpeg" alt="" />
        <InfoBox catchCopy="勉強をする時によく利用するモスバーガー" title="
店員さんがいい人ばかりで、お店の雰囲気が好きです。"
description="モスバーガー＆カフェ 中板橋駅前店" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/top-3.jp
eg" alt="" />
        <InfoBox catchCopy="僕が毎日通る駅の入り口
" title="いつもお世話になっている駅、質素な雰囲気が好きです。18時から20時の間は、意外と人が多い"
description="中板橋駅 南口" />
    </SwiperSlide>
  </Swiper>
    // <div>
    //   <span className='pagination'></span>
    // </div>
  )
}

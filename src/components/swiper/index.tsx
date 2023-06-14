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
      <InfoBox catchCopy="交通のべんりさと自然の豊かさを兼ね備えた街
" title="人との関わりを実感しながら、まちに貢献する。
地域おこし協力隊1年目、飯塚さんが移住で手にしたもの。"
description="地域おこし協力隊　飯塚哲さん" />
    </SwiperSlide>
    <SwiperSlide>
        <img src="/top-2.jpeg" alt="" />
        <InfoBox catchCopy="まちを舞台にファンタジー小説PROJECT
" title="人との関わりを実感しながら、まちに貢献する。
地域おこし協力隊1年目、飯塚さんが移住で手にしたもの。"
description="地域おこし協力隊　飯塚哲さん" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/top-3.jp
eg" alt="" />
        <InfoBox catchCopy="まちを舞台にファンタジー小説PROJECT
" title="人との関わりを実感しながら、まちに貢献する。
地域おこし協力隊1年目、飯塚さんが移住で手にしたもの。"
description="地域おこし協力隊　飯塚哲さん" />
    </SwiperSlide>
  </Swiper>
    // <div>
    //   <span className='pagination'></span>
    // </div>
  )
}

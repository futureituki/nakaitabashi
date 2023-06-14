import React, { useState } from "react";
import { ToggleButton } from "./components/menu/open-toggle";
import { Navigation } from "./components/menu/";
import SwiperAnimation from "./components/swiper";
import './App.css'
import MoveArea from "./features/top/components/section/move-area";
import { ArticleArea } from "./features/top/components/section/article-area";
import { Footer } from "./components/footer";
import { SectionTitle } from "./components/text/section-title";
function App() {
  const [open, setOpen] = React.useState(false);
  const [divVisibility, setDivVisibility] = useState({
    article_0:'false',
    article_1:'false',
    article_2:'false'
  })
  return (
    <div className="App">
        <ToggleButton open={open} setOpen={setOpen}/>
        <h1 className="header__title">中板橋</h1>
        <Navigation open={open} setOpen={setOpen}/>
        <main className="">
          <div className="swiper__area">
            <div className="swiper__container">
              <SwiperAnimation/>
            </div>
          </div>
          <MoveArea/>
          <ArticleArea id={divVisibility} update={setDivVisibility}/>
        <Footer />
        </main>
    </div>
  );
}

export default App;

import React, { CSSProperties } from 'react'
import './index.css'
import { ArticleMock, galleryArr } from '../../../../../constant/article'
import { InfoBox } from '../../../../../components/article/info-box'
import { Button } from '../../../../../components/button'
import { EachDiv } from '../../../../../components/scroll-observe'
import { SectionTitle } from '../../../../../components/text/section-title'
import { SimpleModal } from '../../../../../components/modal/simpleModal'
import { Modals } from '../../../../../components/modal/Modals'

interface Props {
  update:React.Dispatch<React.SetStateAction<any>>
  id:any
}
export const ArticleArea:React.FC<Props> = ({ update, id }) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const showModal = (name:string) => {
    setOpen(true);
    setName(name);
  };
  return (
    <div className="article__section">
      <div className="article__inner">
      <div id="shop" style={{textAlign:"center"}}>
            <SectionTitle>お店紹介</SectionTitle>
          </div>
        <div className='article__shop-area'>
          {ArticleMock.map((article, index) => (
            <EachDiv id={`article_${index}`} update={update} key={index}>
            <div>
            <div className='article__shop' style={id[`article_${index}`] === 'false' ? {opacity:0} : {opacity:1} as any}>
              <img src={article.src} alt="" style={{width:"100%"}}/>
              <InfoBox catchCopy={article.catchCopy} title={article.title} description={article.description} className="-bottom-90"/>
            </div>
            <div style={{margin:"-2rem 0 5rem 0"}}>
            <Button handle={() => showModal(article.title)}>gallery</Button>
            <Modals open={open} title={article.title} name={name}>
              <div className='gallery__container'>
                {galleryArr[index].map((item, index) => (
                  <div className='gallery__box' key={index}>
                    <img src={item} alt=""/>
                  </div>
                ))}
              </div>
              <Button handle={() => setOpen(false)}>閉じる</Button>
            </Modals>
            </div>
            </div>
           </EachDiv>
          )
          )}
        </div>
      </div>
    </div>
  )
}

import React from "react"
import { Link as Scroll } from 'react-scroll';
import { navList } from "../../constant/nav"
import "./index.css"
import { usePrevious } from "../../lib/prev-state"
interface Props {
  open: boolean
  setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export const Navigation:React.FC<Props> = ({ open, setOpen }) => {
  const prev_open = usePrevious(open)
  const CloseStyle = prev_open === true ? 'close-animation' : ''
  const OpenStyle = open === true ? 'open-animation' : ''
  return (
    <aside className={`${[CloseStyle,OpenStyle,'l-sidebar'].join(' ')}`}>
      <div className="l-sidebar__logo">
        <section className="section__link">
          <div className="link">
            {/* <img src="" alt="" /> */}
            <h1 className="title">
              <span className="title_ja">中板橋</span>
              <span className="title_en">nakaitabashi</span>
            </h1>
          </div>
        </section>
      </div>
      <p className="menu__text">menu</p>
      <div className="l-sidebar__main">
        <ul className="l-list">
          {navList.map((item, index) => (
            <li key={index}>
                <Scroll to={item.path} smooth={true}>{item.name}</Scroll>
            </li> 
          ))}
        </ul>
      </div>
      <div className="l-sidebar__main-sp">
        <ul className="l-list-sp">
          {navList.map((item, index) => (
            <li key={index}>
                <Scroll to={item.path} smooth={true} onClick={() => setOpen(!open)}>{item.name}</Scroll>
            </li> 
          ))}
        </ul>
      </div>
    </aside>
  )
}
import React from "react"
import style from "./style.module.css"
interface Props {
  children: React.ReactNode
}

export const Text:React.FC<Props> = ({ children }) => {
  return  <p className={style.menu_text}>
    {children}
  </p>
}
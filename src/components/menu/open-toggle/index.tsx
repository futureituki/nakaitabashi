import React, { useMemo } from 'react'
import './index.css'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const ToggleButton:React.FC<Props> = ({ open, setOpen }) => {
  const toggleStyle = useMemo(() => {
    return open ? "toggle_animation" : "toggle_border"
  }, [open])
  return (
    <div className="toggle_btn" onClick={() => setOpen(!open)}>
      <span className={open ? toggleStyle : toggleStyle}></span>
      <span className={open ? toggleStyle : toggleStyle}></span>
    </div>
  )
}
import React from 'react'
import './index.css'
interface Props {
  children: React.ReactNode
}
export const Title:React.FC<Props> = ({ children }) => {
  return (
    <div className='item_title'>
      <h3>
        {children}
      </h3>
    </div>
  )
}

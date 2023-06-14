import React from 'react'
import './index.css'
interface Props {
  children:React.ReactNode
}
export const Typography:React.FC<Props> = ({ children}) => {
  return (
    <div className='typography'>
      <p>
        {children}
      </p>
    </div>
  )
}

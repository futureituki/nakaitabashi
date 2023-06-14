import React from 'react'
import './index.css'
interface Props {
  children: React.ReactNode
}
export const SectionTitle:React.FC<Props> = ({ children }) => {
  return (
    <h2 className='section-title'>
      { children }
    </h2>
  )
}

import React from 'react'
import './index.css'
import { Title } from '../../text/title'
import { Typography } from '../../text/typography'
import { SectionTitle } from '../../text/section-title'

interface Props {
  catchCopy:string
  title:string 
  description:string
  className?:string
}

export const InfoBox:React.FC<Props> = ({ catchCopy, title, description, className}) => {
  return (
    <div className={`${[className, 'box'].join(' ')}`}>
      <div className='box__catch-copy'>
        <h2>{catchCopy}</h2>
      </div>
        <h4 className='top-text'>{title}</h4>
        <Typography>{description}</Typography>
    </div>
  )
}

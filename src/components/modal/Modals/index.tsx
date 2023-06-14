import React from 'react'
import Modal from 'react-modal';

interface Props {
  children: React.ReactNode
  open:boolean
  name:string
  title:string
}
export const Modals:React.FC<Props> = ({ children, open, name, title }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      width:'60vw',
      height:'500px',
      padding:'1.6rem',
      zIndex:999,
      transform: 'translate(-50%, -50%)',
    },
  }
  if(title !== name) return null
  return (
    <div className='modal__container'>
      <Modal 
        isOpen={open}
        style={customStyles}
        // className={`modal__container`}
      >
        { children }
      </Modal>
    </div>
  )
}

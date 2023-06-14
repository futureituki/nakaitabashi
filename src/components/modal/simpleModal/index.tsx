import React from 'react'
import Modal from 'react-modal';
import './index.css'
interface Props {
  children: React.ReactNode
  open:boolean
}
export const SimpleModal:React.FC<Props> = ({ children, open }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      width:'fit-content',
      height:'fit-content',
      padding:'3rem',
      zIndex:999,
      transform: 'translate(-50%, -50%)',
      overflow:'hidden'
    },
    overlay: {
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.5)"
    }
  }
  return (
      <Modal 
        isOpen={open}
        style={customStyles}
        // className={`modal__container`}
      >
        { children }
      </Modal>
  )
}

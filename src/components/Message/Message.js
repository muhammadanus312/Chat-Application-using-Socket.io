import React from 'react'
import style from './Message.module.css'
const Message = ({direction}) => {
  return (
    <div className={`d-flex justify-content-center align-items-${direction} flex-column ${style.msgbox}`}>
      <div className={`${style.msg} p-1`}>
        Lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit est enim excepturi libero earum quam beatae pariatur aliquam, nobis deserunt!
      </div>
      <div className={`mt-1`}>
        4:55 PM
      </div>
    </div>
  )
}

export default Message

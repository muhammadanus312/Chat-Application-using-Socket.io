import React,{useState} from "react";
import Friends from "../../components/Friends/Friends";

import style from "./Chat.module.css";
import CurrentChat from "../../components/CurrentChat/CurrentChat";
import { Link } from "react-router-dom";
const Chat = ({socket,user}) => {
  
  const room=[
    {
      id:1,
      name:"anas",
      status:"online",
      lastMsg:'hi anas',
      time:'04:55 PM'
    },
    {
      id:2,
      name:"ali",
      status:"offline",
      lastMsg:'hi bro',
      time:'04:55 PM'

    },
    {
      id:3,
      name:"saad",
      status:"online",
      lastMsg:'hi anas',
      time:'04:55 PM'
    },
    {
      id:4,
      name:"saad",
      status:"online",
      lastMsg:'hi anas',
      time:'04:55 PM'
    },
    {
      id:5,
      name:"saad",
      status:"online",
      lastMsg:'hi anas',
      time:'04:55 PM'
    },
  ]

const [Current, setCurrent] = useState(null)

const clickMember=(element)=>{
  setCurrent(element)
}
  return (
    <div className="">
      <div className={`chat-container`}>
        <div className={` ${style.chat}`}>
          <div className={` mx-2  ${style.room} py-3`}>
            {
              room.map((element,index)=>{
                return(
                  <div onClick={()=>{clickMember(element)}} className={style.member}>
                    <Friends id={Current && Current.id} data={element}/>
                  </div>
                )
              })
            }
          </div>
          <div>
            <CurrentChat data={Current}/>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Chat;

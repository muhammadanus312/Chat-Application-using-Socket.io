import React from "react";
import Message from "../../components/Message/Message";
import style from "./CurrentChat.module.css";
import send from "../../assets/send-fill.svg";

const CurrentChat = ({data}) => {
  return (
    <div className={` mx-3 ${style.chatBox}`}>
    {
        data?
        <div>
        <div className={`d-flex align-items-center ${style.head}`}>
          <div className={`mx-2`}>
            <img
              className={`${style.image}`}
              src="https://www.zooplus.be/magazine/wp-content/uploads/2021/02/chaton-errant-768x512-1.jpeg"
              alt=""
            />
          </div>
          <div className={`d-flex flex-column justify-content-center mx-1`}>
            <h4 className={`${style.friendName}`}>{data.name}</h4>
            <p className={`${style.status} my-1`}>{data.status}</p>
          </div>
        </div>

        <div className={`${style.chatSection}`}>
          <Message direction="end" />
          <Message direction="start" />
          <Message direction="end" />
          <Message direction="end" />
          <Message direction="start" />
          <Message direction="end" />
          <Message direction="end" />
          <Message direction="start" />
          <Message direction="end" />
        </div>

        <div
          className={`d-flex ${style.typeMsg} align-items-center p-1 my-2 mx-2`}
        >
          <input
            className=""
            type="text"
            name=""
            id=""
            placeholder="Type message here"
          />
          <img className={style.send} src={send} alt="" />
        </div>
      </div>:
      <div className={`d-flex justify-content-center align-items-center ${style.welcome} `}>
        <h2>Welcome to chat</h2>
      </div>
    }
    
    </div>
  );
};

export default CurrentChat;

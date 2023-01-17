import React from "react";
import style from "./Friends.module.css";
const Friends = ({id,data}) => {
  return (
    <div className={`${style.box} d-flex pt-3 ${id===data.id?'bg-info':''}`}>
      {/* <div className=""> */}
        <div className={`mx-2`}>
          <img
            className={`${style.image}`}
            src="https://www.zooplus.be/magazine/wp-content/uploads/2021/02/chaton-errant-768x512-1.jpeg"
            alt=""
          />
        </div>
        <div className={`mx-1 ${style.content}`}>
          <h5 className={`${style.friendName}`}>{data.name}</h5>
          <p className={`${style.msg}`}>{data.lastMsg}</p>
        </div>
        <div className={` mx-1 ${style.time}`}>{data.time}</div>
      {/* </div> */}
    </div>
  );
};

export default Friends;

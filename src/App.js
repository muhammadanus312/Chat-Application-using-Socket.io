import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import Chat from "./pages/Chat/Chat";
import { useState, useRef } from "react";
const socket = io.connect("http://localhost:5000");
function App() {
  const id = useRef(null);
  const name = useRef(null);
  const [user, setuser] = useState({});
  const [roomid, setRoom] = useState("12345");
  const joinClick = () => {
    setuser({
      id: id.current.value,
      name: name.current.value,
    });
  };
  return (
    <div>
      <input ref={id} type="text" placeholder="id" />
      <input ref={name} type="text" placeholder="name" />
      <button className="btn" onClick={joinClick}>
        Join
      </button>
      <Chat socket={socket} user={user} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import Chat from './pages/Chat/Chat';
function App() {
  const socket=io.connect('')
  return (
    <div >
      <Chat/>
    </div>
  );
}

export default App;

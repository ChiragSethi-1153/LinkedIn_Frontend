import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import io from 'socket.io-client'

const socket = io.connect(process.env.REACT_APP_SERVER)

function App() {
  return (
    <div className="App" style={{height:"100vh"}} >
     <BrowserRouter>
      <Routing socket={socket} />
     </BrowserRouter>
    </div>
  );
}

export default App;

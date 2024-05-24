import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import Navbar from './components/Navbar/Navbar';
import { Box, Stack } from '@mui/material';


function App() {



  return (
    <div className="App" >
      <BrowserRouter>

       <Navbar />
        <Routing />

      </BrowserRouter>
    </div>
  );
}

export default App;

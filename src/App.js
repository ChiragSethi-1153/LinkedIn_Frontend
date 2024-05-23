import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import Navbar from './components/Navbar/Navbar';
import { Box } from '@mui/material';


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Box className='home-nav'>
          <Navbar />
        </Box>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { useRoutes } from 'react-router-dom';
import route from './routes/Routing';
import Navbar from './components/Navbar/Navbar';
import { Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';


function App() {

  const token = localStorage.getItem('token')
  const content = useRoutes(route(token ? true : false))


  return (
    <div className="App" >

        {content}
  
    </div>
  );
}

export default App;

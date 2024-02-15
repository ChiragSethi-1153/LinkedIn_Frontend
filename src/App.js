import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routing />

     </BrowserRouter>
    </div>
  );
}

export default App;

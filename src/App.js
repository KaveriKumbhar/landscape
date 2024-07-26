
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import WhoIs from './components/WhoIs';


function App() {
  return (
    <div className='bg-[#efefef]'>
      <Navbar/>
      <Home/>
      <WhoIs/>
    </div>
  );
}

export default App;

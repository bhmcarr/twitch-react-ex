import './App.css';
import Carousel from './Carousel/Carousel';
import LiveChannels from './LiveChannels/LiveChannels';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="MainView">
        <SideBar />
        <div className='RightPane'>
          <Carousel />
          <LiveChannels />
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Carousel from './Carousel';
import LiveChannels from './LiveChannels';
import NavBar from './NavBar';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="MainView">
        <SideBar />
        <div className='RightPane'>
          <Carousel />
          {/* <LiveChannels /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import LiveChannels from './LiveChannels';
import NavBar from './NavBar';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="MainView">
        <SideBar />
        <LiveChannels />
      </div>
    </div>
  );
}

export default App;

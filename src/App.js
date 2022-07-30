import './App.css';
import NavBar from './NavBar';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="MainView">
        <SideBar />
      </div>
    </div>
  );
}

export default App;

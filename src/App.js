import './App.css';
import NavBar from './components/NavBar';
import SobreMi from './components/SobreMi';
import Stack from './components/Stack';
function App() {
  return (
    <div className="App select-none">
      <NavBar />
      <SobreMi/>
      <Stack/>
    </div>
  );
}

export default App;

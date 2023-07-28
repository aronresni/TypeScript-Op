import './App.css';
import NavBar from './components/NavBar';
import SobreMi from './components/SobreMi';
import Stack from './components/Stack';
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App select-none">
      <NavBar />
      <SobreMi />
      <Stack />
      <Footer/>
    </div>
  );
}

export default App;

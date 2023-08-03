import './App.css';
import NavBar from './components/NavBar';
import SobreMi from './components/SobreMi';
import Stack from './components/Stack';
import Footer from "./components/Footer"
import Proyectos from './components/Proyectos/Proyectos';
import Educacion from './components/Educacion';
function App() {
  return (
    <div className="App select-none">
      <NavBar />
      <SobreMi />
      <Stack />
      <Proyectos />
      <Educacion/>
      <Footer />
    </div>
  );
}

export default App;

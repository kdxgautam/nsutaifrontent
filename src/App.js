
import './App.css';
import Navbar from "./components/Navbar"
import Footer from './components/footer';
import Home from './pages/home/home';

function App() {
  return (
    <main className='overflow-x-auto'>
    <Navbar/>
    <Home/>
    <Footer/>
    </main>
  );
}

export default App;

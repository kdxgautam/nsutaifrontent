
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/cart';
import Hero from './components/hero';
import Hero2 from './components/hero2';

function App() {
  return (
    <main className='p-3'>
    <Navbar/>
    <Hero/>
    <Hero2/>
    <Card/>
    </main>
  );
}

export default App;

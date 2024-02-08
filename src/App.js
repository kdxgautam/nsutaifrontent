
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/cart';
import Footer from './components/footer';
import Hero from './components/hero';
import Hero2 from './components/hero2';

function App() {
  return (
    <main className='p-3 overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <Hero2/>
    {/* render card container here , inside cart container add cards using map  */}
    <Card/>
    <Footer/>
    </main>
  );
}

export default App;

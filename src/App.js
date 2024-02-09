import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/home/home";

function App() {
  return (
    <main className="overflow-x-auto">
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      
      </Routes>
      <Footer />
    </BrowserRouter>
    </main>
  );
}

export default App;

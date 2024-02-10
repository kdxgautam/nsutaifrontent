import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/home/home";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import ProfilePage from "./pages/About/ProfilePage";
import AboutPage from "./pages/About/AboutPage";
function App() {
  return (
    <main className="overflow-x-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog" element={<SingleBlog />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

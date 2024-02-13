import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/home/home";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import Event from "./pages/Events/Events"
import ProfilePage from "./pages/About/ProfilePage";
import AboutPage from "./pages/About/AboutPage";
import Projects from "./pages/Projects/Projects"
function App() {
  return (
    <main className="overflow-x-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/events" element={<Event/>}/>
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Blogs from "./pages/Blogs/Blogs";
import Blog from "./pages/SingleBlog/SingleBlog";
import Home from "./pages/home/home";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import Event from "./pages/Events/Events";
import ProfilePage from "./pages/About/ProfilePage";
import AboutPage from "./pages/About/AboutPage";
import Projects from "./pages/Projects/Projects";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import Contact from "./pages/contact/contact";
import Achievements from "./pages/Achievements/achievements";
import Admin from "./pages/Admin/Admin";
import AdminAuth from "./pages/Admin/AdminAuth";
import AdminBlog from "./pages/Admin/AdminBlog";
import AdminOperations from "./pages/Admin/AdminOperations/AdminOperations";
function App() {
  return (
    <main className="overflow-x-auto h-[100vh]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/events" element={<Event />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/auth" element={<AdminAuth />} />
          <Route exact path="/admin/:operation" element={<AdminOperations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

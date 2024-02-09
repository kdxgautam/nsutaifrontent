import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  return (
    <main className="overflow-x-auto">
      <Navbar />
      <Blogs />
      <Footer />
    </main>
  );
}

export default App;

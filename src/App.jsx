import Footer from "./sections/footer/Footer";
import About from "./sections/about/About";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Gallery from "./sections/gallery/Gallery";
import Contact from "./sections/contact/Contact";

function App() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;

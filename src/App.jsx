import Footer from "./sections/footer/Footer";
import About from "./sections/about/About";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Gallery from "./sections/gallery/Gallery";
import Contact from "./sections/contact/Contact";
import FAQs from "./sections/faqs/FAQs";

function App() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Gallery/>
      <FAQs/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;

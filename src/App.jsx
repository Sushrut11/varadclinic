import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import AboutMob from './components/AboutMob';
import Treatments from './components/Treatments';
import Contact from './components/Contact';
import ContactMob from './components/ContactMob';
import Maps from './components/Maps';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero   id="home"      />
        <Treatments id="treatments" />
        <Services />
        <About  id="about"     />
        <AboutMob id="mob_about"/>
        <Contact id="contact"  />
        <ContactMob id="mob_contact"/>
        <Maps />
        <Reviews id="reviews"  />
      </main>
      <Footer />
    </>
  );
}
export default App;

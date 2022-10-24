import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Feature from './components/Feature.jsx';
import Gridgallery from './components/Gridgallery.jsx';
import Promotion from './components/Promotion.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div>
      <div className="Container flex w-full">
        <Header />
        <Hero />
        <Feature />
      </div>
      <Promotion />
      <Gridgallery />
      <Footer />
    </div>
  );
}

export default App;

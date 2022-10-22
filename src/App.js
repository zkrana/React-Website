import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Feature from './components/Feature.jsx';
import Promotion from './components/Promotion.jsx';
import Gridgallery from './components/Gridgallery.jsx';
function App() {
  return (
    <div>
      <div className="Container flex w-full">
        <Header />
        <Hero />
        <Feature />
      </div>
      <Promotion />
      <div className='grid place-items-center min-h-screen'>
        <Gridgallery />
      </div>
    </div>
  );
}

export default App;

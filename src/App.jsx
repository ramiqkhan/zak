import Navbar from './component/navbar';
import Footer from './component/footer';
import ZakHero from './component/sec1';
import ProductShowcase from './component/sec2';
import CategoryCatalog from './component/sec3';
import HeroSection from './component/sec4';
import ZakNews from './component/sec5';

function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      
      {/* Navbar Top */}
      <Navbar />

      {/* Middle Content */}
  
<ZakHero/>
<ProductShowcase/>
<CategoryCatalog/>
<HeroSection/>
<ZakNews/>
      {/* Footer Bottom */}
      <Footer />

    </div>
  );
}

export default App;

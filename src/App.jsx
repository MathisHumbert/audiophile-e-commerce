import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Checkout,
  Earphones,
  Headphones,
  Home,
  Product,
  Speakers,
} from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/earphones' element={<Earphones />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/product/:productName' element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

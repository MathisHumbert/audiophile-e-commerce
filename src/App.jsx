import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Checkout,
  Earphones,
  Headphones,
  Home,
  Product,
  Speakers,
} from './pages';
import { Navbar, Footer, CartAside } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <CartAside />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/earphones' element={<Earphones />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/products/:productName' element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

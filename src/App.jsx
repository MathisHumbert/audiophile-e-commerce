import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Checkout,
  Earphones,
  Headphones,
  Home,
  Product,
  Speakers,
  PrivateRoute,
} from './pages';
import {
  Navbar,
  Footer,
  CartAside,
  MenuAside,
  ScrollToTop,
} from './components';
import CheckoutAside from './pages/Checkout/components/CheckoutAside';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <CartAside />
      <MenuAside />
      <CheckoutAside />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/earphones' element={<Earphones />} />
        <Route path='/checkout' element={<PrivateRoute />}>
          <Route index element={<Checkout />} />
        </Route>
        <Route path='/products/:productName' element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

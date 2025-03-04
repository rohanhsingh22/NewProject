import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
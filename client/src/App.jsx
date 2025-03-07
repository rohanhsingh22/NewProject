import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import PropertyDetail from './pages/PropertyDetail'
import ListOfPropert from './components/ListOfPropert'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/listing" element={<ListOfPropert/>}/>
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
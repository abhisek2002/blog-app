import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import Creators from './pages/Creators';
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
import { useAuth } from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Update from './dashboard/Update';
import Detail from './pages/Detail';
import Cookies from 'js-cookie';
import Notfound from './pages/Notfound';




function App() {

  const location = useLocation();
  const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(
    location.pathname
  );

  const {isAuthenticated,profile} = useAuth();
  console.log(isAuthenticated);
  console.log(profile);

  let token = Cookies.get('token');
  // console.log(token);

  return (
    <div className="">
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route exact path="/" element={token ? <Home /> : <Navigate to={'/login'} />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/creators" element={<Creators />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />

        <Route exact path='/blogs/update/:id' element={<Update />} />
        <Route exact path='/blogs/:id' element={<Detail />} />

        <Route exact path='*' element={<Notfound />} />
      </Routes>
      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App
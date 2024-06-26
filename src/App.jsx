import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
   <Route path='SignIn' element={<SignIn />} />
   <Route path='SignUp' element={<SignUp />} />
   <Route path='/about' element={<About />} />
   <Route path='/profile' element={<Profile/>} />
  </Routes>
  </BrowserRouter>
}

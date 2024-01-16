import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Home, Events, Contact, Feed, Team } from './Pages';
import Department from './Pages/Team/Department';
import BlogPage from './Pages/Blogs';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='team/:department' element={<Department />} />
          <Route path='/blogs' element={<BlogPage />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

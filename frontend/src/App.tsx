import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CreatePoll } from './pages/CreatePoll';
import { Home } from './pages/Home';

function App() {



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/create-poll" element={<CreatePoll />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

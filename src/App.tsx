import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CreateEvent from './pages/CreateEvent';
import EventDetail from './pages/EventDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import MyEvents from './pages/MyEvents';
import Map from './pages/Map';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<Layout><HomePage /></Layout>} />
          <Route path="/create" element={<Layout><CreateEvent /></Layout>} />
          <Route path="/events/:id" element={<Layout><EventDetail /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/signup" element={<Layout><Signup /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/my-events" element={<Layout><MyEvents /></Layout>} />
          <Route path="/map" element={<Layout><Map /></Layout>} />
          <Route path="/not-found" element={<Layout><NotFound /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

import { Router } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

interface RouteI {
    path: string;
    element: React.ReactNode;
    showOnHeader?: boolean;
    showOnFooter?: boolean;
    label?: string | React.ReactNode;
    hideLayout?: boolean;
}

export const routes: RouteI[] = [
    { path: '/', element: <LandingPage /> },
    { path: '/home', element: <Layout><HomePage /></Layout> },
    { path: '/create', element: <Layout><CreateEvent /></Layout> },
    { path: '/events/:id', element: <Layout><EventDetail /></Layout> },
    { path: '/login', element: <Layout><Login /></Layout> },
    { path: '/signup', element: <Layout><Signup /></Layout> },
    { path: '/profile', element: <Layout><Profile /></Layout> },
    { path: '/my-events', element: <Layout><MyEvents /></Layout> },
    { path: '/map', element: <Layout><Map /></Layout> },
    { path: '/not-found', element: <Layout><NotFound /></Layout> },
    { path: '*', element: <Layout><NotFound /></Layout> },
]

export const Router = () => (
    <Routes>
        {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
        ))}
    </Routes>
)
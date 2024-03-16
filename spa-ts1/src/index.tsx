import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Gallery } from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Route, Routes
} from "react-router-dom";
import { Services } from './components/Services';
import { Contact } from './components/Contact';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function AppNav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="gallery">Gallery</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppNav />
    <Routes>
      <Route path='/' Component={App}>
      </Route>
      <Route path='/gallery' Component={Gallery}>
      </Route>
      <Route path='/services' Component={Services}>
      </Route>
      <Route path='/contact' Component={Contact}>
      </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

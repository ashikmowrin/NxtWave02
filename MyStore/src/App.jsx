import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListPage from './components/ProductListPage'; 
import MainPage from './components/MainPage';
import Login from './components/Login';
import Register from './components/Register';
import Sidebar from './components/SideBar';
import ProductsList from './components/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/productlist" element={<ProductListPage />} /> 
        <Route path="/home" element={<MainPage />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/side" element={<Sidebar />} /> 
        <Route path="/plp" element={<ProductsList />} /> 
      </Routes>
    </Router>
  );
}

export default App;

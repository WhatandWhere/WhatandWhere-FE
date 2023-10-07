import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EntryPage from './pages/EntryPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import MainPage from './pages/MainPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

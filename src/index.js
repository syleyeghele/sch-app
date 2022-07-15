import React from 'react';
import ReactDOM from 'react-dom/client';
import Signup from './pages/signup/Signup.js';
import Signin from './pages/login/Login.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from './pages/overview/Overview';
import Teachers from './pages/overview/Teachers';
import Students from './pages/overview/Students';
import Classes from './pages/overview/Classes';
import Notice from './pages/overview/Notice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/overview" element={<Overview />} />
          <Route exact path="/teachers" element={<Teachers />} />
          <Route exact path="/students" element={<Students />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

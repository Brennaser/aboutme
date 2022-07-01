import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ComputerScience } from './Components/routes/ComputerScience';
import { Dance } from './Components/routes/Dance';
import { AlphaOmegaEpsilon } from './Components/routes/AlphaOmegaEpsilon';
import { Hobbies } from './Components/routes/Hobbies';
import { CalenderAndContact } from './Components/routes/CalenderAndContact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/aboutme' element={<App />} />
        <Route path='/Computer-Science' element={<ComputerScience />} />
        <Route path='/Dance' element={<Dance/>} />
        <Route path='/Alpha-Omega-Epsilon' element={<AlphaOmegaEpsilon />} />
        <Route path='/Hobbies' element={<Hobbies />} />
        <Route path='/Calender-and-Contact' element={<CalenderAndContact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

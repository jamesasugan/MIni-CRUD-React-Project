import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Student from './Student.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

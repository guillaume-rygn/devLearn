import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './components/Questions';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Category from './pages/Category';
import './style.scss';

const App = () =>{
  return(
    <BrowserRouter>
      <main>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/:category' element={<Category/>} />
            <Route path='/:category/:questionid' element={<Questions/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));

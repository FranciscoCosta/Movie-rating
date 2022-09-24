import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home'
import MovieDetails from  './components/MovieDetails/MovieDetails'
import NotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetails />}/>
        <Route path='/' element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

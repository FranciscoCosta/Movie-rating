import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.scss';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/MovieApi';
import APIkey from '../../common/apis/MovieApiKey';
import { useEffect } from 'react';
import { useState } from 'react';


const Home = () => {

  useEffect(() => {
    const placeholder = 'Venom';
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${APIkey}&s=${placeholder}&type=movie`
      );
      console.log(response)
    };
  fetchMovies();
  },[]);


  return (
    <div>
      <Header />
      <MovieListing />
      <Footer />
    </div>
  );
};

export default Home;

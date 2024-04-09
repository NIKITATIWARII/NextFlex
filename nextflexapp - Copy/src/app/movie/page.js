'use client'
import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css"
import { useState, useEffect } from 'react';


const Movie = () => {


const titles = [
    {
      "id": 1,
      "type": "Movie",
      "title": "The Shawshank Redemption",
      "synopsis": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "image":"/redemption.jpg"
    },
    {
      "id": 2,
      "type": "Movie",
      "title": "The Godfather",
      "synopsis": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      "image": "/godfather.jpg"
    },
    {
      "id": 3,
      "type": "TV Show",
      "title": "Breaking Bad",
      "synopsis": "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to create and sell the drug.",
      "image": "/breaking.jpg"
    },
    {
      "id": 4,
      "type": "Movie",
      "title": "The Dark Knight",
      "synopsis": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      "image": "/knight.jpg"
    },
    {
      "id": 5,
      "type": "TV Show",
      "title": "Stranger Things",
      "synopsis": "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces to get him back.",
      "image": "/stranger.jpg"
    }]

const url = 'https://netflix54.p.rapidapi.com/search/';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6e88ac5cf7msha60a74c32c75a03p1e18cajsncf9f0ffa0fab',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
  // useEffect(() => {
  //   var result;
  //   fetch(url, options)
  //     .then((data) => {
  //       result = data.text();
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [])

// fetch('https://netflix54.p.rapidapi.com/search/', options)
// .then(res => res.json())
// .then(console.log);



const main_data =  titles;
  return (
      <section className={styles.movieSection} >
          <div className={styles.container} >
              <h1>Series And Movies</h1>
              <div className={styles.card_section}>
                  {
                      main_data.map((curElem) => {
                          return <MovieCard key={curElem.id}{...curElem} />
                      })
                  }
              </div>
          </div>
      </section>
  );
}

export default Movie;

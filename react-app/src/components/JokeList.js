import React, { useEffect, useState } from "react";
import axios from "axios";
import Joke from "./Joke";
import Navigation from './Navigation'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const JokeList = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dadjokes-be.herokuapp.com/api/jokes`)
      .then(response => {
        console.log(response)
        setJokes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <Navigation/>
      {jokes.map(joke => {
        return (
          
          <div key={joke.id}>
            <Joke joke={joke} />
          </div>
        );
      })}
    </>
  );
};

export default JokeList;

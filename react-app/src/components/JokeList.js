import React, { useEffect, useState } from "react";
import axios from "axios";
import Joke from "./Joke";
import Navigation from './Navigation'

const JokeList = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://5d6175f45f6487001406047a.mockapi.io/api/v1/joke`)
      .then(response => {
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

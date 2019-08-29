import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Joke = props => {
  const [upVotes, setUpvotes] = useState(0);
  const [joke, setJoke] = useState(props.joke);
  console.log(props.joke)

  function upVote(e) {
    e.preventDefault();
    
    setUpvotes(upVotes + 1)
          
    }
    
    
  

  function downVote(e) {
    e.preventDefault();
    setUpvotes(upVotes - 1);
  }

  return (
    <Card key={props.key}>
      <Card.Content>
        <Card.Description>
          <p>#{joke.id}</p>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
          <p>
            <span>
              <Icon name="arrow up" onClick={upVote} />
              {upVotes}
            </span>
            <span>
              <Icon name="arrow down" onClick={e => downVote(e)} />
            </span>
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Joke;

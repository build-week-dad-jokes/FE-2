import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Joke = props => {
  const [upVotes, setUpvotes] = useState(0);
  const [joke, setJoke] = useState(props.joke);

  function upVote(e) {
    e.preventDefault();
    setUpvotes(upVotes + 1);
  }

  function downVote(e) {
    e.preventDefault();
    setUpvotes(upVotes - 1);
  }

  return (
    //Semantic UI 'Card' imported as 'Joke'
    <Card key={props.key}>
      <Card.Content>
        <Card.Description>
          <p>#{joke.id}</p>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
          <p>
            <span>
              <Icon name="arrow up" onClick={e => upVote(e)} />
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = props => {
    const id = localStorage.getItem('token')
    const [joke, setJoke] = useState([])

    useEffect(() => {
        axios
        .get(`https://dadjokes-be.herokuapp.com/api/jokes/userid/${id}`)
        .then(res => {
            console.log(res.data)
            setJoke(res.data)
        })
        .catch(error => {
            console.log('error', error)
        })
    }, [id])

    const Edit = joke => {
        localStorage.setItem('token', joke.id)
        props.history.push('./addjoke')
    }

    const Delete = joke => {
        axios
        .delete(`https://dadjokes-be.herokuapp.com/api/jokes/delete/${joke.id}`)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log('error', error)
        })
    }

    return (
        <div>
            {joke.map(joke => (
            <div key={joke.id}>
                <div>{joke.setup}</div>
                <div>{joke.punchline}</div>
                <div>Public: {joke.checkbox_public ? 'true' : 'false'}</div>
                <div>Private: {joke.checkbox_private ? 'true' : 'false'}</div>
                <div>
                    <button onClick={Edit(joke)}>Edit</button>
                    <button onClick={Delete(joke)}>Delete</button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Profile
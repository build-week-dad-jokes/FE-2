import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'

const AddJoke = (props) => {
    const [addJoke, setAddJoke] = useState ({})
    const [setUpValue, setSetupValue] = useState ('')
    const [punchLineValue, setPunchLineValue] = useState('')
    const [placeHolderId, setPlaceHolderId] = useState('')

    const handleChange = e => {
        setAddJoke({
            ...addJoke, [e.target.name] : e.target.value
        })
        if(e.target.name === 'setup') {
            setSetupValue(e.target.value)
        }
        if(e.target.name === 'punchline') {
            setPunchLineValue(e.target.value)
        }
    }

    const SubmitJoke = e => {
        e.preventDefault()
        axios
        .post('https://dadjokes-be.herokuapp.com/api/jokes/addjoke', addJoke)
        .then(res => {           
            
            return axios.get('https://dadjokes-be.herokuapp.com/api/jokes')
            
        })
        .then(res => {
            props.history.push('./jokes')
        })
        .catch(err=> console.log(err.response))
    }

    const Cancel = e => {
        e.preventDefault()
        window.location.href='./jokes'
    }

   

    return (
        <>
        <Navigation/>
        <form onSubmit={SubmitJoke}>
            Setup
            <input
                type='text'
                name='setup'
                value={setUpValue}
                onChange={handleChange}
                />
            Punchline
            <input
                type='text'
                name='punchline'
                value={punchLineValue}
                onChange={handleChange}
                />
            <input type="checkbox" name="public" checked={addJoke.public} onChange={handleChange}/>
            <input type="checkbox" name="private" checked={addJoke.private} onChange={handleChange}/>
            <button onClick={e => Cancel(e)}>CANCEL</button>
            <button type='submit'>SAVE</button>
        </form>
        </>
    )
}

export default AddJoke
import React, {useState} from 'react'
import axios from 'axios'

const AddJoke = (props) => {
    const [addJoke, setAddJoke] = useState ([{
        "downvote": false,
        "private": false,
        "pulic": false,
        "punchline": "",
        "setup": "",
        "upvote": false
    }])

    const handleChange = e => {
        setAddJoke({
            ...addJoke, [e.target.name] : e.target.value
        })
    }

    const SubmitJoke = e => {
        e.preventDefault()
        axios
        .post('https://dadjokes-be.herokuapp.com/api/jokes', addJoke)
        .then(res => {
            props.history.push('/jokes')
            console.log(res)
        })
        .catch(err=> console.log(err.response))
    }

    return (
        <>
        <form onSubmit={SubmitJoke}>
            Setup
            <input
                type='text'
                name='setup'
                value={addJoke.setup}
                onChange={handleChange}
                />
            Punchline
            <input
                type='text'
                name='punchline'
                value={addJoke.punchline}
                onChange={handleChange}
                />
            <input type="checkbox" name="public" checked={addJoke.public} onChange={handleChange}/>
            <input type="checkbox" name="private" checked={addJoke.private} onChange={handleChange}/>
            <button>CANCEL</button>
            <button>SAVE</button>
        </form>
        </>
    )
}

export default AddJoke
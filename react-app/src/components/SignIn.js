import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'

const SignIn = ({errors, touched, values, handleSubmit, status}) => {
    const [user, setUser] = useState({})
    
    useEffect(() => {
        if (status) {
            setUser({...user, status})
        }
    }, [status])

    return (
        <>
        <Form>
        <h1>Welcome Back</h1>
            <Field type='text' placeholder="username" name='username'/>
                {touched.username && errors.username && (
                    <p className="errors">{errors.username}</p>
                )}
            <Field type='password' placeholder="password" name='password'/>
                {touched.password && errors.password && (
                    <p className="errors">{errors.password}</p>
                )}
            <button type="submit">Sign In</button>
            <div>Don't have an account?<Link to ='/'></Link></div>
        </Form>
        </>
    )
}

const FormikSignIn = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('username required'),
        password: Yup.string().required('password required')
    }),

    handleSubmit(values, props) {
        axios
        .post('https://dadjokes-be.herokuapp.com/api/auth/login', values)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push('/protected')
            console.log(res)
            console.log("props", props)
            console.log('token')
        })
        .catch(err => console.log(err.response))
    }
})(SignIn)

export default FormikSignIn
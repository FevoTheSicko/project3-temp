import { useMutation } from "@apollo/client"
import React, { useState } from "react"
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth'
import { useHistory } from "react-router-dom"


export default function Login() {
    const [currentState, setState] = useState({ username: '', password: '' })
    const history = useHistory()

    const [login, { error }] = useMutation(LOGIN)

    const changeHandler = (event) => {
        const { name, value } = event.target
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const { data } = await login({
                variables: { ...currentState }
            })
            Auth.login(data.login.token)
            console.log("success")
            history.push('/feed')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='bg-green-300 p-8 text-4xl rounded-xl'>
            <h2 className='text-3xl font-bold mb-8'>Login</h2>
            <form onSubmit={handleSubmit} className='space-y-4 '>
                <div className='space-y-4 flex flex-col'>
                    <label for='username'><b>username</b></label>
                    <input

                        value={currentState.username}
                        type='username'
                        placeholder='Enter Username'
                        name='username'
                        onChange={changeHandler}
                    />
                </div>
                <div className='space-y-4 flex flex-col'>
                    <label for='password'><b>password</b></label>
                    <input

                        value={currentState.password}
                        type='password'
                        placeholder='Enter Password'
                        name='password'
                        onChange={changeHandler}
                    />
                </div>
                <button className='p-2 m-2 bg-black text-white rounded-xl' type='submit'>Login</button>
            </form>
        </div>
    )
}
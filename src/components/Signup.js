import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { SIGNUP } from '../utils/mutations'
export default function Signup() {
    const [currentState, setState] = useState({ username: '', email: '', password: '' })
    const [signup, { error }] = useMutation(SIGNUP)
    const ChangeHandler = (event) => {

        const { name, value } = event.target
        setState({
            ...currentState,
            [name]: value
        })
    }

    const handlesubmit = async (event) => {
        event.preventDefault()
        console.log(currentState)

        try {
            const { data } = await signup({
                variables: { ...currentState }
            })
        } catch (error) {
            console.log(error)
        }

        setState({
            username: '',
            email: '',
            password: ''
        })
    }


    return (
        <div className=' bg-green-300 p-8 text-4xl rounded-xl'>
            <h2 className='text-3xl font-bold mb-8'>Signup</h2>

            <form onSubmit={handlesubmit} className='space-y-4 ' >
                <div className='space-y-4 flex flex-col'>
                    <label className='' for='username'><b>username</b></label>
                    <input onChange={ChangeHandler} type='username' placeholder='Enter Username' name='username' />
                </div>
                <div className='  space-y-4 flex flex-col'>
                    <label for='email'><b>email</b></label>
                    <input onChange={ChangeHandler} type='email' placeholder='Enter Email' name='email' />
                </div>
                <div className=' space-y-4 flex flex-col'>
                    <label for='password'><b>password</b></label>
                    <input onChange={ChangeHandler} type='password' placeholder='Enter Password' name='password' />
                </div>

            </form>
            <button className='p-2 m-2 bg-black text-white rounded-xl' type='submit'>Signup</button>

        </div>
    )
}
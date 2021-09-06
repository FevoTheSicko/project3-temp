import React, { useCallback, useState } from 'react'
import '../index.css'
import Card from './Card'
import auth from '../utils/auth'
import { Redirect } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { uploadFileMutation } from '../utils/mutations'
import { useDropzone } from 'react-dropzone'
import { selectionSetMatchesResult } from '@apollo/client/cache/inmemory/helpers'
import { ADDPRODUCT } from '../utils/mutations'
export default function Dashboard() {
    const [currentState, setState] = useState({ title: '', price: '', imgUrl: '', category: '' })
    // const [currentState, setState] = useState({})
    const [addProduct, { error }] = useMutation(ADDPRODUCT)
    // console.log(auth.getProfile().data)
    const username = auth.getProfile().data.username




    const ChangeHandler = (event) => {
        const { name, value } = event.target
        setState({
            ...currentState,
            [name]: value,
        })
    }
    const handlesubmit = async (event) => {
        event.preventDefault()
        try {
            const { data } = await addProduct({
                variables: { ...currentState }
            })
        } catch (error) {
            console.log(error)
        }
        setState({
            title: '', price: '', imgUrl: '', category: ''
        })
        return <Redirect to="/feed" />
    }

    return (
        //get product query here

        <div className='  bg-green-300  p-8 rounded-xl space-y-4 '>
            <h2>Welcome {username}</h2>

            <h3>create post</h3>
            <form onSubmit={handlesubmit} className='space-y-4'>
                <div className='relative left-7'>
                    <label>Title</label>
                    <input
                        type='text'
                        placeholder='Enter title'
                        name='title'
                        onChange={ChangeHandler}
                    ></input>
                </div>
                <div className='relative left-6'>
                    <label>Price</label>
                    <input
                        type='text'
                        placeholder='Enter price'
                        name='price'
                        onChange={ChangeHandler}
                    ></input>
                </div>
                <div className='relative left-3'>
                    <label>ImgUrl</label>
                    <input
                        type='text'
                        placeholder='Enter ImgUrl'
                        name='imgUrl'
                        onChange={ChangeHandler}
                    ></input>
                </div>
                <div>
                    <label>category</label>
                    <input
                        type='text'
                        placeholder='Enter Category'
                        name='Category'
                        onChange={ChangeHandler}
                    ></input>
                </div>
                <button className='bg-black text-white py-1 px-4 rounded-xl' type='submit'>Submit</button>
            </form>

        </div >
    )
}


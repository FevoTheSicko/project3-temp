import React from 'react'
import '../index.css'
import Card from './Card'
import auth from '../utils/auth'
import { useMutation, useQuery } from '@apollo/client'
import { GETPRODUCT } from '../utils/queries'
import { Redirect } from 'react-router-dom'


export default function Feed() {
    console.log('feed invoked')
    const { loading, data } = useQuery(GETPRODUCT)
    console.log(data)
    const products = data?.Products || []






    return (

        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Card
                    Products={products}

                />
            )}
        </div >
    )
}








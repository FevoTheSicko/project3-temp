import React from 'react'
import '../index.css'

export default function Card({ Products = [] }) {
    console.log(Products)
    return (
        <div className='w-36 bg-white m-4 inline-block bg-green-300 rounded-xl p-4'>


            <section  >
                {Products &&
                    Products.map((product) => (
                        <div>
                            <h1>{product.title}</h1>
                            <h2> {product.price} </h2>
                            <h2>{product.category}</h2>
                            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bigw.com.au%2Fmedias%2Fsys_master%2Fimages%2Fimages%2Fh82%2Fh02%2F14106587955230.jpg&imgrefurl=https%3A%2F%2Fwww.bigw.com.au%2Fproduct%2Fnintendo-switch-console-neon%2Fp%2F60525%2F&tbnid=5ngLBGEbGt2XuM&vet=12ahUKEwjr9_H2uqPyAhVDMHIKHdR4DrUQMygAegUIARC5Ag..i&docid=gh3A7VWtHE0KEM&w=1200&h=1200&q=switch&ved=2ahUKEwjr9_H2uqPyAhVDMHIKHdR4DrUQMygAegUIARC5Ag" />
                        </div>
                    ))}


            </section>
        </div>
    )
}
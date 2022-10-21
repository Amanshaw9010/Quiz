import React from 'react'
import Category from './Category'
import '../CSS/second.css'

const Ecommerce = (props) => {

    const data1 = [
        {
            "name": "Cosmetics",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }
            ]
        },
        {
            "name": "Household",
            "productList": [
                {
                    "name": "Chair",
                    "price": 122
                },
                {
                    "name": "Sofa",
                    "price": 123
                }
            ]
        }
    ]





    return (

        <div className='backdrop'>
            {data1.map((p, CategoryIndex) => {
                return (
                    <>
                        <div key={p}></div>
                        <h1>{p.name}</h1>


                        <div className='product'>
                            {p.productList.map((productEl, itemIndex) => {
                                return (
                                    <>
                                        <div className="item">
                                            <div key={productEl}></div>
                                            <b>Name: {productEl.name}</b>
                                            <b>Price: {productEl.price}</b>

                                            <div className="productBtn">
                                                <button>Add To Cart</button>
                                                <button>  Remove To Cart</button>
                                            </div>
                                        </div>
                                    </>

                                )
                            })}
                        </div>

                    </>
                )
            })}

        </div>

    )
}

export default Ecommerce

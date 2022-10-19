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
        <>
            <div className='backdrop_e'>


                <div className='main_e'>

                    <Category dataMain={data1} index="0" />
 
                     
                    <Category dataMain={data1} index="1" />

                    

                </div>

            </div>

        </>
    )
}

export default Ecommerce

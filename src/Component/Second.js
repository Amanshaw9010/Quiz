import React, { useState } from 'react'
import Category from './Category'
import '../CSS/second.css'
import Navbar from './Navbar'
import Card from './Card'

const Second = (props) => {
    console.log(props);

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

    const [Cart, setCart] = useState([]);

    function AddtoCart(CategoryIndex, itemIndex) {
        const productName = data1[CategoryIndex].productList[itemIndex].name;
        // console.log(productName);
        const productPrice = data1[CategoryIndex].productList[itemIndex].price;
        // console.log(productPrice);

        const arr = { "Name": productName, "Price": productPrice };

        setCart([...Cart, arr]);

        console.log("Product add to cart");
    }
    console.log(Cart);




    function removeToCart(CategoryIndex, itemIndex) {
        const productName = data1[CategoryIndex].productList[itemIndex].name;
        // console.log(productName);
        const productPrice = data1[CategoryIndex].productList[itemIndex].price;
        // console.log(productPrice);
        const arr = { "Name": productName, "Price": productPrice };

        for (let i = 0; i < Cart.length; i++) {
            if (Cart[i].Name === arr.Name) {
                if (i > -1) {
                    Cart.splice(i, 1)
                }
            }
        }
        console.log(Cart);
    }





    return (

        <>

            <div className='backdrop'>
                {data1.map((p, CategoryIndex) => {
                    return (
                        <>
                            <div key={p}>
                                <Card Category={p.name} />
                                {/* <h1>{p.name}</h1> */}
                            </div>

                            <div className='product'>
                                {p.productList.map((productEl, itemIndex) => {
                                    return (
                                        <>
                                            <div className="item">
                                                <div key={productEl}></div>
                                                <b>Name: {productEl.name}</b>
                                                <b>Price: {productEl.price}</b>

                                                <div className="productBtn">
                                                    <button onClick={() => { AddtoCart(CategoryIndex, itemIndex); props.addToCartHandler({ Name: productEl.name, Price: productEl.price }) }} >Add To Cart</button>


                                                    <button onClick={() => removeToCart(CategoryIndex, itemIndex)} >Remove To Cart</button>
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

        </>)
}

export default Second

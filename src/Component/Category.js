import React from 'react'
import '../CSS/category.css'

const Category = (props) => {

  let indexval = props.index;
  let category = props.dataMain[indexval].name

  // let product = props.dataMain[0].productList[0];
  // console.log(product);

  // let product2 = props.dataMain[1].productList[1];
  // console.log(product2);


  return (
    <>
      <h1 className='category'><b> {category}</b> </h1>
      <div className="category_main">

        <div className="product_one">
          <div className="item1">
            <h2>{props.dataMain[0].productList[0].name}</h2>
            <h3>{props.dataMain[0].productList[0].price}</h3>


            <div className="product_btns">
              <button className='procduct_btn'>Add to Cart</button>
              <button className='procduct_btn'>Remove to Cart</button>
            </div>

          </div>

          <div className="item2">
            <h2>{props.dataMain[0].productList[1].name}</h2>
            <h3>{props.dataMain[0].productList[1].price}</h3>


            <div className="product_btns">
              <button className='procduct_btn'>Add to Cart</button>
              <button className='procduct_btn'>Remove to Cart</button>
            </div>
          </div>

        </div>
      </div>

      <div className="product_two">
        <div className="item1">
          <h2>{props.dataMain[1].productList[0].name}</h2>
          <h3>{props.dataMain[1].productList[0].price}</h3>


          <div className="product_btns">
            <button className='procduct_btn'>Add to Cart</button>
            <button className='procduct_btn'>Remove to Cart</button>
          </div>
        </div>

        <div className="item2">
          <h2>{props.dataMain[1].productList[1].name}</h2>
          <h3>{props.dataMain[1].productList[1].price}</h3>


          <div className="product_btns">
            <button className='procduct_btn'>Add to Cart</button>
            <button className='procduct_btn'>Remove to Cart</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Category

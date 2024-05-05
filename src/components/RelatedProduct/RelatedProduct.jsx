import React from 'react'
import './RelatedProduct.css'
import data_product from '../assets/data'
import Item from '../Item/Item'

export const RelatedProduct = () => {
  return (
    <div className='relatedproducts' data-aos="fade-up" data-aos-duration="1200">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item key={i} if={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
            })}
        </div>
    </div>
  )
}

export default RelatedProduct
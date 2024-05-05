import React from 'react'
import './NewCollections.css'
import new_collections from '../assets/new_collections'
import Item from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className='new-collections' data-aos="fade-up" data-aos-duration="1200">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {new_collections.map((item,i)=>{
                return <Item key={i} if={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
            })}
        </div>
    </div>
  )
}

export default NewCollections
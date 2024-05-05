import React, { useContext } from 'react'
import './CartItemsAdmin.css'
import { ShopContext } from '../../Content/ShopContext'


export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems} = useContext(ShopContext);
    
  return (
    <div className='cartitems' data-aos="fade-up" data-aos-duration="1200">
        <div className="cartitems-format-main">
            <p className='cartitems-p'>Products</p>
            <p className='cartitems-p'>Title</p>
            <p className='cartitems-p'>Price</p>
            <p className='cartitems-p'>Quantity</p>
            <p className='cartitems-p'>Total</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                            <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p className='new_prices'>${e.new_price*cartItems[e.id]}</p>
                            </div>
                         <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED</button>
            </div>
        </div>
    </div>
  )
}


 export default CartItems
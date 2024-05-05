import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Content/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    //   whatsapp
    const sendMessageToWhatsApp = () => {
        const phoneNumber = '6281219538787'; 
        const messageHeader = 'Saya ingin memesan barang dari toko Anda. Berikut detail pesanan:';
        const orderDetails = all_product
          .filter(product => cartItems[product.id] > 0)
          .map(product => `Nama: ${product.name}, Jumlah: ${cartItems[product.id]}, Kategori: ${product.category}`)
          .join('\n'); 
    
        const message = `${messageHeader}\n${orderDetails}\nTotal: $${getTotalCartAmount()}`; 
        const url = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
    
        window.open(url, '_blank');
      };
  return (
    <div className='cartitems' data-aos="fade-up" data-aos-duration="1200">
        <div className="cartitems-format-main">
            <p className='cartitems-p'>Products</p>
            <p className='cartitems-p'>Title</p>
            <p className='cartitems-p'>Price</p>
            <p className='cartitems-p'>Quantity</p>
            <p className='cartitems-p'>Total</p>
            <p className='cartitems-p'>Remove</p>
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
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
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
                <button onClick={sendMessageToWhatsApp}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}


 export default CartItems
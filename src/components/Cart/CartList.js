import React from 'react'
import CartItem from './CartItem'


export default function CartList({value}) {
    
    const {cart}=value
    console.log(cart,value)
    return(
           <div className="container-fluid">
            {cart.map(item=>{

                return <CartItem key={item.id} value={value} item={item}/>

            })}
           
        </div>
    );
}

import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    const imgCarrito = "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Imagen de un carrito de compras" />
        <strong> 3 </strong>
    </div>
  )
}

export default CartWidget
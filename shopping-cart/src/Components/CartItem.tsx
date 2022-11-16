import React, { FC } from 'react'

interface ItemProps{
    id: number;
    quantity: number;
    color: string;
    price: number;
    image: string;
}

const CartItem: FC<ItemProps> = ({id, quantity, color, price, image}) => {
  return (
    <div className='cart-item'>
        <img src={image} alt={color + "brick"} />
        <div className='cart-item-info'>
            <h2>{color} Brick</h2>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price * quantity}</p>
        </div>
    </div>
  )
}

export default CartItem
import React, { FC } from 'react'

interface CartTotalProps {
    price: number,
}

const CartTotalPrice: FC<CartTotalProps> = ({price}) => {
  return (
    <div className='cart-item total'>
        <h2>Total Price:</h2> <p>${price}</p>
    </div>
  )
}

export default CartTotalPrice
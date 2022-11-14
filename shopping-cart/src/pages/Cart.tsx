import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useAppSelector } from '../redux/hooks'

function Cart() {
    const cart = useAppSelector((state) => state.cart.cart)

    useEffect(() => {
        console.log(cart)
    })
  return (
    <>
        <Navbar />
    </>
  )
}

export default Cart
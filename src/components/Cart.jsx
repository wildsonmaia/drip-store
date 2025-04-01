import React, { useState } from 'react'
import products from "../products.json"

const Cart = () => {

    const [ quantity, setQuantity ] = useState(0)

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const decrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 0))
  }

  return (
    <div className='flex justify-content-center'>
        <div className='w-screen p-0 flex justify-content-between mx-3'>
            <div className='w-6 flex gap-3'>
              <img src={products[0].image} style={{ width: "25%", height: "85%", borderRadius: "4px" }} alt="img" />
              <div>
                <h2 className='flex-wrap'>Tênis Nike Revolution</h2>
                <p>Cor: </p>
                <p>Tamanho: </p>
              </div>
            </div>
            
            <div className='w-6 flex justify-content-around'>
              <div className='mt-3 w-4'>
                  <div className='flex justify-content-center align-items-center'>
                      <button onClick={decrement} style={{ padding: "5px 10px", margin: "0 5px", backgroundColor: "transparent", border: "1px solid" }}>-</button>
                      <span style={{ padding: "5px 10px", margin: "0 5px" }}>{quantity}</span>
                      <button onClick={increment} style={{ padding: "5px 10px", margin: "0 5px", backgroundColor: "transparent", border: "1px solid" }}>+</button>
                  </div>
                  <div className='mt-2 flex justify-content-center align-items-center'><button onClick="" style={{ padding: "5px 10px", margin: "0 5px", backgroundColor: "transparent", border: 'none' }}><u>Remover item</u></button></div>
              </div>
              <div className='w-4 text-center'>
                <h2><s>R$ 199,99</s></h2>
                <h2>R$ 199,99</h2>
              </div>
              <div className='w-4 text-center'>
                <h2><s>R$ 199,99</s></h2>
                <h2>R$ 199,99</h2>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default Cart
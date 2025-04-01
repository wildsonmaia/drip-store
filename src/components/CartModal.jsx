import React, { useState } from 'react'

const CartModal = ( {orders} ) => {

    return (
        <div className='my-4 flex justify-content-center'>
            <div className='w-full mx-4'>
                <div>Meu carrinho</div>
                <hr />
                {(orders === "" || orders === "0") ? <div className='my-3 flex justify-content-center text-pink-500'>Carrinho vazio</div> : <div>
                    <div className='my-3 flex justify-content-between gap-3'>
                        <div className='w-4'><img src="/images/produc-image-1.jpeg" alt="teste" style={{ width: "90px" }} /></div>
                        <div className='w-8'>
                            <p className='mt-0'>Tênis Nike Revolution 6 Next Nature</p>
                            <p className='mt-0'>Masculino</p>
                            <div className='flex justify-content-between mt-0'>
                                <p>R$ 219,90</p>
                                <p><s>R$ 219,90</s></p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='my-3'>
                        <div className='flex justify-content-between'>
                            <div><b>Valor total: </b></div>
                            <div style={{ color: "#C92071" }}><b>R$ 219,00</b></div>
                        </div>
                        <div className='flex justify-content-between mt-3'>
                            <button style={{ backgroundColor: "transparent", border: "none", borderBottom: "1px solid", padding: "0" }}>Esvaziar</button>
                            <button className='py-2 px-4' style={{ backgroundColor: "#C92071", color: "#ffffff", borderRadius: "4px", border: 'none' }}>Ver carrinho</button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>

    )
}

export default CartModal
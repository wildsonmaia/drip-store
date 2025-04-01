import React from 'react'
import Section from "../components/Section";
import products from "../products.json"
import ProductListing from '../components/ProductListing';
import Cart from '../components/Cart';
import ShopList from '../components/ShopList';

const OrdersPage = () => {

  return (
    <div className='w-full' style={{ backgroundColor: "#f5f5f5" }}>
      <div className='m-5 flex justify-content-between gap-3'>
        <div className='w-9' style={{ backgroundColor: "#ffffff", borderRadius: "4px" }}>

          <div className='flex justify-content-center'>
            <ul className='w-screen p-0 flex justify-content-between mx-3 list-none'>
                <li className='w-6'><b>MEU CARRINHO</b></li>
                <div className='w-6 flex justify-content-around'>
                  <li className='w-4 text-center'>Quantidade</li>
                  <li className='w-4 text-center'>Unitário</li>
                  <li className='w-4 text-center'>Total</li>
                </div>
            </ul>
          </div>

          <hr className='mx-3' />

          <Cart />

          <hr className='mx-3'/>

          <div className='my-3 flex justify-content-center'>
            <div className='w-screen mx-3 flex justify-content-between gap-4'>
              <div className='w-6'>
                <label htmlFor="code">Cupom de desconto</label>
                <div className='mt-2 flex justify-content-between gap-2' style={{ height: "60px", borderRadius: '8px' }}>
                  <input className='w-9 border-none pl-3' id='code' placeholder='Insira seu código' style={{ borderRadius: '8px', backgroundColor: "#f5f5f5" }}></input>
                  <button className='w-3 border-none' style={{ color: "#c92071", borderRadius: '8px', backgroundColor: "#f5f5f5" }}><b>OK</b></button>
                </div>
              </div>
              <div className='w-6'>
                <label htmlFor="cep">Calcular frete</label>
                <div className='mt-2 flex justify-content-between gap-2' style={{ height: "60px", borderRadius: '8px' }}>
                  <input className='w-9 border-none pl-3' id='cep' placeholder='Insira seu CEP' style={{ borderRadius: '8px', backgroundColor: "#f5f5f5" }}></input>
                  <button className='w-3 border-none' style={{ color: "#c92071", borderRadius: '8px', backgroundColor: "#f5f5f5" }}><b>OK</b></button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='w-3 h-full flex justify-content-center align-items-center' style={{ backgroundColor: "#ffffff", borderRadius: "4px" }}>
          <ShopList buttonTitle="Continuar" className="w-11" />
        </div>
      </div>
      <Section title="Produtos relacionados" className="mx-5 mt-6">
        <ProductListing products={products} />
      </Section>
    </div>
  )
}

export default OrdersPage
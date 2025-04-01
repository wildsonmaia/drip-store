import React, { useEffect } from 'react'

const ShopList = ({ buttonTitle, className }) => {

  return (
    <div className={`${className} mx-3 my-2 h-full`} style={{ backgroundColor: "#ffffff" }}>
            <p><b>RESUMO</b></p>
            <hr />
            <div>
              <div className='my-3 flex justify-content-between'>
                <div>Subtotal: </div>
                <div>R$ 219,99</div>
              </div>
              
              <div className='my-3 flex justify-content-between'>
                <div>Frete: </div>
                <div>R$ 0,00</div>
              </div>

              <div className='my-3 flex justify-content-between'>
                <div>Desconto: </div>
                <div>R$ 30,00</div>
              </div>
              
              <div className='p-3' style={{ backgroundColor: "#fffaf4" }}>
                  <div className='my-0 flex justify-content-between'>
                    <div>Total: </div>
                    <div style={{ color: "#c92071" }}>R$ 219,00</div>
                  </div>
                  <div className='text-right'>ou 10x de R$ 21,00 sem juros</div>
              </div>
            </div>
            
            <button className='w-full my-2' style={{ backgroundColor: "#f7a11c", color: "#ffffff", borderRadius: "8px", height: "6vh", border: "none" }}>{buttonTitle}</button>
          </div>
  )
}

export default ShopList
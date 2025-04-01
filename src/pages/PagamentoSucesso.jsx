import React from 'react'

const PagamentoSucesso = () =>  {
  return (
    <div className='w-full flex justify-content-center p-4' style={{ backgroundColor: "#f5f5f5" }}>
        <div className='w-7 flex flex-column gap-3'>
            <div className='p-4' style={{ backgroundColor: "#ffffff" }}>
                <div>
                    <img src="" alt="" />
                    <h1 className='flex justify-content-center'>Compra Realizada <br />com Sucesso</h1>
                </div>
                <hr />
                <div className='flex flex-column'>
                    <h3>Informações Pessoais</h3>
                    <div>
                        <div>Nome: Ana Paula Araújo</div>
                    </div>
                    <div>
                        <div>CPF: 003.436.520-21</div>
                    </div>
                    <div>
                        <div>E-mail: </div>
                    </div>
                    <div>
                        <div>Celular: </div>
                    </div>
                </div>
                <hr />
                <div className='flex flex-column'>
                    <h3>Informações de Entrega</h3>
                    <div>
                        <div>Endereço: </div>
                    </div>
                    <div>
                        <div>Bairro: </div>
                    </div>
                    <div>
                        <div>Cidade: </div>
                    </div>
                    <div>
                        <div>CEP: </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h3>Informações de Pagamento</h3>
                    <div>
                        <div>Titular do Cartão: </div>
                    </div>
                    <div>
                        <div>Final: </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h3>Resumo da Compra</h3>
                    <div className='flex gap-3'>
                        <img className='w-2' src="" alt="foto-produto" />
                        <div className='w-10'>
                            <p>Nome do produto</p>
                            <p>Categoria do produto</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='p-3 mb-2' style={{ backgroundColor: "#fff2f5" }}>
                    <div className='flex justify-content-between'>
                        <div>Total</div>
                        <div>R$ 219,90</div>
                    </div>
                    <p className='my-0 text-right'>ou 10x de R$ 21,90 s/ juros</p>
                </div>
                <div className='text-center'><a href="">Imprimir Recibo</a></div>
            </div>
            <div className='text-center mb-4'><button className='w-11 p-2' style={{ backgroundColor: "#f7aa1c", border: "none", borderRadius: "4px", color: "#ffffff" }}>Voltar para Home</button></div>
        </div>
    </div>
  )
}

export default PagamentoSucesso
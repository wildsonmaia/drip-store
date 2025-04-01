import React from 'react'
import ShopList from '../components/ShopList'

const PaymentPage = () => {
  return (
    <div className='w-full' style={{ backgroundColor: "#f5f5f5" }}>
        <div className='mx-6'>
            <h1 className='mt-6'><b>Finalizar Compra</b></h1>
            <div className='flex justify-content-between gap-3 mt-2'>
                <div className='w-8'>
                    <form id='form-pessoal' className='my-3'  style={{ backgroundColor: "#ffffff" }}>
                        <div className='mx-3 py-3'>
                            <div>Informações pessoais</div>
                            <hr />
                            <div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="name">Nome Completo *</label>
                                    <input className='p-2' id='name' type="text" placeholder='Insira seu nome' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="cpf">CPF *</label>
                                    <input className='p-2' id='cpf' type="number" placeholder='Insira seu CPF' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="email">E-mail *</label>
                                    <input className='p-2' id='email' type="text" placeholder='Insira seu e-mail' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="number">Celular *</label>
                                    <input className='p-2' id='number' type="number" placeholder='Insira seu celular' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                            </div>
                        </div>
                    </form>

                    <form id='form-entrega' className='my-3'  style={{ backgroundColor: "#ffffff" }}>
                        <div className='mx-3 py-3'>
                            <div>Informações de Entrega</div>
                            <hr />
                            <div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="endereco">Endereço *</label>
                                    <input className='p-2' id='endereco' type="text" placeholder='Insira seu endereço' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="bairro">Bairro *</label>
                                    <input className='p-2' id='bairro' type="text" placeholder='Insira seu bairro' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="cidade">Cidade *</label>
                                    <input className='p-2' id='cidade' type="text" placeholder='Insira sua cidade' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="cep">CEP *</label>
                                    <input className='p-2' id='cep' type="number" placeholder='Insira seu CEP' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="complemento">Complemento</label>
                                    <input className='p-2' id='complemento' type="text" placeholder='Insira complemento' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                            </div>
                        </div>
                    </form>

                    <form id='form-pagamento' className='my-3'  style={{ backgroundColor: "#ffffff" }}>
                        <div className='mx-3 py-3'>
                            <div>Informações de Pagamento</div>
                            <hr />
                            <div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="name">Forma de Pagamento</label>
                                      <div className='flex gap-5 mt-2'>
                                        <div>
                                            <input type="radio" name="pagamento" id="credit-card" checked />
                                            <label className='mb-1' htmlFor="credit-card">Cartão de Crédito</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="pagamento" id="bank-slip" />
                                            <label className='mb-1' htmlFor="bank-slip">Boleto Bancário</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="cartao">Nome do Cartão *</label>
                                    <input className='p-2' id='cartao' type="text" placeholder='Insira o nome do Cartão' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                                <div className='flex justify-content-between gap-3'>
                                    <div className='w-6 flex flex-column mt-3'>
                                        <label className='mb-1' htmlFor="card-number">Número do Cartão *</label>
                                        <input className='p-2' id='card-number' type="number" placeholder='Insira o número do cartão' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                    </div>
                                    <div className='w-6 flex flex-column mt-3'>
                                        <label className='mb-1' htmlFor="validade">Data de validade do Cartão *</label>
                                        <input className='p-2' id='validade' type="number" placeholder='Insira a validade do cartão' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                    </div>
                                </div>
                                <div className='w-6 flex flex-column mt-3'>
                                    <label className='mb-1' htmlFor="cvv">CVV *</label>
                                    <input className='p-2 mr-2' id='cvv' type="number" placeholder='CVV *' style={{ borderRadius: "8px", border: "none", backgroundColor: "#f5f5f5" }} />
                                </div>
                            </div>
                        </div>
                    </form>

                    <form id='form-finalizar-compra' className='my-3'  style={{ backgroundColor: "#ffffff" }}>
                        <div className='mx-3 py-3'>
                            <div>Finalizar Compra</div>
                            <hr />
                            <div>
                                <div className='flex justify-content-between mt-3'>
                                    <div><b>Total</b></div>
                                    <div style={{ color: "#C92071" }}><b>R$ 219,00</b></div>
                                </div>
                                <div className='text-right'>ou 10x de R$ 21,00 sem juros</div>
                                <button className='my-2 py-3 px-2 w-full' style={{ backgroundColor: "#f7aa1c", color: "#ffffff", border: "none", borderRadius: "8px" }}>Realizar Pagamento</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
                <ShopList buttonTitle="Realizar Pagamento" className='w-4 px-3 my-2 pb-2' />
            </div>
        </div>
    </div>
  )
}

export default PaymentPage
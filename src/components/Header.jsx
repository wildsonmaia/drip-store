import 'primeicons/primeicons.css';
import "primeflex/primeflex.css"
import "primeflex/themes/primeone-light.css"

import { InputText } from 'primereact/inputtext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import CartModal from './CartModal';
import minicart from "../assets/mini-cart.svg"


const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const nomeRef = useRef(null)

    const mostrarNome = () => {
        nomeRef.current.value
    }

    const handleSearch = () => {
        const query = nomeRef.current.value;
        console.log(query); // Imprime o valor do input no console
        navigate(`/produtos?filter=${query}`);
    }
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    const orders = "10"

    const [ miniCart, setMiniCart ] = useState('hidden')

    const mostrarCarrinho = () => {
        if(miniCart === 'hidden'){
            setMiniCart('')
        }else{
            setMiniCart('hidden')
        }
    }

    useEffect(() => {
        setMiniCart('hidden')
    }, [location])
   
    return (
        <div className='flex-column'>            
            <div className='w-375px h-5rem flex justify-content-around align-items-center relative'>
                <Logo />
                {location.pathname !== '/login' || location.pathname !== '/login' && 
                    <>
                    <div className='px-3 flex border-round-md' style={{ backgroundColor: "#f8f8f8", height:"44px", width: "300px" }}>
                    <InputText ref={nomeRef} placeholder='Pesquisar produto...' className='border-none' style={{
                        backgroundColor: "#f8f8f8", height: "44px", width: "300px", outline: "none",
                        shadow: "none", color: "#474747"
                    }} onChange={mostrarNome} onKeyDown={handleKeyDown} />
                    <button className='border-none pi pi-search' 
                    onClick={handleSearch}  style={{ backgroundColor: "#f8f8f8",color:'#8F8F8F' }}></button>
                </div>
                <button className='border-none' style={{ color: "#474747", fontSize: "16px", backgroundColor: "transparent" }} onClick={() => navigate('/signup')}>Cadastre-se</button>
                <button style={{ backgroundColor: "#C92071", width: "114px", height: "40px", borderRadius: "4px", color: "white", fontStyle: "bold", fontSize: "14px" }} className='border-none' onClick={() =>{navigate('/login')}} >
                    Entrar
                </button>
                <button className='bg-white border-none relative p-1' onClick={() => {mostrarCarrinho()}}>
                    <img src={minicart} ></img>
                    
                    {orders != "" && <div className='absolute top-0 right-0 flex justify-content-center align-items-center' style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "#C92071", color: "white", fontSize: "8px" }} >
                        <p>{orders}</p>
                    </div> }                                     
                </button>
                <div className={`${miniCart} absolute w-3 shadow-8`} style={{ backgroundColor: "#ffffff", right: "65px", top: "60px", zIndex: 1000 }}>
                        {<CartModal orders={orders} />}
                </div></>}                
            </div>
            {location.pathname !== '/login' || location.pathname !== '/login' && 
            <div>
                <Navbar />
            </div>}
        </div>
    );
}

export default Header;
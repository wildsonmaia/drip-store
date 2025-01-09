import 'primeicons/primeicons.css';
import "primeflex/primeflex.css"
import "primeflex/themes/primeone-light.css"

import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import minicart from "../assets/mini-cart.svg"



const Header = () => {
    const navigate = useNavigate()
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
   
    return (
        <div className='flex-column'>            
            <div className='w-375px h-5rem flex justify-content-around align-items-center'>
                <Logo />
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
                <button className='bg-white border-none'>
                    <img src={minicart} ></img>
                </button>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
}

export default Header;
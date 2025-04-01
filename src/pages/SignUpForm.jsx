import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gmail from "../assets/gmail.png";
import facebook from "../assets/facebook.png";

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [cpf, setCPF] = useState('');
    const [date, setDate] = useState('');
    const [cep, setCEP] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div style={{ backgroundColor: "#babbf2" }} className="w-full flex justify-content-center align-items-center">
            <div className="w-3 flex-column text-center justify-content-center my-6 p-3" style={{ backgroundColor: "#ffffff", borderRadius: '4px' }}>
                <div>
                    <h1 className="text-left">Criar conta</h1>
                    <p className="text-left">Já possui uma conta? Então, entre <a style={{ color: "#000000" }} href="/login">aqui</a>.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <h4 className="text-left">Informações Pessoais</h4>
                    <hr />
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="name">Nome completo *</label>
                        <input className="p-3 border-none" style={{ backgroundColor: "#f9f8fe" }} type="text" id="name" placeholder="Insira seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="cpf">CPF *</label>
                        <input className="p-3 border-none" style={{ backgroundColor: "#f9f8fe" }} type="text" id="cpf" placeholder="Insira seu CPF" value={cpf} onChange={(e) => setCPF(e.target.value)} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="email">E-mail *</label>
                        <input className="p-3 border-none" style={{ backgroundColor: "#f9f8fe" }} type="email" id="email" placeholder="Insira seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="number">Celular *</label>
                        <input className="p-3 border-none" style={{ backgroundColor: "#f9f8fe" }} type="text" id="number" placeholder="Insira seu número" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>

                    <h4 className="text-left">Informações de Entrega</h4>
                    <hr />
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="date">Data de Nascimento *</label>
                        <input className="p-3 border-none" style={{ backgroundColor: "#f9f8fe" }} type="date" id="date" placeholder="Insira sua data de nascimento" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="cep">CEP *</label>
                        <input className="p-3 border-none" style={{ backgroundColor: "#f9f8fe" }} type="text" id="cep" placeholder="Insira seu CEP" value={cep} onChange={(e) => setCEP(e.target.value)} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="password">Senha *</label>
                        <input className="p-3 border-none" style={{ backgroundColor: "#f9f8fe" }} type="password" id="password" placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="w-full border-none p-2" style={{ backgroundColor: "#C92071", borderRadius: "4px", color: "#ffffff" }} type="submit">Criar Conta</button>
                </form>
                <div className="flex justify-content-center align-items-center gap-2 mt-3">
                    <p>Ou faça login com </p>
                    <img style={{ width: "24px", height: "24px" }} src={gmail} alt="Gmail" />
                    <img style={{ width: "24px", height: "24px" }} src={facebook} alt="Facebook" />
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
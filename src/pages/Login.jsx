import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gmail from "../assets/gmail.png"
import facebook from "../assets/facebook.png"

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login: ", login)
        console.log("Senha: ", password)
        navigate('/home')
    }
    return (
        <div style={{ backgroundColor: "#babbf2" }} className="w-full flex justify-content-center align-items-center">
            <div className="w-3 flex-column text-center justify-content-center my-6 p-3" style={{ backgroundColor: "#ffffff", borderRadius: '4px' }}>
                <div>
                    <h1 className="text-left">Acessar sua conta</h1>
                    <p className="text-left">Novo cliente? Então, registre-se <a style={{ color: "#000000" }} href="">aqui</a>.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="login">Login *
                        </label>
                        <input className="p-3 border-none" style={{ backgroundColor: "#f9f8fe" }} type="login" id="login" placeholder="Insira seu login ou e-mail" value={login} onChange={(e) => setLogin(e.target.value)} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="password">Senha *
                        </label>
                        <input className="p-3 border-none" style={{ backgroundColor: "#f9f8fe" }} type="password" id="password" placeholder="Insira sua senha" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="text-left my-3"><a href="">Esqueci minha senha</a></div>
                    <button className="w-full border-none p-2" style={{ backgroundColor: "#C92071", borderRadius: "4px", color: "#ffffff" }} type="submit">Acessar Conta</button>
                </form>
                <div className="flex justify-content-center align-items-center gap-2">
                    <p>Ou faça login com </p>
                    <img style={{ width: "24px", height: "24px" }} src={gmail} alt="" />
                    <img style={{ width: "24px", height: "24px" }} src={facebook} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;
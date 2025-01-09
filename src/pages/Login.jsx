import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email: ", email)
        console.log("Senha: ", password)
        navigate('/home')
    }
    return (
        <div className="flex-column text-center justify-content-center my-6" >
            <h1>Acessar</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-column mb-3">
                    <label className="flex mb-1 justify-content-start" htmlFor="email">Email:
                    </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-column mb-3">
                    <label className="flex mb-1 justify-content-start" htmlFor="password">Senha:
                    </label>
                    <input type="password" id="password" value={password} onChange={(e) => { setSenha(e.target.value) }} />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
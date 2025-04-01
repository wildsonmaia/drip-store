import { useState } from "react"
import { useNavigate } from "react-router-dom"
import gmail from "../assets/gmail.png"
import facebook from "../assets/facebook.png"

const SignUp = () => {
    const [ name, setName ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ cpf, setCPF ] = useState('')
    const [ date, setDate ] = useState('')
    const [ cep, setCEP ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()

    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email: ", email)
        console.log("Senha: ", password)
        navigate('/home')
    }
    return (

        <div style={{ backgroundColor: "#babbf2" }} className="w-full flex justify-content-center align-items-center">
                    <div className="w-3 flex-column text-center justify-content-center my-6 p-3" style={{ backgroundColor: "#ffffff", borderRadius: '4px' }}>
                        <div>
                            <h1 className="text-left">Crie sua conta</h1>
                            <p className="text-left">Já possui uma conta? Então, entre <a style={{ color: "#000000" }} href="">aqui</a>.</p>
                        </div>
                        <form onSubmit={handleSubmit}>                            
                            <div className="flex flex-column mb-3">
                                <label className="flex mb-1 justify-content-start" htmlFor="email">E-mail *
                                </label>
                                <input className="p-3 border-none" style={{ backgroundColor: "#f9f8fe" }} type="email" id="email" placeholder="Insira seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <button className="w-full border-none p-2" style={{ backgroundColor: "#C92071", borderRadius: "4px", color: "#ffffff" }} type="submit">Criar Conta</button>
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
 
export default SignUp;
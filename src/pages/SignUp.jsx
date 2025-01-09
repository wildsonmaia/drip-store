import { useState } from "react"
import { useNavigate } from "react-router-dom"


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
        <div className="w-4 my-6 flex-column text-center justify-content-center">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
            
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="name">Nome completo:
                        </label>
                        <input type="name" id="name" value={name} onChange={(e) => {setName(e.target.value)}} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="number">Número:
                        </label>
                        <input type="tel" id="number" value={number} onChange={(e) => {setNumber(e.target.value)}} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="cpf">CPF:
                        </label>
                        <input type="tel" id="cpf" value={cpf} onChange={(e) => {setCPF(e.target.value)}} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="date">Data de nascimento:
                        </label>
                        <input type="date" id="date" value={date} onChange={(e) => {setDate(e.target.value)}} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="cep">CEP:
                        </label>
                        <input type="tel" id="cep" value={cep} onChange={(e) => {setCEP(e.target.value)}} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="email">Email:
                        </label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-column mb-3">
                        <label className="flex mb-1 justify-content-start" htmlFor="password">Senha:
                        </label>
                        <input type="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    </div>
                    <button type="submit">Cadastrar</button>
            
            </form>
        </div>
     );
}
 
export default SignUp;
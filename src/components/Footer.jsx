import logofooter from "../assets/logo-footer.svg"
import "primeicons/primeicons.css"
import styled from "styled-components"
import { InputIcon } from "primereact/inputicon"
import Informations from "./Informations"

const FooterContainer = styled.footer`
    background-color: #1F1F1F;
    & p, h2, li, li a{
        color: #ffffff;
        font-size: 16px;
    } & li>a {
        text-decoration: none;
    }
`

const Footer = () => {
    const infos = [
        { "text": "Sobre Drip Store", "link": "" },
        { "text": "Segurança", "link": "" },
        { "text": "Wishlist", "link": "" },
        { "text": "Blog", "link": "" },
        { "text": "Trabalhe conosco", "link": "" },
        { "text": "Meus Pedidos", "link": "" }
    ]

    const categs = [
        { "text": "Camisetas", "link": "" },
        { "text": "Calças", "link": "" },
        { "text": "Bonés", "link": "" },
        { "text": "Tênis", "link": "" },
        { "text": "Headphones", "link": "" }
    ]

    const contacts = [
        { "text": "Av. Santos Dumont, 1510 - 1° andar - Aldeota, Fortaleza - CE, 60150-161", "link": "" },
        { "text": "(85) 3051-3411", "link": "" }
    ]
    return (
        <FooterContainer>
            <div className="w-full flex py-3 p-0 gap-8">
                <div className="w-3 mx-3">
                    <img src={logofooter} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ea qui, saepe eveniet nisi veritatis id, exercitationem velit autem impedit nostrum aperiam. Eos praesentium, eius iste laborum consequatur suscipit perspiciatis?</p>
                    <div>
                        <ul className="p-0 flex gap-5 list-none">
                            <li>
                                <a href="https://www.facebook.com" target="new_blank">
                                    <InputIcon className="pi pi-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="new_blank">
                                    <InputIcon className="pi pi-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.x.com" target="new_blank">
                                    <InputIcon className="pi pi-twitter" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="p-0 w-9 flex flex-row justify-content-center gap-5">
                    <Informations title="Informação" informations={infos} />
                    <Informations title="Categorias" informations={categs} />
                    <Informations title="Contato" informations={contacts} />
                    
                </div>
            </div>
            <div className="py-3 flex-column justify-content-center">
                <hr className="mx-3" />
                <p className="my-5 text-center">&copy; 2024 Digital College</p>
            </div>
        </FooterContainer>
    );
}

export default Footer;
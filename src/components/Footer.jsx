import logofooter from "../assets/logo-footer.svg"
import "primeicons/primeicons.css"
import styled from "styled-components"
import { InputIcon } from "primereact/inputicon"

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
    return (
        <FooterContainer className="">
            <div className="w-full flex py-3 px-5">
                <div className="mx-3">
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
                
                <div className="grid col-9 justify-content-center gap-6">
                    <ul className="list-none">
                        <h2>Informação</h2>
                        <li><a href=""  style={{ color: "#ffffff" }}>Sobre Drip Store</a></li>
                        <li><a href="" >Segurança</a></li>
                        <li><a href="" >Wishlist</a></li>
                        <li><a href="" >Blog</a></li>
                        <li><a href="" >Trabalhe conosco</a></li>
                        <li><a href="" >Meus Pedidos</a></li>
                    </ul>
                    <ul className="list-none">
                        <h2>Produtos</h2>
                        <li><a href="" >Camisetas</a></li>
                        <li><a href="" >Calças</a></li>
                        <li><a href="" >Bonés</a></li>
                        <li><a href="" >Headphones</a></li>
                        <li><a href="" >Tênis</a></li>
                    </ul>
                    <ul className="list-none">
                        <h2>Contato</h2>
                        <li>Av. Santos Dumont, 1510 - 1° andar - Aldeota, Fortaleza - CE, 60150-161</li>
                        <li>(85) 3051-3411</li>
                    </ul>
                </div>
            </div>
            <div className="py-3 flex-column justify-content-center">
                <hr className="mx-5" />
                <p className="my-5 text-center">&copy; 2024 Digital College</p>
            </div>
        </FooterContainer>
    );
}

export default Footer;
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
        a {
                color: #474747;
                list-style-type: none;
                text-decoration: none;}
        & a:hover{
                color: #C92071;
        } 
        & .active {
                color: #C92071;
                border-bottom: 2px solid #C92071 
        }
`

const Navbar = () => {

        return (
                <NavContainer>
                        <nav>
                                <ul className="flex list-none gap-5">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/produtos">Produtos</NavLink></li>
                                        <li><NavLink to="/categorias">Categorias</NavLink></li>
                                        <li><NavLink to="/pedidos">Meus Pedidos</NavLink></li>
                                </ul>
                        </nav>
                </NavContainer>
        );
}

export default Navbar;
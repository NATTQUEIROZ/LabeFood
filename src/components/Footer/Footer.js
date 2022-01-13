import React from "react";
import { MainContainer } from "./styled";
import PerfilIcon from '../../assets/img/avatar.png';
import HomeIcon from '../../assets/img/homepage.png';
import CartIcon from '../../assets/img/shopping-cart.png';
import { goToHome } from "../../routes/coordinator";
import { goToCart} from "../../routes/coordinator";
import { goToProfile } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const Footer = () =>{

    const history = useHistory();

return(
    <MainContainer>
        <button onClick={()=>goToHome(history)} > <img src={HomeIcon} alt="icone de home"/> </button>
        <button onClick={()=>goToCart(history)} > <img src={CartIcon} alt="icone de carrinho"/> </button>
        <button onClick={()=>goToProfile(history)} > <img src={PerfilIcon} alt="icone de perfil"/> </button>
    </MainContainer>
)
}
export default Footer
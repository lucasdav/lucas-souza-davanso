import Avatar from "../img/imagem-perfil.jpeg";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Lucas Souza Davanso" />
            <p className="title">Software Developer</p>
            <SocialNetworks/>
            <p>informações de contato</p>
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar
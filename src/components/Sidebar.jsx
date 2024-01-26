import Avatar from "../img/imagem-perfil.jpeg";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Lucas Souza Davanso"/>
            <h1>Lucas Souza Davanso</h1>
            <p className="title">Software Developer</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar
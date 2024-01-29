import Avatar from "../img/profile-image.jpeg";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const SidebarPdf = () => {

    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Lucas Souza Davanso"/>
            <h1>Lucas S Davanso</h1>
            <p className="title">Software Developer</p>
            <SocialNetworks/>
            <InformationContainer/>
        </aside>
    )
}

export default SidebarPdf
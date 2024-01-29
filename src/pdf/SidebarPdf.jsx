import Avatar from "../img/profile-image.jpeg";
import SocialNetworksPdf from "./SocialNetworksPdf";

import "./styles/sidebarPdf.sass";
import InformationContainerPdf from "./InformationContainerPdf";

const SidebarPdf = () => {

    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Lucas Souza Davanso"/>
            <h1>Lucas S Davanso</h1>
            <p className="title">Software Developer</p>
            <SocialNetworksPdf/>
            <InformationContainerPdf/>
        </aside>
    )
}

export default SidebarPdf
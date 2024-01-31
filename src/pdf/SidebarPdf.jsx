import Avatar from "../img/profile-image.jpeg";
import SocialNetworksPdf from "./SocialNetworksPdf";

import "./styles/sidebarPdf.sass";
import InformationContainerPdf from "./InformationContainerPdf";

const SidebarPdf = () => {

    return (
        <aside id="sidebar-pdf">
            <img src={Avatar} alt="Lucas Souza Davanso"/>
            <h1>Lucas S Davanso</h1>
            <p className="title-pdf">Software Developer</p>
            <SocialNetworksPdf/>
            <InformationContainerPdf/>
        </aside>
    )
}

export default SidebarPdf
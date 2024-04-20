import Avatar from "../img/profile-image.jpeg";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {

    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Lucas S Davanso" />
            <h1>Lucas S Davanso</h1>
            <p className="title">Full Stack Developer | AWS Certified | React | Angular | Node</p>
            <SocialNetworks />
            <InformationContainer />
        </aside >
    )
}

export default Sidebar
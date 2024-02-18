import SocialNetworksPdf from "./SocialNetworksPdf";

import "./styles/sidebarPdf.sass";
import InformationContainerPdf from "./InformationContainerPdf";

const SidebarPdf = () => {

    return (
        <aside id="sidebar-pdf">
            <div className="sidebar-grid-pdf">
                <div>
                    <h1>Lucas S Davanso</h1>
                    <p className="title-pdf">Software Developer</p>
                    <SocialNetworksPdf/>
                </div>
            </div>
            <InformationContainerPdf/>
        </aside>
    )
}

export default SidebarPdf
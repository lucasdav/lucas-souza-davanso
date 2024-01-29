import "./styles/maincontentPdf.sass"
import SidebarPdf from "./SidebarPdf"
import AboutContainerPdf from "./AboutContainerPdf"

const MainContentPdf = () => {
    return (
        <main id="main-content-pdf">
            <SidebarPdf/>
            <AboutContainerPdf/>
        </main>
    )
}

export default MainContentPdf
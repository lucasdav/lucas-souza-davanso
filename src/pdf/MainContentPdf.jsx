import "./styles/maincontentPdf.sass"
import SidebarPdf from "./SidebarPdf"
import AboutContainerPdf from "./AboutContainerPdf"
import ExperiencePdf from "./ExperiencePdf"

const MainContentPdf = () => {
    return (
        <main id="main-content-pdf">
            <SidebarPdf/>
            <AboutContainerPdf/>
            <ExperiencePdf/>
        </main>
    )
}

export default MainContentPdf
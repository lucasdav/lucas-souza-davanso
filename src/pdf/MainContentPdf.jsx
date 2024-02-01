import "./styles/maincontentPdf.sass"
import SidebarPdf from "./SidebarPdf"
import AboutContainerPdf from "./AboutContainerPdf"
import ExperiencePdf from "./ExperiencePdf"
import EducationPdf from "./EducationPdf"

const MainContentPdf = () => {
    return (
        <main id="main-content-pdf">
            <SidebarPdf/>
            <AboutContainerPdf/>
            <ExperiencePdf/>
            <EducationPdf/>
        </main>
    )
}

export default MainContentPdf
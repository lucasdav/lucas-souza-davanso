import "./styles/maincontentPdf.sass"
import SidebarPdf from "./SidebarPdf"
import AboutContainerPdf from "./AboutContainerPdf"
import ExperiencePdf from "./ExperiencePdf"
import EducationPdf from "./EducationPdf"
import LanguagesPdf from "./LanguagesPdf"
import CertificationPdf from "./CertificationPdf"
// import TechnologiesContainerPdf from "./TechnologiesContainerPdf"
import PublicationsContainerPdf from "./PublicationsContainerPdf"

const MainContentPdf = () => {
    return (
        <div id="main-content-pdf">
            <SidebarPdf />
            <AboutContainerPdf />
            <ExperiencePdf />
            <EducationPdf />
            <LanguagesPdf />
            <CertificationPdf />
            {/* <TechnologiesContainerPdf/> */}
            <PublicationsContainerPdf />
        </div>
    )
}

export default MainContentPdf
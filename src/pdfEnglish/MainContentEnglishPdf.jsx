import "./styles/maincontentPdf.sass"
import SidebarPdf from "./SidebarPdf"
import AboutContainerPdf from "./AboutContainerPdf"
import ExperiencePdf from "./ExperiencePdf"
import EducationPdf from "./EducationPdf"
import LanguagesPdf from "./LanguagesPdf"
import CertificationPdf from "./CertificationPdf"
// import TechnologiesContainerPdf from "./TechnologiesContainerPdf"
import PublicationsContainerPdf from "./PublicationsContainerPdf"

const MainContentEnglishPdf = () => {
    return (
        <main id="main-content-english-pdf">
            <SidebarPdf />
            <AboutContainerPdf />
            <ExperiencePdf />
            <EducationPdf />
            <LanguagesPdf />
            <CertificationPdf />
            {/* <TechnologiesContainerPdf/> */}
            <PublicationsContainerPdf />
        </main>
    )
}

export default MainContentEnglishPdf
import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"
import TechnologiesContainer from "./TechnologiesContainer"

import "../styles/components/maincontent.sass"
import Experience from "./Experience"
import Education from "./Education"
import Languages from "./Languages"
import Certifications from "./Certifications"

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer/>
            <Experience/>
            <Education/>
            <Languages/>
            <Certifications/>
            <TechnologiesContainer/>
            <ProjectsContainer/>
        </main>
    )
}

export default MainContent
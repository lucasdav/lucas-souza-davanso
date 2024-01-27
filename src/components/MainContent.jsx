import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"
import TechnologiesContainer from "./TechnologiesContainer"

import "../styles/components/maincontent.sass"
import Experience from "./Experience"

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer/>
            <Experience/>
            <TechnologiesContainer/>
            <ProjectsContainer/>
        </main>
    )
}

export default MainContent
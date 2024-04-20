import Sidebar from '../../components/Sidebar'
import MainContentPdf from '../../pdf/MainContentPdf'
import MainContentEnglishPdf from '../../pdfEnglish/MainContentEnglishPdf'
import "./styles.sass";

import "../../styles/components/maincontent.sass"
import Home from '../home';
import About from '../sobre';
import Experience from '../experiencias';
import Education from '../formacao';
import Certifications from '../certificados';
import TechnologiesContainer from '../tecnologias';
import PublicationsContainer from '../publicacoes';

const MainContent = () => {
    return (
        <main>
            <div className='flex-section'>
                <div id="portfolio" className='left-section'>
                    <Sidebar />
                </div>
                <div className="main-content">
                    <Home />
                </div>
            </div>
            <div className='flex-section'>
                <div className="main-content">
                    <About />
                    <Experience />
                    <Education />
                    <PublicationsContainer />
                    <Certifications />
                    <TechnologiesContainer />
                </div>
            </div>

            <div id="portfolio-pdf">
                <MainContentPdf />
            </div>
            <div id="portfolio-pdf">
                <MainContentEnglishPdf />
            </div>
        </main>
    )
}

export default MainContent
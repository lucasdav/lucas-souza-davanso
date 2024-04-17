import Sidebar from '../../components/Sidebar'
import MainContentPdf from '../../pdf/MainContentPdf'
import MainContentEnglishPdf from '../../pdfEnglish/MainContentEnglishPdf'
import "./styles.sass";

import "../../styles/components/maincontent.sass"
import { Outlet } from "react-router-dom"

const MainContent = () => {
    return (
        <>
            <div className='main'>
                <div id="portfolio" className='sidebar-aside'>
                    <Sidebar />
                </div>
                <div id="main-content">
                    <Outlet />
                </div>
            </div>

            <div id="portfolio-pdf">
                <MainContentPdf />
            </div>
            <div id="portfolio-pdf">
                <MainContentEnglishPdf />
            </div>
        </>
    )
}

export default MainContent
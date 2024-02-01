import Avatar from "../img/profile-image.jpeg";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import html2pdf from 'html2pdf.js';

const Sidebar = () => {

const downloadPDF = function() {
    var element = document.getElementById('main-content-pdf');

    const options = {
        margin: [1, 1, 1, 1],
        filename: "CV-Lucas-S-Davanso.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation:'portrait' }
    }

    html2pdf().set(options).from(element).save();

}

    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Lucas Souza Davanso"/>
            <h1>Lucas S Davanso</h1>
            <p className="title">Software Developer</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="#" onClick={downloadPDF} className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar
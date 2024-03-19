import { AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import './styles/informationcontainerPdf.sass'

const InformationContainerPdf = () => {

    return (
        <section id="information-pdf">
            <div className="info-card-pdf">
                <div>
                    <div className="flex-div">
                        <AiOutlineWhatsApp id="phone-icon" />
                        <h3>Cell Phone</h3>
                    </div>
                    <a href="https://wa.me/+5517996325685">(17) 99632-5685</a>
                </div>
            </div>
            <div className="lineStyled-pdf"></div>
            <div className="info-card-pdf">
                <div>
                    <div className="flex-div">
                        <AiOutlineMail id="email-icon" />
                        <h3>E-mail</h3>
                    </div>
                    <a href="mailto:lucassouzadavanso@gmail.com">lucassouzadavanso@gmail.com</a>
                </div>
            </div>
            <div className="lineStyled-pdf"></div>
            <div className="info-card-pdf">
                <div>
                    <div className="flex-div">
                        <AiFillEnvironment id="pin-icon" />
                        <h3>Location</h3>
                    </div>
                    <p>Santa Fé do Sul - SP, Brazil</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainerPdf
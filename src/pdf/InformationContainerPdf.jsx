import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import './styles/informationcontainerPdf.sass'

const InformationContainerPdf = () => {

    return (
        <section id="information-pdf">
            <div className="info-card-pdf">
                <AiFillPhone id="phone-icon" />
                <div>                    
                    <h3>Telefone</h3>
                    <p>(17) 99632-5685</p>
                </div>
            </div>
            <div className="lineStyled-pdf"></div>
            <div className="info-card-pdf">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>lucassouzadavanso@gmail.com</p>
                </div>
            </div>
            <div className="lineStyled-pdf"></div>
            <div className="info-card-pdf">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Santa Fé do Sul - SP</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainerPdf
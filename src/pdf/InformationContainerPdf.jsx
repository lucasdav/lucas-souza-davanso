import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import './styles/informationcontainerPdf.sass'

const InformationContainerPdf = () => {

    return (
        <section id="information-pdf">
            <div className="info-card-pdf">
                <div>
                    <div className="flex-div">
                        <AiFillPhone id="phone-icon" />
                        <h3>Telefone</h3>
                    </div>                    
                    <p>(17) 99632-5685</p>
                </div>
            </div>
            <div className="lineStyled-pdf"></div>
            <div className="info-card-pdf">
                <div>
                    <div className="flex-div">
                        <AiOutlineMail id="email-icon" />
                        <h3>E-mail</h3>
                    </div>
                    <p>lucassouzadavanso@gmail.com</p>
                </div>
            </div>
            <div className="lineStyled-pdf"></div>
            <div className="info-card-pdf">
                <div>
                    <div className="flex-div">
                        <AiFillEnvironment id="pin-icon" />
                        <h3>Localização</h3>
                    </div>
                    <p>Santa Fé do Sul - SP</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainerPdf
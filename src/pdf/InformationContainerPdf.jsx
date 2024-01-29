import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import './styles/informationcontainerPdf.sass'

const InformationContainerPdf = () => {

    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>                    
                    <h3>Telefone</h3>
                    <p>(17) 99632-5685</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>lucassouzadavanso@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
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
import { AiOutlineWhatsApp , AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const redirectToWhatsApp = () => {
    window.location.href = 'https://wa.me/+5517996325685';
};

const redirectToEmail = () => {
    window.location.href = 'mailto:lucassouzadavanso@gmail.com';
};

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card div-button" role="button" onClick={redirectToWhatsApp}>
                <AiOutlineWhatsApp  id="phone-icon" />
                <div>                    
                    <h3>Telefone</h3>
                    <p>(17) 99632-5685</p>
                </div>
            </div>
            <div className="info-card div-button" onClick={redirectToEmail}>
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

export default InformationContainer
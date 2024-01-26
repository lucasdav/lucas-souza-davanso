import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {

    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <h3>Telefone</h3>
                <p>(17) 99632-5685</p>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <h3>E-mail</h3>
                <p>lucassouzadavanso@gmail.com</p>
            </div>
        </section>
    )
}

export default InformationContainer
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {

    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
            </div>
        </section>
    )
}

export default InformationContainer
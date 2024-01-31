import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

import './styles/socialnetworksPdf.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/lucas-s-davanso-60b7b432/' },
    { name: "github", icon: <FaGithub />, url: 'https://github.com/lucasdav' }
]

const SocialNetworksPdf = () => {
    return (
        <section id="social-networks-pdf">
            {socialNetworks.map((network) => (
                <a href={network.url} className='social-btn-pdf' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworksPdf
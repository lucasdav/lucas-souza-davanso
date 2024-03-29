import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/lucas-s-davanso-60b7b432/' },
    { name: "github", icon: <FaGithub />, url: 'https://github.com/lucasdav' }
]

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.url} className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks
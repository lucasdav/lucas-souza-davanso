import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact
} from 'react-icons/di'

import '../styles/components/technologiesContainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
  ];

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {
                    technologies.map((tech) => (
                        <div id={tech.id} key={tech.id} className="technology-card">
                            {tech.icon}
                            <div className="technology-info">
                                <h3>{tech.name}</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, beatae esse neque temporibus 
                                    odio minima nobis cum, a quia quas totam voluptates itaque nostrum inventore fugiat laudantium? 
                                    Porro, autem consequatur!
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TechnologiesContainer
import '../styles/components/experience.sass'

const Education = () => {
    return (
        <section className='experience-container'>
            <h2>Formação Acadêmica</h2>
            <div className="experience-grid">
                
                <div className="experience-card">                    
                    <div className="experience-info">
                        <h3>Unicamp - Universidade Estadual de Campinas</h3>
                        <h4>Engenharia da Computação - 2015 - 1017 - em andamento</h4>
                    </div>
                </div>
                <div className="experience-card">                    
                    <div className="experience-info">
                        <h3>Unifev - Centro Universitário de Votuporanga</h3>
                        <h4>Engenharia da Computação - 2010 - 1014</h4>                       
                    </div>
                </div>
                <div className="experience-card">                    
                    <div className="experience-info">
                        <h3>Etec - Centro Paula Souza</h3>
                        <h4>Técnico em informática para internet - 2011 - 2012</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
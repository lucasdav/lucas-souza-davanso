import './styles/experiencePdf.sass'

const EducationPdf = () => {
    return (
        <section className='experience-container-pdf'>
            <div className="experience-grid-pdf">
                <h2>Formação Acadêmica</h2>

                <div className="experience-card-pdf">                    
                    <div className="experience-info-pdf">
                        <h3>Fiap - Faculdade de Informática e Administração Paulista</h3>
                        <h4>Pós Graduação Especialização em FULL STACK DEVELOPMENT - jan/2024 - dez/2024 - em andamento</h4>
                    </div>
                </div>
                <div className="experience-card-pdf">                    
                    <div className="experience-info-pdf">
                        <h3>Unicamp - Universidade Estadual de Campinas</h3>
                        <h4>Mestrado em Engenharia da Computação - 2015 - 2017 - em andamento</h4>
                    </div>
                </div>
                <div className="experience-card-pdf">                    
                    <div className="experience-info-pdf">
                        <h3>Unifev - Centro Universitário de Votuporanga</h3>
                        <h4>Graduado em Engenharia da Computação - 2010 - 2014</h4>                       
                    </div>
                </div>
                <div className="experience-card-pdf">                    
                    <div className="experience-info-pdf">
                        <h3>Etec - Centro Paula Souza</h3>
                        <h4>Técnico em informática para internet - 2011 - 2012</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationPdf
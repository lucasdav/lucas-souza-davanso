import '../styles/components/publication.sass'


const PublicationsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Publicações</h2>
            <div className="projects-grid">
                <div className="projects-card">  
                    <div className="projects-info">
                        <h3>Implantação de Automação Residencial para Jardins</h3>
                        <h4> IFSP - Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus Votuporanga · 25/04/2014</h4>
                        <p>
                           - Criação de um sistema na linguagem C embarcado em Arduino, utilizando sensor de umidade e uma válvula solenoide<br/>
                           - Desenvolvimento de hirrigação automatizada,através da programação da regra condicional da umidade ideal para ativar a válvula solenóide
                        </p>
                    </div>
                </div> 
                <div className="projects-card">  
                    <div className="projects-info">
                        <h3>MEDIDOR DE TREMOR PARA DIAGNOSTICO DE MAL DE PARKINSON</h3>
                        <h4>
                            14º Congresso Nacional de Iniciação Científica CONIC-SEMES P<br/>
                            IX Unic - Congresso de Iniciação Científica · 20/11/2013
                        </h4>
                        <p>
                           - Criação de um sistema na linguagem C embarcado em Arduino, utilizando sensor acelerômetro e um módulo bluetooth<br/>
                           - Desenvolvimento de um sistema em c# utilizando charts para leitura do tremor lido através do sensor acelerômetro
                           e transmitido via bluetooth
                        </p>
                    </div>
                </div> 

            </div>
           
        </section>
    )
}

export default PublicationsContainer
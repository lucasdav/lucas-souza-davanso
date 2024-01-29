import './styles/experiencePdf.sass'

const ExperiencePdf = () => {
    return (
        <section className='experience-container'>
            <h2>Experiências</h2>
            <div className="experience-grid">
                
                <div className="experience-card">                    
                    <div className="experience-info">
                        <h3>Software Developer na ENGESOFTWARE TECNOLOGIA S.A.</h3>
                        <h4>Out. de 2023 - Atual - 4 meses</h4>
                        <p>
                        Criação de um sistema de gerência de carteiras para o banco BNB, utilizando framework React.<br/>
                        - Tabelas dinâmicas expansivas com ordenadores utilizando material-ui react-table<br/>
                        - Impressão de relatórios para download pdf utilizando react-to-pdf<br/>
                        - Componentes dinamicos utilizando material-ui<br/>
                        - Gráficos dinâmicos utilizando material-ui react-charts<br/>
                        - Domínio em testes automatizados (Unitários, Integração e e2e);<br/>
                        - Experiência com Hooks useState, useEffect e useMemo<br/>
                        - Desenvolvimento em typescript, html, javascript, css<br/>
                        - Integração via APIs Rest<br/>
                        - Versionamento de código com RTC<br/>
                        - Documentação de projetos: azure e figma<br/>
                        </p>
                    </div>
                </div>
                <div className="experience-card">                    
                    <div className="experience-info">
                        <h3>Software Engineer no Itaú Unibanco</h3>
                        <h4>Jul. de 2017 - Out de 2023 - 6 anos e 4 meses</h4>
                        <p>
                        - Tech Lead na squad de Investimentos PF na comunidade de Shared Experience<br/>
                        - Mentoria e acompanhamento de boas práticas da equipe técnica<br/> 
                        - Criação de novas aplicações, fomentando plano de desenvolvimento técnico<br/>
                        - Desenvolvimento de aplicações mobile e web, utilizando framework angular, nas 
                        linguagens c#, .Net, HTML, javascript, css, java, kotlin e typescript, uso de reactive 
                        state NGRX<br/>
                        - Domínio de técnicas de otimização do tempo de carregamentos das páginas, 
                        performance e conversão<br/>
                        - Documentação de projetos com figma e confluence<br/>
                        - Experiência em testes automatizados (Unitários, Integração e e2e)<br/>
                        - Cultura devops e ferramentas: Sonar, Fortify, Docker e Kubernetes<br/>
                        - Versionamento de código com Git<br/>
                        - Acompanhamento de implantação, homologação e releases via Github Action e AWS Pipelines<br/>
                        - Observabilidade: Splunk e App Dynamics<br/>
                        - Experiência com metodologias de desenvolvimento ágil, como Scrum e Kanban<br/>
                        - Garantir funcionamento e equalização do ambiente Docker<br/>
                        - Referência técnica em front-end utilizando framework Angular<br/>
                        - Principais Iniciativas: Criação de espaço de campanha h2o integrado com cms headless na 
                        webview home de investimento para ofertas segmentadas. Desenvolvimento de micro 
                        front-end e integração com cms headless para modularizar elementos
                        </p>
                    </div>
                </div>
                <div className="experience-card">                    
                    <div className="experience-info">
                        <h3>Software Engineer na Indra</h3>
                        <h4>Jul. de 2016 - Jul. de 2017 - 1 ano e 1 mês</h4>
                        <p>
                        - Desenvolvimento em .Net do sistema web da Mapfre Seguros<br/>
                        - Criação de manuais de usuário para o sistema<br/>
                        - Suporte e manutenção no banco de dados do sistema SGD<br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperiencePdf
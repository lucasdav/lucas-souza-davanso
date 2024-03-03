import './styles/experiencePdf.sass'

const ExperiencePdf = () => {
    return (
        <section className='experience-container-pdf'>
            <div className="experience-grid-pdf">
                <h2>Experiências</h2>
                
                <div className="experience-card-pdf">                    
                    <div className="experience-info-pdf">
                        <h3>Software Developer na ENGESOFTWARE TECNOLOGIA S.A.</h3>
                        <h4>Out. de 2023 - Atual</h4>
                        <p>Criação de um sistema de gerência de carteiras para o banco BNB, utilizando framework React.</p>
                        <p>
                            - Criação de componentes dinâmicos: gráficos utilizando react-charts, tabelas expansivas com ordenadores, 
                            filtros e paginação utilizando material-ui
                        </p>
                        <p>- Impressão de relatórios para download em pdf, utilizando react-to-pdf</p>
                        <p>- Domínio em testes automatizados (unitários, integração e e2e);</p>
                        <p>- Experiência com Hooks useState, useEffect, useMemo e useQuery, integração via APIs REST utilizando Axios</p>
                        <p>- Desenvolvimento em typescript, html, javascript, css</p>
                        <p>- Versionamento de código com RTC, documentação de projetos com azure e figma</p>
                        
                    </div>
                </div>
                <div className="experience-card-pdf">                    
                    <div className="experience-info-pdf">
                        <h3>Software Engineer no Itaú Unibanco</h3>
                        <h4>Jul. de 2017 - Out de 2023 - 6 anos e 4 meses</h4>
                        
                        <p>- Tech Lead na squad de Investimentos PF na comunidade de Shared Experience</p>
                        <p>- Mentoria e acompanhamento de boas práticas da equipe técnica</p> 
                        <p>- Criação de novas aplicações, fomentando plano de desenvolvimento técnico</p>
                        <p>- Desenvolvimento de aplicações mobile e web, utilizando framework angular, nas 
                        linguagens c#, .Net, HTML, javascript, css, java, kotlin e typescript, uso de reactive 
                        state NGRX</p>
                        <p>- Domínio de técnicas de otimização do tempo de carregamentos das páginas, 
                        performance e conversão</p>
                        <p>- Documentação de projetos com figma e confluence</p>
                        <p>- Experiência em testes automatizados (Unitários, Integração e e2e)</p>
                        <p>- Cultura devops e ferramentas: Sonar, Fortify, Docker e Kubernetes</p>
                        <p>- Versionamento de código com Git</p>
                        <p>- Acompanhamento de implantação, homologação e releases via Github Action e AWS Pipelines</p>
                        <p>- Observabilidade: Splunk e App Dynamics</p>
                        <p>- Experiência com metodologias de desenvolvimento ágil, como Scrum e Kanban</p>
                        <p>- Garantir funcionamento e equalização do ambiente Docker</p>
                        <p>- Referência técnica em front-end utilizando framework Angular</p>
                        <p>- Principais Iniciativas: Criação de espaço de campanha h2o integrado com cms headless na 
                        webview home de investimento para ofertas segmentadas. Desenvolvimento de micro 
                        front-end e integração com cms headless para modularizar elementos
                        </p>
                    </div>
                </div>
                <div className="experience-card-pdf" style={{marginTop: '120px'}}>                    
                    <div className="experience-info-pdf">
                        <h3>Software Engineer na Indra</h3>
                        <h4>Jul. de 2016 - Jul. de 2017 - 1 ano e 1 mês</h4>
                        
                        <p>- Desenvolvimento em .Net do sistema web para Mapfre</p>
                        <p>- Criação de manuais de usuário para um sistema no setor de energia elétrica</p>
                        <p>- Suporte e manutenção no banco de dados do sistema SGD</p>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperiencePdf
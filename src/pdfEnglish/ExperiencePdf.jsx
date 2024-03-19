import './styles/experiencePdf.sass'

const ExperiencePdf = () => {
    return (
        <section className='experience-container-pdf'>
            <div className="experience-grid-pdf">
                <h2>Experiences</h2>

                <div className="experience-card-pdf">
                    <div className="experience-info-pdf">
                        <h3>Software Developer at ENGESOFTWARE TECNOLOGIA S.A.</h3>
                        <h4>Oct. 2023 - Current</h4>
                        <p>Creation of a portfolio management system for the BNB bank, using the React framework.</p>
                        <p>
                            - Creation of dynamic components: charts using react-charts, expandable tables with sorters, filters and pagination using material-ui
                        </p>
                        <p>- Printing reports for download in pdf using react-to-pdf</p>
                        <p>- Proficiency in automated testing (unit, integration and e2e)</p>
                        <p>- Experience with useState, useEffect, useMemo and useQuery Hooks, integration via REST APIs using Axios</p>
                        <p>- Development in typescript, html, javascript, css</p>
                        <p>- Code versioning with RTC, project documentation with azure and figma</p>

                    </div>
                </div>
                <div className="experience-card-pdf" style={{ marginTop: 150 }}>
                    <div className="experience-info-pdf">
                        <h3>Software Engineer at Itaú Unibanco</h3>
                        <h4>Jul 2017 - Oct 2023 - 6 years and 4 months</h4>

                        <p>- Tech Lead in the PF Investments squad in the Shared Experience community</p>
                        <p>- Mentoring and monitoring of good practices by the technical team</p>
                        <p>- Creation of new applications, promoting a technical development plan</p>
                        <p>
                            - Development of mobile and web applications, using the Angular framework, in the c#, .Net, HTML,
                            javascript, css, java, kotlin and typescript languages, use of reactive state NGRX
                        </p>
                        <p>
                            - Mastery of page load time optimization techniques, performance and conversion
                        </p>
                        <p>- Project documentation with figma and confluence</p>
                        <p>- Experience in automated testing (Unit, Integration and e2e)</p>
                        <p>- Devops culture and tools: Sonar, Fortify, Docker and Kubernetes</p>
                        <p>- Code versioning with Git</p>
                        <p>- Monitoring deployment, homologation and releases via Github Action and AWS Pipelines</p>
                        <p>- Observability: Splunk and App Dynamics</p>
                        <p>- Experience with agile development methodologies such as Scrum and Kanban</p>
                        <p>- Ensuring the functioning and equalization of the Docker environment</p>
                        <p>- Technical reference in front-end using Angular framework</p>
                        <p>- Main initiatives: Creation of h2o campaign space integrated with headless cms on the investment home webview for
                            segmented offers. Development of micro front-end and integration with headless cms to modularize elements
                        </p>
                    </div>
                </div>
                <div className="experience-card-pdf">
                    <div className="experience-info-pdf">
                        <h3>Software Engineer at Indra</h3>
                        <h4>July 2016 - July 2017 - 1 year and 1 month</h4>

                        <p>- .Net development of web system for Mapfre</p>
                        <p>- Creating manuals in English for a system in the electricity sector</p>
                        <p>- Database support and maintenance for the SGD system</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperiencePdf
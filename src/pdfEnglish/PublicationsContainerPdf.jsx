import './styles/publicationPdf.sass'


const PublicationsContainerPdf = () => {
    return (
        <section className="projects-container-pdf" style={{ marginTop: 120 }}>
            <div className="projects-grid-pdf">
                <h2>Publications</h2>

                <div className="projects-card-pdf">
                    <div className="projects-info-pdf">
                        <h3>Implementing Home Automation for Gardens</h3>
                        <h4> IFSP - Federal Institute of Education, Science and Technology of São Paulo, Votuporanga's Campus · April 25th, 2014</h4>
                        <p>
                            - Creation of a system in C language embedded in Arduino, using a humidity sensor and a solenoid valve<br />
                            - Development of automated irrigation by programming the conditional ideal humidity rule to activate the solenoid valve
                        </p>
                    </div>
                </div>
                <div className="projects-card-pdf">
                    <div className="projects-info-pdf">
                        <h3>TREMOR METER FOR DIAGNOSING PARKINSON'S DISEASE</h3>
                        <h4>
                            14th National Congress of Scientific Initiation CONIC-SEMES P<br />
                            IX Unic - Congress of Scientific Initiation · November 20th, 2013
                        </h4>
                        <p>
                            - Creation of a C language system embedded in Arduino, using an accelerometer sensor and a bluetooth module<br />
                            - Development of a c# system using charts to read the tremor received by the accelerometer sensor and transmitted via bluetooth
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default PublicationsContainerPdf
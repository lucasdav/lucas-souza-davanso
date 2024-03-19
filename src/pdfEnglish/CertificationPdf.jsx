import './styles/certificationsPdf.sass'

const CertificationPdf = () => {
    return (
        <section className='certification-container-english-pdf'>
            <div className="certification-grid-pdf">
                <h2>Certificates</h2>

                <div className="certification-card-pdf">
                    <div className="certification-info-pdf">
                        <h3>AWS Certified Cloud Practitioner</h3>
                        <h4>Amazon Web Services - expires in 2026</h4>
                        <div className='div-button-pdf'>
                            <a
                                href="https://www.credly.com/badges/641042b6-c216-4713-af41-046b45b5e146/linked_in_profile"
                                className="btn"
                            >
                                show credential
                            </a>
                        </div>
                    </div>
                </div>
                <div className="certification-card-pdf">
                    <div className="certification-info-pdf">
                        <h3>React with Typescript</h3>
                        <h4>Alura - March 2024</h4>
                        <div className='div-button-pdf'>
                            <a
                                href="https://cursos.alura.com.br/degree/certificate/54997aee-8207-4083-83d6-8aa4db454872"
                                className="btn"
                            >
                                show credential
                            </a>
                        </div>
                    </div>
                </div>
                <div className="certification-card-pdf">
                    <div className="certification-info-pdf">
                        <h3>Angular</h3>
                        <h4>Alura - December 2019</h4>
                        <div className='div-button-pdf'>
                            <a
                                href="https://cursos.alura.com.br/degree/certificate/46473ba3-60ea-401e-ac1b-1100ace8fd1b"
                                className="btn"
                            >
                                show credential
                            </a>
                        </div>
                    </div>
                </div>
                <div className="certification-card-pdf">
                    <div className="certification-info-pdf">
                        <h3>Vue.js</h3>
                        <h4>Alura - December 2019</h4>
                        <div className='div-button-pdf'>
                            <a
                                href="https://cursos.alura.com.br/degree/certificate/6ec0054b-4e86-4201-b372-73dba41963b7"
                                className="btn"
                            >
                                show credential
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CertificationPdf
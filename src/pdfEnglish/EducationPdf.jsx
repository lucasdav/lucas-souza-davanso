import './styles/experiencePdf.sass'

const EducationPdf = () => {
    return (
        <section className='experience-container-pdf'>
            <div className="experience-grid-pdf">
                <h2>Academic background</h2>

                <div className="experience-card-pdf">
                    <div className="experience-info-pdf">
                        <h3>Fiap - College of Computer Ccience and Paulist Administration</h3>
                        <h4>Postgraduate Specialization in FULL STACK DEVELOPMENT - jan/2024 - dec/2024 - in progress</h4>
                    </div>
                </div>
                <div className="experience-card-pdf">
                    <div className="experience-info-pdf">
                        <h3>Unicamp - State University of Campinas</h3>
                        <h4>Master's in Computer Engineering - 2015 - 2017 - ongoing</h4>
                    </div>
                </div>
                <div className="experience-card-pdf">
                    <div className="experience-info-pdf">
                        <h3>Unifev - University Center of Votuporanga</h3>
                        <h4>Degree in Computer Engineering - 2010 - 2014</h4>
                    </div>
                </div>
                <div className="experience-card-pdf" style={{ marginTop: 130 }}>
                    <div className="experience-info-pdf">
                        <h3>Etec - Paula Souza's Center</h3>
                        <h4>Computer technician for the internet - 2011 - 2012</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationPdf
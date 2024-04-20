import '../../styles/components/certifications.sass'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionSummary, Box, Typography } from '@mui/material'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Certifications = () => {
    return (
        <section className='certification-container'>
            <Accordion sx={{ background: '#030637' }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon sx={{ color: '#ffffff' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <WorkspacePremiumIcon sx={{ color: '#ffffff', marginTop: 'inherit' }} />
                    <Typography variant='h2' fontWeight={'bold'} marginLeft={2} marginTop={'inherit'}>Certificados</Typography>
                </AccordionSummary>
                <Box margin={2}>

                    <div className="certification-grid">

                        <div className="certification-card">
                            <div className="certification-info">
                                <h3>AWS Certified Cloud Practitioner</h3>
                                <h4>Amazon Web Services - expira em 2026</h4>
                                <div className='div-button'>
                                    <a
                                        href="https://www.credly.com/badges/641042b6-c216-4713-af41-046b45b5e146/linked_in_profile"
                                        className="btn"
                                    >
                                        mostrar credencial
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="certification-card">
                            <div className="certification-info">
                                <h3>Formação React com Typescript</h3>
                                <h4>Março de 2024</h4>
                                <div className='div-button'>
                                    <a
                                        href="https://cursos.alura.com.br/degree/certificate/54997aee-8207-4083-83d6-8aa4db454872"
                                        className="btn"
                                    >
                                        mostrar credencial
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="certification-card">
                            <div className="certification-info">
                                <h3>Formação Angular</h3>
                                <h4>Dezembro de 2019</h4>
                                <div className='div-button'>
                                    <a
                                        href="https://cursos.alura.com.br/degree/certificate/46473ba3-60ea-401e-ac1b-1100ace8fd1b"
                                        className="btn"
                                    >
                                        mostrar credencial
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="certification-card">
                            <div className="certification-info">
                                <h3>Formação Vue.js</h3>
                                <h4>Dezembro de 2019</h4>
                                <div className='div-button'>
                                    <a
                                        href="https://cursos.alura.com.br/degree/certificate/6ec0054b-4e86-4201-b372-73dba41963b7"
                                        className="btn"
                                    >
                                        mostrar credencial
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="certification-card">
                            <div className="certification-info">
                                <h3>JavaScript com foco no back-end</h3>
                                <h4>Abril de 2024</h4>
                                <div className='div-button'>
                                    <a
                                        href="https://cursos.alura.com.br/user/lucasDavanso/degree-js-backend-v210587-210587/certificate"
                                        className="btn"
                                    >
                                        mostrar credencial
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="certification-card">
                            <div className="certification-info">
                                <h3>HTML e CSS</h3>
                                <h4>Abril de 2024</h4>
                                <div className='div-button'>
                                    <a
                                        href="https://cursos.alura.com.br/user/lucasDavanso/degree-html-css-v527396-527396/certificate"
                                        className="btn"
                                    >
                                        mostrar credencial
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="certification-card">
                            <div className="certification-info">
                                <h3>GERENCIE APLICAÇÕES REACT COM TYPESCRIPT</h3>
                                <h4>Abril de 2024</h4>
                                <div className='div-button'>
                                    <a
                                        href="https://cursos.alura.com.br/user/lucasDavanso/degree-react-ts-v478027-478027/certificate"
                                        className="btn"
                                    >
                                        mostrar credencial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Accordion>
        </section>
    )
}

export default Certifications
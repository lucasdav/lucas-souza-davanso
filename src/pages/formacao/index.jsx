import { Accordion, AccordionSummary, Box, Typography } from '@mui/material'
import '../../styles/components/experience.sass'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
    return (
        <section className='experience-container'>
            <Accordion sx={{ background: '#030637' }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon sx={{ color: '#ffffff' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <SchoolIcon sx={{ color: '#ffffff' }} />
                    <Typography variant='h2' fontWeight={'bold'} marginLeft={2}>Formação Acadêmica</Typography>
                </AccordionSummary>
                <Box margin={2}>
                    <div className="experience-grid">

                        <div className="experience-card">
                            <div className="experience-info">
                                <h3>Fiap - Faculdade de Informática e Administração Paulista</h3>
                                <h4>Pós Graduação Especialização em FULL STACK DEVELOPMENT - jan/2024 - dez/2024 - em andamento</h4>
                            </div>
                        </div>
                        <div className="experience-card">
                            <div className="experience-info">
                                <h3>Unicamp - Universidade Estadual de Campinas</h3>
                                <h4>Mestrado em Engenharia da Computação - 2015 - 2017 - em andamento</h4>
                            </div>
                        </div>
                        <div className="experience-card">
                            <div className="experience-info">
                                <h3>Unifev - Centro Universitário de Votuporanga</h3>
                                <h4>Graduado em Engenharia da Computação - 2010 - 2014</h4>
                            </div>
                        </div>
                        <div className="experience-card">
                            <div className="experience-info">
                                <h3>Etec - Centro Paula Souza</h3>
                                <h4>Técnico em informática para internet - 2011 - 2012</h4>
                            </div>
                        </div>
                        <h2>Idiomas</h2>
                        <div className="experience-grid">

                            <div className="experience-card">
                                <div className="experience-info">
                                    <h3>Inglês</h3>
                                    <h4>Avançado 2008 - Atualmente</h4>
                                </div>
                            </div>
                            <div className="experience-card">
                                <div className="experience-info">
                                    <h3>Espanhol</h3>
                                    <h4>Básico</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </Box>

            </Accordion>

        </section>
    )
}

export default Education
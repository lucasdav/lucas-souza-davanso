import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiAngularSimple,
    DiDotnet,
    DiJava
} from 'react-icons/di'

import { BiLogoTypescript } from "react-icons/bi";

import { PiFileSqlFill } from "react-icons/pi";

import { FaAws, FaVuejs } from "react-icons/fa";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionSummary, Box, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import '../../styles/components/technologiesContainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "typescript", name: "Typescript", icon: <BiLogoTypescript /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
    { id: "dotnet", name: ".Net", icon: <DiDotnet /> },
    { id: "java", name: "Java", icon: <DiJava /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "sql", name: "SQL", icon: <PiFileSqlFill /> },
    { id: "aws", name: "AWS", icon: <FaAws /> },
    { id: "vue", name: "Vue.js", icon: <FaVuejs /> },
];

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
            <Accordion sx={{ background: '#030637' }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon sx={{ color: '#ffffff' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <RocketLaunchIcon sx={{ color: '#ffffff', marginTop: 'inherit' }} />
                    <Typography variant='h2' fontWeight={'bold'} marginLeft={2} marginTop={'inherit'}>Minhas Habilidades</Typography>
                </AccordionSummary>
                <Box margin={2}>
                    <div className="technologies-grid">
                        {
                            technologies.map((tech) => (
                                <div id={tech.id} key={tech.id} className="technology-card">
                                    {tech.icon}
                                    <div className="technology-info">
                                        <h3>{tech.name}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Box>

            </Accordion>
        </section>
    )
}

export default TechnologiesContainer
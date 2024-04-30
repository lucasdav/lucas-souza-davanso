import { Box, Button, Modal } from '@mui/material'
import '../../styles/components/aboutcontainer.sass'
import './styles.sass'
import GetAppIcon from '@mui/icons-material/GetApp';
import USAFlag from "../../img/USAFlag";
import BrazilFlag from "../../img/BrazilFlag";
import { useState } from 'react';
import html2pdf from 'html2pdf.js';

const Home = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 6,
        backgroundColor: '#003C43',
        boxShadow: 24,
        p: 4,
    };

    const downloadBrazilPDF = function () {
        var element = document.getElementById('main-content-pdf');

        const options = {
            margin: [1, 1, 1, 1],
            filename: "CV-Lucas-S-Davanso-Pt.pdf",
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: 'portrait' }
        }

        html2pdf().set(options).from(element).save();
    }

    const downloadEnglishPDF = function () {
        var element = document.getElementById('main-content-english-pdf');

        const options = {
            margin: [1, 1, 1, 1],
            filename: "CV-Lucas-S-Davanso-En.pdf",
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: 'portrait' }
        }

        html2pdf().set(options).from(element).save();
    }
    return (
        <section className="about-container home-section">

            <h2>Eleve seu negócio digital a outro nível com uma aplicação de qualidade!</h2>
            <p>
                Olá! Sou Lucas Davanso, devenvolvedor Full Stack, especialista em frontend utilizando
                React, Angular, Vue, HTML, CSS e Javascript. Ajudo pequenos negócios e designers a colocarem
                em prática boas ideias.
            </p>
            <div className="btn-curriculum">
                <a href="#" onClick={handleOpen} className="btn">
                    <strong>Download CV</strong>
                </a>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} display={"grid"}>
                    <Button
                        variant="contained"
                        onClick={downloadEnglishPDF}
                        className="btn"
                        style={{ marginBottom: 20, height: 68 }}
                        startIcon={<GetAppIcon />}
                        endIcon={<USAFlag />}
                    >
                        Download CV in English
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={downloadBrazilPDF}
                        className="btn"
                        style={{ height: 68 }}
                        startIcon={<GetAppIcon />}
                        endIcon={<BrazilFlag />}
                    >
                        Download CV in Portuguese
                    </Button>
                </Box>
            </Modal>
        </section>
    )
}

export default Home
import Avatar from "../img/profile-image.jpeg";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import html2pdf from 'html2pdf.js';
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import GetAppIcon from '@mui/icons-material/GetApp';
import USAFlag from "../img/USAFlag";
import BrazilFlag from "../img/BrazilFlag";

const Sidebar = () => {
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
        backgroundColor: '#d3eeedf2',
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
        <aside id="sidebar">
            <img src={Avatar} alt="Lucas S Davanso" />
            <h1>Lucas S Davanso</h1>
            <p className="title">Full Stack Developer | AWS Certified | React | Angular | Node</p>
            <SocialNetworks />
            <InformationContainer />
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
        </aside >
    )
}

export default Sidebar
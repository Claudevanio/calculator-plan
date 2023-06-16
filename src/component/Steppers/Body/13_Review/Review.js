import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyPDFViewer from "../../../pdf/pdfView";

function Review() {
  const data = {
    familyName: "Undefined",
    hasMediaBalance: true,
    hasCommunicatingAboutMedia: true,
    familyMembers: [
      {
        id: 1,
        nameMember: "Diego",
        age: "Adult",
        mediaBalance: {
          titleSection:
            "We will help balance tech with online and offline activities by:",
          topicos: [
            "DiegoContente",
            "DiegoContente",
            "DiegoContente",
            "DiegoContente",
            "DiegoContente",
            "DiegoContente",
            "DiegoContente",
          ],
        },
        communicatingAboutMedia: {
          titleSection: "We will communicate about media by:",
          topicos: [
            "DiegoContente",
            "DiegoContente",
            "DiegoContente",
            "DiegoContente",
            "DiegoContente",
            "DiegoContente",
            "DiegoContente",
          ],
        },
      },
      {
        id: 2,
        nameMember: "Van",
        age: "Jovem",
        mediaBalance: {
          titleSection:
            "We will help balance tech with online and offline activities by:",
          topicos: [
            "VanContente",
            "VanContente",
            "VanContente",
            "VanContente",
            "VanContente",
            "VanContente",
            "VanContente",
          ],
        },
        communicatingAboutMedia: {
          titleSection: "We will communicate about media by:",
          topicos: [
            "VanContente",
            "VanContente",
            "VanContente",
            "VanContente",
            "VanContente",
            "VanContente",
            "VanContente",
          ],
        },
      },
    ],
  };

  
    const componentRef = React.useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp-data'
    });


  return (
    <Box >
      <Box sx={{display:'flex', justifyContent:'space-around', padding: '3rem 2rem 4rem 2rem'}}>
        <Box>
          <Button sx={{background:'orange', color:'white'}} onClick={handlePrint}>
            Imprimir el resumo del plan familiar de uso de pantalhas de los {data.familyName}
          </Button>
        </Box>
        <Box>
          <Typography sx={{  textAlign: 'center'}}>
            Ingrese o regístrese para enviar su plan de uso de pantallas por correo electrónico o mensaje de texto
          </Typography>
        </Box>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        {data.familyMembers.map((member, index) => (
        <Tab key={index} label={member.nameMember}  family={data} member={member} {...a11yProps(index)} />
        ))}        
        </Tabs>
      </Box>
      <Box ref={componentRef}>
      {data.familyMembers.map((member, index) => (
      <Review value={value} index={index}>
        <MyPDFReviewComponent key={index} family={data} member={member} />
      </Review>
      ))}  
      </Box>
    
     
    </Box>
  );
}


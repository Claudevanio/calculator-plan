import { Box, Button, Stack } from "@mui/material";
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

  return (
    <Box sx={{ width: "100%", height: "100%"}}>
      {data.familyMembers.map((member, index) => (
        <MyPDFViewer key={index} family={data} member={member} />
      ))}
    </Box>
  );
}

export default Review;

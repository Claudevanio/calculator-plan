import React, { useState } from 'react';
import { Grid, Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import Families from '../Families/Families';
import Priorities from '../Priorites/Priorites';
import MediaBalance from '../MediaBalance/MediaBalance';
import CommunicatingAboutMedia from '../CommunicatingAboutMedia/CommunicatingAboutMedia';
import KindnessAndEmpathy from '../KindnessAndEmpathy/KindnessAndEmpathy';
import DigitalPrivacy from '../DigitalPrivacy/DigitalPrivacy';
import ScreenFreeZones from '../ScreenFreeZones/ScreenFreeZones';
import ScreenFreeTimes from '../ScreenFreeTimes/ScreenFreeTimes';
import ChoosingGoodContent from '../ChoosingGoodContent/ChoosingGoodContent';
import UsingMediaTogether from '../UsingMediaTogether/UsingMediaTogether';
import { FamilyContextProvider } from '../../context/context';
import { useWindowSize } from '../../hooks/useWindowSize';
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";


function Tutorial() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    'Home',
    'Tutorial',
    'My Family',
    'Priorities',
    'Media Balance',
    'Communicating About Media',
    'Kindness & Empathy',
    'Digital Privacy & Safety',
    'Screen Free Zones',
    'Screen Free Times',
    'Choosing Good Content',
    'Using Media Together',
    'Review'
  ];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
  }));

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1Component />;
      case 1:
        return <Box >
          <Box >
            <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: 'white' }}>
              Inserir Video Aqui
            </Box>
          </Box>
        </Box>
      case 2:
        return <FamilyContextProvider> <Families /> </FamilyContextProvider>;
      case 3:
        return <FamilyContextProvider> <Priorities /> </FamilyContextProvider>;
      case 4:
        return <FamilyContextProvider> <MediaBalance /> </FamilyContextProvider>;
      case 5:
        return <FamilyContextProvider> <CommunicatingAboutMedia /></FamilyContextProvider>;
      case 6:
        return <FamilyContextProvider> <KindnessAndEmpathy /></FamilyContextProvider>;
      case 7:
        return <FamilyContextProvider> <DigitalPrivacy /></FamilyContextProvider>;
      case 8:
        return <FamilyContextProvider> <ScreenFreeZones /></FamilyContextProvider>;
      case 9:
        return <FamilyContextProvider> <ScreenFreeTimes /></FamilyContextProvider>;
      case 10:
        return <FamilyContextProvider> <ChoosingGoodContent /></FamilyContextProvider>;
      case 11:
        return <FamilyContextProvider> <UsingMediaTogether /></FamilyContextProvider>;
      case 12:
        return <FamilyContextProvider> <UsingMediaTogether /></FamilyContextProvider>;
      default:
        return null;
    }
  };


  const renderStepContentHeader = (step) => {
   switch (step) {
      case 0:
        return <Step1ComponentHeader />;
      case 1:
        return <Step1ComponentHeader />;
      case 2:
        return <Step2ComponentHeader />;
      case 3:
        return <Step3ComponentHeader />;
      case 4:
        return <Step4ComponentHeader />;
      case 5:
        return <Step5ComponentHeader />;
      case 6:
        return <Step6ComponentHeader />;
      case 7:
        return <Step7ComponentHeader />;
      case 8:
        return <Step8ComponentHeader />;
      case 9:
        return <Step9ComponentHeader />;
      case 10:
        return <Step10ComponentHeader />;
      case 11:
        return <Step11ComponentHeader />;
      default:
        return null;
    }
  };

  const getVisibleSteps = () => {
    if (isMobile(windowSize)) {
      return steps.slice(0, 3);
    } else {
      return steps;
    }
  };

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <SettingsIcon />,
      2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
      4: <SettingsIcon />,
      5: <GroupAddIcon />,
      6: <VideoLabelIcon />,
      7: <SettingsIcon />,
      8: <GroupAddIcon />,
      9: <SettingsIcon />,
      10: <GroupAddIcon />,
      11: <SettingsIcon />,
      12: <SettingsIcon />,
      13: <SettingsIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const windowSize = useWindowSize();

  const DESKTOP_SMALL_SIZE = 1023;
  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;

  return (
   //mobile
    // <Box sx={{marginBottom: '8rem' ,marginTop: '8rem', background: 'yellow',}} >
    //   <Box >
    //     <Box sx={{ background: 'white'}}>
    //         {renderStepContentHeader(activeStep)}
    //     <Box>
    //     <Box sx={{marginTop: '2rem', background: 'white'}}>

    //       <Stepper alternativeLabel activeStep={activeStep}  connector={<ColorlibConnector/>}>
    //         {getVisibleSteps().map((label) => (
    //         <Step key={label}>
    //           <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
    //         </Step>
    //         ))}
    //       </Stepper>

    //     <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
    //       Back
    //     </Button>
    //     <Button variant="contained" onClick={handleNext}>
    //     {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
    //     </Button>
    //     </Box>
    //   </Box>

    //  <Box >
    //     <Box sx={{ padding: '2rem', }}>
    //       {renderStepContent(activeStep)}
    //     </Box>
    //     <Box sx={{ padding: '2rem', background: '#FAFAEF'}}>
    //       <Box >
    //         <Box sx={{ marginBottom: '5rem'}}>
    //           <Typography >​The information contained on this website should not be used as a substitute for the medical care and advice of your pediatrician. There may be variations in treatment that your pediatrician may recommend based on individual facts and circumstances.​</Typography>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    //     </Box>

    //   </Box>
    // </Box>

    <Box
    marginTop={isMobile(windowSize) ? "3rem" : "8rem"}>
      <Box>
        <Box
          sx={{ background: "white"}}
          marginLeft={isMobile(windowSize) ? "0rem" : "8rem"}
          marginRight={isMobile(windowSize) ? "0rem" : "8rem"}
        >
          {renderStepContentHeader(activeStep)}
          <Box>
          <Box sx={{marginTop: '2rem', background: 'white'}}>
            <Stepper alternativeLabel activeStep={activeStep}  connector={<ColorlibConnector/>}>
              {getVisibleSteps().map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
              ))}
            </Stepper>

            <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
            </Button>
            <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
          </Box>

          <Box>
            <Box
            marginLeft={isMobile(windowSize) ? "0rem" : "1rem"}
            marginRight={isMobile(windowSize) ? "0rem" : "1rem"}
            padding={isMobile(windowSize) ? "1rem" : "2rem"}q
            >
              {renderStepContent(activeStep)}
            </Box>
            <Box sx={{ padding: "2rem", background: "#FAFAEF" }}>
              <Box>
                <Box sx={{ marginBottom: "5rem" }}>
                  <Typography>
                    ​The information contained on this website should not be
                    used as a substitute for the medical care and advice of your
                    pediatrician. There may be variations in treatment that your
                    pediatrician may recommend based on individual facts and
                    circumstances.​
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

}

const Step1Component = () => {
  return <div>Step 1 Content</div>;
};

const Step2Component = () => {
  return <div>Step 2 Content</div>;
};

const Step3Component = () => {
  return <div>Step 3 Content</div>;
};


const Step1ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">​Learn to Use the Family Media Plan</Typography>
    </Box>
  );
};

const Step2ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">
        Create or Update Your Family Media Plan
      </Typography>
      <Typography sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        To get started, create a profile for each member of your family. Include
        th​eir names and ages. You can even add fun avatars for each family
        member. Add as many family members as you need.​​​​​
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Typography>
          To find this information in Spanish, click ​here.
        </Typography>
      </Box>
    </Box>
  );
};

const Step3ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">Choose Your Media Priorities</Typography>
      <Typography sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        Select priorities from the list below that matter the most ​​​to your
        family.​​​​​
      </Typography>
    </Box>
  );
};

const Step4ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">Media Balance</Typography>
      <Typography sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        ​Whether at home, school or work, we are surrounded by media and digital
        devices. At the same time, we know that face-to-face time with family,
        friends and teachers is important to a child’s learning and healthy
        development.​​​​​
      </Typography>
    </Box>
  );
};

const Step5ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">Communicating About Media</Typography>
      <Typography sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        Media shouldn’t be a taboo topic. It’s all around us, so we have to
        talk​ about it. The more you discuss it as part of your daily routine —
        in the car, dinner table or at a regular family meeting —​ the more
        natural it will become. ​
      </Typography>
    </Box>
  );
};

const Step6ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">Kindness & Empathy</Typography>
      <Typography sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        Having family expectations about being kind and understanding of others
        — both online and off — is key to healthy, respectful relationships and
        positive media use. ​
      </Typography>
    </Box>
  );
};

const Step7ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">Digital Privacy & Safety</Typography>
      <Typography sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        ​The internet is still a bit like the Wild West. Certainly, it is not
        always designed with kids in mind. Talking about digital safety rules
        can help your child navigate the digital landscape. You can also use a
        combination of tools: privacy settings, reporting and flagging
        inappropriate content and ongoing conversations about online behavior. ​
        ​
      </Typography>
    </Box>
  );
};

const Step8ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">Screen Free Zones</Typography>
      <Typography sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        ​​​​​​Having areas of your home remain screen-free benefits a child's
        health and development in many ways. A big part of this is understanding
        and agreeing as a family where screens are not allowed. ​
      </Typography>
    </Box>
  );
};

const Step9ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">Screen Free Times</Typography>
      <Typography sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        ​Screens don't have to be in every moment and every space of our day,
        trying to grab everyone's attention. Carving out time for family
        conversations and play is really important for your child’s health and
        development. ​
      </Typography>
    </Box>
  );
};

const Step10ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">Choosing Good Content</Typography>
      <Typography sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        ​​​​​There are millions of shows, apps and video games​ trying to get
        your family’s attention. Finding content that is a good fit with your
        family can take work. However, it’s worth it to find media that gives
        your child creative experiences, positive role models and true
        enjoyment.​ ​
      </Typography>
    </Box>
  );
};

const Step11ComponentHeader = () => {
  return (
    <Box sx={{ padding: "2rem", background: "#D5D3C1" }}>
      <Typography variant="h4">Using Media Together</Typography>
      <Typography sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        ​​​​​​​​​​Not all screen time is created equal. Enjoying movie night,
        watching an educational video or exploring a learning app together, for
        example, turns screen time into family time. Using digital media
        together can build bonds, promote learning and show your child that you
        care about what matters to them. ​​ ​
      </Typography>
    </Box>
  );
};

export default Tutorial;

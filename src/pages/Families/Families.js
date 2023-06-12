import {
    Box,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
  } from "@mui/material";
  import * as React from "react";
  import { useWindowSize } from "../../hooks/useWindowSize";
  import { isWindow } from "jquery";
  import { DeleteButton } from "./styles";
import { AvatarWithBadge } from "../../component/AvatarWithBadge";

  function FamilyMemberComponent() {
    const [age, setAge] = React.useState("13-18");
  
    const windowSize = useWindowSize();
  
    console.log(windowSize);
  
    const handleAge = (event, newAge) => {
      setAge(newAge);
    };
  
    const DESKTOP_SMALL_SIZE = 1023;
    const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;
  
    return (
      <Box
        display="flex"
        flexDirection={isMobile(windowSize) ? "column" : "row"}
        alignItems={isMobile(windowSize) ? "flex-start" : "center"}
        sx={{ backgroundColor: "#ffffff", position: "relative" }}
        border={1}
        borderRadius={1}
        padding={1}
        gap={2}
      >
        <Stack direction="row" alignItems="center" gap={4}>
          <AvatarWithBadge
            url={"https://www.pngmart.com/files/5/Poro-PNG-Image.png"}
            onSmallBadgeClick={() => {
              console.log(
                "Implementar logica para abrir a midal para editar o avatar."
              );
            }}
          />
          <Box>
          <Typography>Family Member's Name</Typography>
          <TextField id="outlined-basic" label="Family Member's Name" />
          </Box>
        </Stack>
  
        {/* TODO: adicionar bot"ao para remover o componente ao clicar aqui, deve ser o iconde  removeer... */}
        <DeleteButton />
  
        <Box >
          <Typography>Age</Typography>
          {/* <br /> */}
          <ToggleButtonGroup
            sx={{height: '3.5rem'}}
            exclusive
            value={age}
            onChange={handleAge}
          >
            <ToggleButton value="0-24" sx={{padding: '0px'}}> 0-24 months</ToggleButton>
            <ToggleButton value="2-3" sx={{padding: '0px'}}> 2-3 years</ToggleButton>
            <ToggleButton value="6-12" sx={{padding: '0px'}}> 6-12 years</ToggleButton>
            <ToggleButton value="13-18" sx={{padding: '0px'}}> 13-18 years</ToggleButton>
            <ToggleButton value="adult" sx={{padding: '0px'}}> Adult </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
    );
  }
  
  export default FamilyMemberComponent;
  
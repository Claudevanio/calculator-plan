import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  Box,
  Button,
  Grid,
  Stack,
  ToggleButton,
  Typography,
} from "@mui/material";
import { useFamily } from "../../context/context";
import { useState } from "react";

function SelectPrioritesToMemberFamilyComponent({ data }) {
  const { members, setMembers } = useFamily();
  const windowSize = useWindowSize();

  const DESKTOP_SMALL_SIZE = 1023;
  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;

  const { text, stepper } = data;

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleToggle = (memberId) => {
    setMembers((prevMembers) => {
      return prevMembers.map((member) => {
        if (member.id === memberId) {
          // Verificar se o valor já existe no array mediaBalance do membro
          const mediaBalance = member.mediaBalance.includes(stepper)
            ? member.mediaBalance.filter((value) => value !== stepper)
            : [...member.mediaBalance, stepper];

          // Atualizar a propriedade mediaBalance do membro encontrado
          return {
            ...member,
            mediaBalance: mediaBalance,
          };
        }
        return member;
      });
    });

    console.log(members);

    if (!selectedButtons.includes(memberId)) {
    }
    setSelectedButtons([...selectedButtons, memberId]);

    if (selectedButtons.includes(memberId))
      setSelectedButtons(selectedButtons.filter((id) => id !== memberId));
  };

  return (
    <Box
      display={isMobile(windowSize) ? "grid" : "flex"}
      justifyContent={isMobile(windowSize) ? "" : "space-between"}
      backgroundColor="#ffffff"
      border={1}
      borderRadius={1}
      padding={2}
    >
      <Box sx={{ maxWidth: "55%" }}>
        <Stack direction="row">
          <SelfImprovementIcon fontSize="large" color="success" />
          <Stack>
            <Typography variant="h6"> {text[0]} </Typography>
            <Box>
              <Button variant="outlined"> Reason / Tips</Button>
              <Button variant="outlined"> UnselectAll </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ maxHeight: "45%" }}>
        <Grid container gap={2}>
          {members.map((member, index) => (
            <Grid item key={index}>
              <ToggleButton
                selected={selectedButtons.includes(member.id)}
                onChange={() => handleToggle(member.id)}
                sx={{ textTransform: "none", minWidth: "10rem" }}
              >
                <Stack gap={1} direction="row" height={42}>
                  <Stack>
                    <Box
                      borderRadius={"16rem"}
                      border={1}
                      component="img"
                      sx={{
                        height: 48,
                        width: 48,
                        padding: 1,
                      }}
                      alt="The house from the offer."
                      src="https://www.pngmart.com/files/5/Poro-PNG-Image.png"
                    />
                  </Stack>

                  <Stack>
                    <Typography variant="h6">
                      {member ? member.nameMember : ""}
                    </Typography>
                    <Typography
                      variant="h9"
                      display="flex"
                      justifyContent="start"
                    >
                      {member.age ? member.age : ""}
                    </Typography>
                  </Stack>
                </Stack>
              </ToggleButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default SelectPrioritesToMemberFamilyComponent;

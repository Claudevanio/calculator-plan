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
import { useEffect, useState } from "react";

function SelectPrioritesToMemberFamilyComponent({ data, index }) {
  const { members, setMembers } = useFamily();
  const [selectedButtons, setSelectedButtons] = useState([]);
  const windowSize = useWindowSize();

  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;
  const DESKTOP_SMALL_SIZE = 1023;

  const { text, stepper } = data;
  console.log(members)

  const handleToggle = (memberId) => {
    debugger;

    setMemberSelected((prevMemberSelected) => {
      const isSelected = !prevMemberSelected[memberId];
      return {
        ...prevMemberSelected,
        [memberId]: isSelected,
      };
    });

    setMembers((prevMembers) => {
      return prevMembers.map((member) => {
        debugger;
        if (member.id === memberId) {
          debugger;

          // Verificar se o valor já existe no array mediaBalance do membro
          const section = member[stepper].includes(text[index])
            ? member[stepper].filter((value) => value !== text[index])
            : [...member[stepper], text[index]];
          console.log(section);

          if (section) setSelectedButtons(true);

          if (!section) setSelectedButtons(false);
          // Atualizar a propriedade mediaBalance do membro encontrado
          return {
            ...member,
            [stepper]: section,
          };
        }

        return member;
      });
    });

    if (!selectedButtons.includes(memberId)) {
    }

    setSelectedButtons([...selectedButtons, memberId]);

    if (selectedButtons.includes(memberId))
      setSelectedButtons(selectedButtons.filter((id) => id !== memberId));
  };

  const [memberSelected, setMemberSelected] = useState({});

  // ...

  useEffect(() => {
    const initialMemberSelected = {};
    debugger
    members.map((member) => { 
      debugger
      let teste = member[stepper];
      let teste2 = member.mediaBalance;
      console.log(member[stepper])
      console.log(teste)
      console.log(teste2)
      const isSelected = member[stepper].includes(text[index]);
      initialMemberSelected[member.id] = isSelected;
    });

    setMemberSelected(initialMemberSelected);
  }, [members, text, index]);

  return (
    <Box
      display={isMobile(windowSize) ? "grid" : "flex"}
      justifyContent={isMobile(windowSize) ? "" : "space-between"}
      backgroundColor="#ffffff"
      border={1}
      borderRadius={1}
      padding={2}
    >
      <Box >
        <Stack direction="row">
          <SelfImprovementIcon fontSize="large" color="success" />
          <Stack>
            <Typography variant="h6"> {text[index]} </Typography>
            <Box>
              <Button variant="outlined"> Reason / Tips</Button>
              <Button variant="outlined"> UnselectAll </Button>
            </Box>
          </Stack>
        </Stack >
      </Box>

      <Box sx={{ maxHeight: "45%" }}>
        <Grid container gap={2}>
          {members.map((member, index) => (
            <Grid item key={index}>
              <ToggleButton
                selected={memberSelected[member.id]}
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
                      {member.nameMember ? member.nameMember : ""}
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

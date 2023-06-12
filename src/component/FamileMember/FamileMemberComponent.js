import { Box, IconButton, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { AvatarWithBadge } from "../AvatarWithBadge";
import { CleaningServicesOutlined } from "@mui/icons-material";
import { DeleteButton } from "./styles";
import FamilyMember from "../../entities/familyMember";
import { useFamily } from "../../context/context";

function FamiliyMemberComponent({ onDelete, id }) {
  const { setMembers, members, hasThisFamilyMember } = useFamily();
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const windowSize = useWindowSize();

  const DESKTOP_SMALL_SIZE = 1023;
  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;

  const handleSelectAge = (event, newAge) => {
    setAge(newAge);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const addFamilyMember = () => {
    const newMember = new FamilyMember(id, name, age)
    const hasId = hasThisFamilyMember(id);

    if (hasId) {
      let updatedMembers = members.map((member) => {
        if (member.id == id) {
          return { ...member, ...newMember }
        }
        return member
      })
      setMembers(updatedMembers);
    } else {
      members.push(newMember)
    }
  };

 

  useEffect(() => {
    addFamilyMember();
    console.log(members)
  }, [age]); 

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

        <TextField id="name-member-input" value={name} onBlur={addFamilyMember} onChange={handleName} label="Family Member's Name" />
      </Stack>

      {/* TODO: adicionar bot"ao para remover o componente ao clicar aqui, deve ser o iconde  removeer... */}
      <DeleteButton />

      <Box>
        <Typography>Age</Typography>
        <br />
        <ToggleButtonGroup
          size="small"
          exclusive
          value={age}
          onChange={handleSelectAge}
        >
          <ToggleButton value="0-24"> 0-24 months</ToggleButton>
          <ToggleButton value="2-3"> 2-3 years</ToggleButton>
          <ToggleButton value="6-12"> 6-12 yearss</ToggleButton>
          <ToggleButton value="13-18"> 13-18 years</ToggleButton>
          <ToggleButton value="adult"> Adult </ToggleButton>
        </ToggleButtonGroup>

        <IconButton aria-label="delete" onClick={onDelete}>
          <CleaningServicesOutlined color="error" fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default FamiliyMemberComponent;
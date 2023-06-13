import {
  Box,
  IconButton,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { AvatarWithBadge } from "../AvatarWithBadge";
import { CleaningServicesOutlined } from "@mui/icons-material";
import { DeleteButton } from "./styles";
import FamilyMember from "../../entities/familyMember";
import { useFamily } from "../../context/context";
import { StyleToggleButton } from "../AvatarWithBadge/styles";

function FamiliyMemberComponent({ onDelete, id }) {
  const {setMembers, members, hasThisFamilyMember } = useFamily();
  const [familyMember, setFamilyMember] = useState({ nameMember: "", age: "" });

  const getDataMembers = () => {
    const currentMember = members.find((member) => member.id === id);
    if (currentMember) {
      setFamilyMember(currentMember);
    }
  };

  const windowSize = useWindowSize();

  const DESKTOP_SMALL_SIZE = 1023;
  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;

  const handleInputChange = (field, value) => {
    setFamilyMember((prevMember) => ({ ...prevMember, [field]: value }));
  };

  const addFamilyMember = () => {
    const newMember = new FamilyMember(
      id,
      familyMember.nameMember,
      familyMember.age
    );
    const hasId = hasThisFamilyMember(id);

    if (!hasId) {
      members.push(newMember);
      return;
    }

    let updatedMembers = members.map((member) => {
      if (member.id == id) {
        return { ...member, ...newMember };
      }
      return member;
    });
    setMembers(
      updatedMembers
      //localStorage.setItem('familyMembers', members.toString())
    );
  };

 

  useEffect(() => {
    addFamilyMember();
  }, [familyMember.age]);

  useEffect(() => {
    getDataMembers();
  }, []);

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
          <TextField
            id="name-member-input"
            value={familyMember.nameMember}
            onBlur={addFamilyMember}
            onChange={(e) =>
              handleInputChange("nameMember", e.currentTarget?.value)
            }
            label="Family Member's Name"
          />
        </Box>
      </Stack>

      {/* TODO: adicionar bot"ao para remover o componente ao clicar aqui, deve ser o iconde  removeer... */}
      <DeleteButton />

      <Box>
        <Typography>Age</Typography>
        <ToggleButtonGroup
          sx={{ height: "3.5rem" }}
          exclusive
          value={familyMember.age}
          onChange={(_, value) => handleInputChange("age", value)}
        >
          <StyleToggleButton value="0-24"> 0-24 months</StyleToggleButton>
          <StyleToggleButton value="2-3"> 2-3 years</StyleToggleButton>
          <StyleToggleButton value="6-12"> 6-12 yearss</StyleToggleButton>
          <StyleToggleButton value="13-18"> 13-18 years</StyleToggleButton>
          <StyleToggleButton value="adult"> Adult </StyleToggleButton>
        </ToggleButtonGroup>

        <IconButton aria-label="delete" onClick={onDelete}>
          <CleaningServicesOutlined color="error" fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default FamiliyMemberComponent;

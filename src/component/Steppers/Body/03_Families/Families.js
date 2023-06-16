import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FamiliyMemberComponent from "../../../FamileMember/FamileMemberComponent";
import { useFamily } from "../../../../context/context";
import { useEffect } from "react";

function Families() {
  const {
    family,
    createFamily,
    members,
    setMembers,
    countFamilyMembersComponent,
    setCountFamilyMembersComponent,
    generateId,
  } = useFamily();

  const handleCreateFamily = (event) => {
    debugger;
    event.preventDefault();
    const familyName = event.target.value;
    createFamily(familyName);
  };

  const handleCreateMemberFamilyComponent = () => {
    debugger;
    setMembers((prevMembers) => [
      ...prevMembers,
      {
        id: generateId(),
      },
    ]);
  };

  const handleDeleteMemberFamily = (member) => {
    if (countFamilyMembersComponent.length > 1)
      setCountFamilyMembersComponent((prevMembers) =>
        prevMembers.filter(
          (prevMember) => prevMember.id !== member.id
        )
      );

    setMembers((prevMembers) =>
      prevMembers.filter((prevMember) => prevMember.id !== member.id)
    );
  };

  useEffect(() => {
    debugger;
    console.log("dsad");
  }, []);

  return (
    <Stack>
      <Box
        container
        justifyContent={"center"}
        display={"flex"}
        marginBottom={4}
      >
        <TextField
          id="outlined-basic"
          value={family.familyName}
          onChange={handleCreateFamily}
          label="Enter your family name"
          sx={{ mt: "2rem" }}
        />
      </Box>
      <Divider variant="middle" />
      <Box margin={2}>
        <Typography variant="h5">My Family</Typography>
        <Button variant="outlined" onClick={handleCreateMemberFamilyComponent}>
          Add Another Family Member
        </Button>
      </Box>

      <Box>
        {members &&
          members.map((member, index) => (
            <Box mb={2} key={member.id}>
              <FamiliyMemberComponent
                currentMember={member}
                id={member.id}
                onDelete={() => handleDeleteMemberFamily(member)}
              />
            </Box>
          ))}

        {/* {members.length !== 0 &&
          members.map((member, index) => (
            <Box mb={2} key={member.id}>
              <FamiliyMemberComponent
                currentMember={member}
                onDelete={() => handleDeleteMemberFamily(member)}
              />
            </Box>
          ))} */}

      </Box>
    </Stack>
  );
}

export default Families;

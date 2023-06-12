import {
    Box,
    Button,
    Divider,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useFamily } from "../../context/context";
import FamiliyMemberComponent from "../../component/FamileMember/FamileMemberComponent";

const generateId = () => Math.random() * 10_000_000

function Families() {
    const { createFamily } = useFamily();
    const [familyMembers, setFamilyMembers] = useState([{ internalId: generateId() }, { internalId: generateId() }]);

    const handleCreateFamily = (event) => {
        event.preventDefault();
        const familyName = event.target.value;
        createFamily(familyName);
    };

    const handleCreateMemberFamilyComponent = () => {
        setFamilyMembers((prevMembers) => [...prevMembers, {
            internalId: generateId()
        }]);
    };

    const handleDeleteMemberFamily = (member) => {
        if (familyMembers.length > 1) setFamilyMembers((prevMembers) => prevMembers.filter((prevMember) => prevMember.internalId !== member.internalId));
    };

    return (
        <Stack>

            <Box container justifyContent={'center'} display={"flex"} marginBottom={4}>
                <TextField id="outlined-basic" onChange={handleCreateFamily} label="Enter your family name" sx={{ mt: "2rem" }} />
            </Box>
            <Divider variant="middle" />
            <Box margin={2}>
                <Typography variant="h5">My Family</Typography>
                <Button variant="outlined" onClick={handleCreateMemberFamilyComponent}>Add Another Family Member</Button>
            </Box>

            <Box>
                {familyMembers.map((member, index) => (
                    <Box mb={2} key={member.internalId}>
                        <FamiliyMemberComponent internalId={member.internalId} onDelete={() => handleDeleteMemberFamily(member)} />
                    </Box>
                ))}
            </Box>

        </Stack>
    );
}

export default Families;

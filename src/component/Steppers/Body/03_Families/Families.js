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



function Families() {
    const { family, createFamily, setMembers, countFamilyMembersComponent, setCountFamilyMembersComponent, generateId } = useFamily();



    const handleCreateFamily = (event) => {
        event.preventDefault();
        const familyName = event.target.value;
        createFamily(familyName);
    };

    const handleCreateMemberFamilyComponent = () => {
        setCountFamilyMembersComponent((prevMembers) => [...prevMembers, {
            internalId: generateId()
        }]);
    };

    const handleDeleteMemberFamily = (member) => {
        if (countFamilyMembersComponent.length > 1)
            setCountFamilyMembersComponent((prevMembers) => prevMembers.filter((prevMember) => prevMember.internalId !== member.internalId));

        setMembers((prevMembers) => prevMembers.filter((prevMember) => prevMember.id !== member.internalId));
    };

    return (
        <Stack>

            <Box container justifyContent={'center'} display={"flex"} marginBottom={4}>
                <TextField id="outlined-basic" value={family.familyName} onChange={handleCreateFamily} label="Enter your family name" sx={{ mt: "2rem" }} />
            </Box>
            <Divider variant="middle" />
            <Box margin={2}>
                <Typography variant="h5">My Family</Typography>
                <Button variant="outlined" onClick={handleCreateMemberFamilyComponent}>Add Another Family Member</Button>
            </Box>

            <Box>
                {countFamilyMembersComponent.map((member, index) => (
                    <Box mb={2} key={member.internalId}>
                        <FamiliyMemberComponent member={member} id={member.internalId} onDelete={() => handleDeleteMemberFamily(member)} />
                    </Box>
                ))}
            </Box>

        </Stack>
    );
}

export default Families;

import { Box, Grid, Typography } from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SelectPrioritesToMemberFamilyComponent from "../../component/SelectMediaBalance/SelectPrioritesToMemberFamilyComponent";


function KindnessAndEmpathy() {

    return (
        <Grid >
            <Box>
                <Typography variant="h4"> <EmojiPeopleIcon fontSize="large"/> We will emphasize kindness and empathy when using technology by: </Typography>
            </Box>
            <Box>
                <Grid container gap={4}>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Respeitar os outros, tanto online quanto pessoalmente.' /> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Respeitar os outros, tanto online quanto pessoalmente.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Respeitar os outros, tanto online quanto pessoalmente.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Respeitar os outros, tanto online quanto pessoalmente.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Respeitar os outros, tanto online quanto pessoalmente.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Respeitar os outros, tanto online quanto pessoalmente.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Respeitar os outros, tanto online quanto pessoalmente.'/> </Grid>
                </Grid>
            </Box>
        </Grid>
    );

}

export default KindnessAndEmpathy;

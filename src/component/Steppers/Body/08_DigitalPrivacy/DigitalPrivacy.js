import { Box, Grid, Typography } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import SelectPrioritesToMemberFamilyComponent from "../../component/SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";


function DigitalPrivacy() {

    return (
        <Box>
            <Box>
                <Typography variant="h4"> <AddTaskIcon fontSize="large"/> We will set and discuss digital safety rules by: </Typography>
            </Box>

            <Box>
                <Grid container gap={4}>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Trying to avoid oversharing.' /> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Trying to avoid oversharing.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Trying to avoid oversharing.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Trying to avoid oversharing.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Trying to avoid oversharing.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Trying to avoid oversharing.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Trying to avoid oversharing.'/> </Grid>

                </Grid>
            </Box>
        </Box>
    );

}

export default DigitalPrivacy;

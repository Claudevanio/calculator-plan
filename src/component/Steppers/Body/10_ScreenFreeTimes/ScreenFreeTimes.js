import { Box, Grid, Typography } from "@mui/material";
import NoCellIcon from '@mui/icons-material/NoCell';
import SelectPrioritesToMemberFamilyComponent from "../../component/SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";


function ScreenFreeTimes() {

    return (
        <Box>
            <Box>
                <Typography variant="h4"> <NoCellIcon fontSize="large"/> We will choose times and spaces where we don't want distractions from screens by: </Typography>
            </Box>

            <Box>
                <Grid container gap={4}>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Choosing which days of the week are OK for screens and media.' /> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Choosing which days of the week are OK for screens and media.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Choosing which days of the week are OK for screens and media.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Choosing which days of the week are OK for screens and media.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Choosing which days of the week are OK for screens and media.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Choosing which days of the week are OK for screens and media.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Choosing which days of the week are OK for screens and media.'/> </Grid>

                </Grid>
            </Box>
        </Box>
    );

}

export default ScreenFreeTimes;

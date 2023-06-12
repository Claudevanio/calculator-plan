import { Box, Grid, Typography } from "@mui/material";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SelectPrioritesToMemberFamilyComponent from "../../component/SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";


function ScreenFreeZones() {

    return (
        <Box>
            <Box>
                <Typography variant="h4"> <CancelPresentationIcon fontSize="large"/> We will create some screen-free zones for our family by: </Typography>
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

export default ScreenFreeZones;

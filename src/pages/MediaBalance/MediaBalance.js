import { Box, Button, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FamiliyMemberComponent from "../../component/FamileMember/FamileMemberComponent";
import CheckBoxPriorites from "../../component/CheckBoxPriorites/CheckBoxPrioritesComponent";
import SelectPrioritesToMemberFamilyComponent from "../../component/SelectMediaBalance/SelectPrioritesToMemberFamilyComponent";


function MediaBalance() {

    return (
        <Box>
            <Box>
                <Typography variant="h4"> <DirectionsBikeIcon fontSize="large"/>  We will help balance tech with online and offline activities by: </Typography>
            </Box>

            <Box>
                <Grid container gap={24}>
                    <Grid > <SelectPrioritesToMemberFamilyComponent text='Planning a screen-free activity to do together as a family every day.' /> </Grid>
                    <Grid > <SelectPrioritesToMemberFamilyComponent text='Planning a screen-free activity to do together as a family every day.'/> </Grid>
                    <Grid > <SelectPrioritesToMemberFamilyComponent text='Planning a screen-free activity to do together as a family every day.'/> </Grid>
                    <Grid > <SelectPrioritesToMemberFamilyComponent text='Planning a screen-free activity to do together as a family every day.'/> </Grid>
                    <Grid > <SelectPrioritesToMemberFamilyComponent text='Planning a screen-free activity to do together as a family every day.'/> </Grid>
                    <Grid > <SelectPrioritesToMemberFamilyComponent text='Planning a screen-free activity to do together as a family every day.'/> </Grid>
                    <Grid > <SelectPrioritesToMemberFamilyComponent text='Planning a screen-free activity to do together as a family every day.'/> </Grid>
                </Grid>
            </Box>
        </Box>
    );

}

export default MediaBalance;

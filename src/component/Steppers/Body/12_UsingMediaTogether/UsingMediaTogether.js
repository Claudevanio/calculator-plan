import { Box, Grid, Typography } from "@mui/material";
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import SelectPrioritesToMemberFamilyComponent from "../../component/SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";


function UsingMediaTogether() {

    return (
        <Box>
            <Box>
                <Typography variant="h4"> <SlideshowOutlinedIcon fontSize="large"/> We will use media together more often by: </Typography>
            </Box>

            <Box>
                <Grid container gap={4}>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Planning family movie nights.' /> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Planning family movie nights.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Planning family movie nights.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Planning family movie nights.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Planning family movie nights.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Planning family movie nights.'/> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Planning family movie nights.'/> </Grid>

                </Grid>
            </Box>
        </Box>
    );

}

export default UsingMediaTogether;

import { Box, Button, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import FamiliyMemberComponent from "../../component/FamileMember/FamileMemberComponent";
import CheckBoxPriorites from "../../component/CheckBoxPriorites/CheckBoxPrioritesComponent";


function Priorities() {

    return (
        <Box>
            <Box>
                <Button > Unselect All
                </Button>
                <Divider variant="middle" />
                <Box>

                    <Grid container gap={8}>
                        <Grid item xs={5}> <CheckBoxPriorites /> </Grid>
                        <Grid item xs={5}> <CheckBoxPriorites /> </Grid>
                        <Grid item xs={5}> <CheckBoxPriorites /> </Grid>
                        <Grid item xs={5}> <CheckBoxPriorites /> </Grid>
                        <Grid item xs={5}> <CheckBoxPriorites /> </Grid>
                        <Grid item xs={5}> <CheckBoxPriorites /> </Grid>
                        <Grid item xs={5}> <CheckBoxPriorites /> </Grid>
                    </Grid>
                </Box>
                <Divider variant="middle" />
                <Box marginTop={5}>
                    <Typography variant="h5">Tip: Select just a few priorities to start. You can come back and add more goals to try later. Choosing priorities that motivate you the most can make it easier to stick with a Family Media Plan. Involving your kids in the choices may also help.</Typography>
                </Box>

            </Box>
        </Box>
    );

}

export default Priorities;

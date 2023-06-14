import { Box, Grid, Typography } from "@mui/material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";

function MediaBalance() {
  const { datas } = useFamily();

  return (
    <Box>
      <Box>
        <Typography variant="h4">
          {" "}
          <DirectionsBikeIcon fontSize="large" /> We will help balance tech with
          online and offline activities by:{" "}
        </Typography>
      </Box>

      <Box>
        <Grid container gap={4}>
          <Grid item>
            {" "}
            <SelectPrioritesToMemberFamilyComponent
              data={datas[0]}
            />{" "}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MediaBalance;

import { Box, Grid, Typography } from "@mui/material";
import NoCellIcon from "@mui/icons-material/NoCell";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";

function ScreenFreeTimes() {
  const { datas } = useFamily();
  return (
    <Box>
      <Box>
        <Typography variant="h4">
          {" "}
          <NoCellIcon fontSize="large" /> We will choose times and spaces where
          we don't want distractions from screens by:{" "}
        </Typography>
      </Box>

      <Box>
        <Grid container gap={4}>
          <Grid item xs={12}>
            {" "}
            <SelectPrioritesToMemberFamilyComponent data={datas[0]} />{" "}
          </Grid>{" "}
        </Grid>
      </Box>
    </Box>
  );
}

export default ScreenFreeTimes;

import { Box, Grid, Typography } from "@mui/material";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";

function UsingMediaTogether() {
  const { datas } = useFamily();
  return (
    <Box>
      <Box>
        <Typography variant="h4">
          {" "}
          <SlideshowOutlinedIcon fontSize="large" /> We will use media together
          more often by:{" "}
        </Typography>
      </Box>

      <Box>
        <Grid container gap={4}>
          <Grid item xs={12}>
            <SelectPrioritesToMemberFamilyComponent data={datas[0]} />{" "}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default UsingMediaTogether;

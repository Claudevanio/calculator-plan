import { Box, Grid, Typography } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";

function DigitalPrivacy() {
  const { datas } = useFamily();
  return (
    <Box>
      <Box>
        <Typography variant="h4">
          {" "}
          <AddTaskIcon fontSize="large" /> We will set and discuss digital
          safety rules by:{" "}
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

export default DigitalPrivacy;

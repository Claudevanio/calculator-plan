import { Box, Grid, Typography } from "@mui/material";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";

function ChoosingGoodContent() {
  const { datas } = useFamily();
  return (
    <Box>
      <Box>
        <Typography variant="h4">
          {" "}
          <AddReactionOutlinedIcon fontSize="large" /> We will choose good
          content for our family by:{" "}
        </Typography>
      </Box>

      <Box>
        <Grid container gap={4}>
          <Grid item xs={12}>
            {" "}
            <SelectPrioritesToMemberFamilyComponent data={datas[1]} />{" "}
          </Grid>{" "}
        </Grid>
      </Box>
    </Box>
  );
}

export default ChoosingGoodContent;

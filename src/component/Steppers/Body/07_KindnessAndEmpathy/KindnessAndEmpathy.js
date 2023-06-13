import { Box, Grid, Typography } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SelectPrioritesToMemberFamilyComponent from "../../../SelectPrioritesToMemberFamily/SelectPrioritesToMemberFamilyComponent";
import { useFamily } from "../../../../context/context";

function KindnessAndEmpathy() {
  const { datas } = useFamily();
  return (
    <Grid>
      <Box>
        <Typography variant="h4">
          {" "}
          <EmojiPeopleIcon fontSize="large" /> We will emphasize kindness and
          empathy when using technology by:{" "}
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
    </Grid>
  );
}

export default KindnessAndEmpathy;

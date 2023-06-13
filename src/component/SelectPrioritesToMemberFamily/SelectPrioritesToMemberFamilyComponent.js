import * as React from "react";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useFamily } from "../../context/context";

function SelectPrioritesToMemberFamilyComponent({ text, member }) {
  const { members } = useFamily();
  const DESKTOP_SMALL_SIZE = 1023;
  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;
  const windowSize = useWindowSize();

  return (
    <Box
      display={isMobile(windowSize) ? "grid" : "flex"}
      justifyContent={isMobile(windowSize) ? "" : "space-between"}
      backgroundColor="#ffffff"
      border={1}
      borderRadius={1}
      padding={2}
    >
      <Box>
        <Stack direction="row" gap>
          <SelfImprovementIcon fontSize="large" color="success" />
          <Stack>
            <Typography variant="h6"> {text} </Typography>
            <Box>
              <Button variant="outlined"> Reason / Tips</Button>
              <Button variant="outlined"> UnselectAll </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ maxHeight: "45%" }}>
        <Grid container gap={2}>
          {members.map((member, index) => (
            <Grid item xl={6} key={index}>
              <ToggleButton sx={{ textTransform: "none", minWidth: "10rem" }}>
                <Stack gap={1} direction="row" height={42}>
                  <Stack alignItems="center">
                    <Box
                      borderRadius={"16rem"}
                      border={1}
                      component="img"
                      sx={{
                        height: 48,
                        width: 48,
                        padding: 1,
                      }}
                      alt="The house from the offer."
                      src="https://www.pngmart.com/files/5/Poro-PNG-Image.png"
                    />
                  </Stack>

                  <Stack>
                    <Typography variant="h6">
                      {member ? member.nameMember : ""}
                    </Typography>
                    <Typography
                      variant="h9"
                      display="flex"
                      justifyContent="start"
                    >
                      {member.age ? member.age : ""}
                    </Typography>
                  </Stack>
                </Stack>
              </ToggleButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default SelectPrioritesToMemberFamilyComponent;

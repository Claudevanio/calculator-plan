import * as React from 'react';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { useWindowSize } from "../../hooks/useWindowSize";
import { Box, Button, Container, Divider, Grid, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";


 


function SelectPrioritesToMemberFamilyComponent({text}) {
    const DESKTOP_SMALL_SIZE = 1023;
    const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;
    const windowSize = useWindowSize();

    return (
        <Box 
            display={isMobile(windowSize) ? "grid" : "flex"}
            justifyContent={isMobile(windowSize) ? "" : "space-between"}
            backgroundColor = '#ffffff'
            border={1}
            borderRadius={1} >
            <Box >
                <Stack direction='row' gap>
                    <SelfImprovementIcon fontSize='large' color="success" />
                    <Stack>
                        <Typography variant='h6'> {text} </Typography>
                        <Box>
                            <Button variant='outlined' > Reason / Tips</Button>
                            <Button variant='outlined'> UnselectAll </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Box>

            <Box>
                <Grid container >
                    <Box >
                        <ToggleButton 
                        sx={{margin: '0.5rem'}}>
                            <Stack direction='row' height={42}>
                                <Stack alignItems='center'> <Box
                                    borderRadius={"16rem"}
                                    border={1}
                                    component="img"
                                    sx={{
                                        height: 45,
                                        width: 45,
                                        padding: 1,
                                        // maxHeight: { xs: 233, md: 167 },
                                        // maxWidth: { xs: 350, md: 250 },
                                    }}
                                    alt="The house from the offer."
                                    src="https://www.pngmart.com/files/5/Poro-PNG-Image.png"
                                />
                                </Stack>

                                <Stack>
                                    <Typography variant='h6'> Jorge </Typography>
                                    <Typography variant='h7' display='flex' justifyContent='start'> Adult  </Typography>
                                </Stack>
                            </Stack>
                        </ToggleButton>
                    </Box>

                    <Box >
                        <ToggleButton 
                        sx={{margin: '0.5rem'}}>
                            <Stack direction='row' height={42}>
                                <Stack alignItems='center'>
                                    <Box
                                        borderRadius={"16rem"}
                                        border={1}
                                        component="img"
                                        sx={{
                                            height: 45,
                                            width: 45,
                                            padding: 1,
                                            // maxHeight: { xs: 233, md: 167 },
                                            // maxWidth: { xs: 350, md: 250 },
                                        }}
                                        alt="The house from the offer."
                                        src="https://www.pngmart.com/files/5/Poro-PNG-Image.png"
                                    />
                                </Stack>

                                <Stack>
                                    <Typography variant='h6'> Paulo </Typography>
                                    <Typography variant='h7' display='flex' justifyContent='start'> Adult  </Typography>
                                </Stack>
                            </Stack>
                        </ToggleButton>
                    </Box>
                    <Box >
                        <ToggleButton 
                        sx={{margin: '0.5rem'}}>
                            <Stack direction='row' height={42}>
                                <Stack alignItems='center'>
                                    <Box
                                        borderRadius={"16rem"}
                                        border={1}
                                        component="img"
                                        sx={{
                                            height: 45,
                                            width: 45,
                                            padding: 1,
                                            // maxHeight: { xs: 233, md: 167 },
                                            // maxWidth: { xs: 350, md: 250 },
                                        }}
                                        alt="The house from the offer."
                                        src="https://www.pngmart.com/files/5/Poro-PNG-Image.png"
                                    />
                                </Stack>

                                <Stack >
                                    <Typography variant='h6'> Marcos </Typography>
                                    <Typography variant='h7' display='flex' justifyContent='start'> Adult  </Typography>
                                </Stack>
                            </Stack>
                        </ToggleButton>
                    </Box>
                </Grid>
            </Box>

        </Box>
    );

}

export default SelectPrioritesToMemberFamilyComponent;

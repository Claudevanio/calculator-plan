import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';


function Home() {

    return (
        <Box>
            <Stack sx={{ marginTop: '5rem', marginRight: '5rem', marginLeft: '5rem', background: 'gray' }} spacing={4}>
                <Box sx={{ padding: '2rem' }}>
                    <Typography variant="h4">Family Media Plan</Typography>
                    <Typography sx={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>Media is everywhere, and managing it all can be tough. Creating a Family Media Plan can help you and your children set media priorities that matter most to your family. Come back to revise your plan as often as you need to, such as at the beginning of each school year or during summer and holiday breaks.​</Typography>
                    <Typography variant="h4">Here's how it works</Typography>
                    <Typography sx={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>Since media habits are different for every household, the Family Media Plan can be customiz​ed to meet your family's needs. Make a full plan, or just choose a few parts that matter the most to your family.​</Typography>
                    <Typography variant="h5">The Family Media Plan includes:</Typography>
                    <Typography sx={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>* A list of media priorities to choose from.​</Typography>
                    <Typography sx={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>* Practical tips to help make the plan work.​</Typography>
                    <Typography sx={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>* Why it's important​.</Typography>
                    <Typography sx={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>* The ability to print or share your finished plan.​</Typography>
                    <Typography sx={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>* The ​option to save your plan and return as often as you'd like to make changes.​</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '4rem', marginTop: '2rem' }}>
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>* To find this ​information in Spanish, click here..​</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: 'auto', height: '10rem', background: 'Lightgray' }}>
                    <Box sx={{ padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <Button sx={{ background: 'orange', color: 'white', '&:hover': { background: 'green' } }} variant="text">Create or Update Your Family Media Plan</Button>
                            <Typography sx={{ marginTop: '1rem' }} >Already started your plan? continue here.​</Typography>
                        </Box>
                        <Box>
                            <Button sx={{ background: 'green', color: 'white', '&:hover': { background: 'orange' } }} variant="text">Learn to Use the Family Media Plan</Button>
                            <Typography sx={{ marginTop: '1rem' }}>First time here? View our video tour to get started.​</Typography>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );

}

export default Home;

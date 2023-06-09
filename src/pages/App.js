import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Home from './Home/Home';
import Tutorial from './Tutorial/tutorial';
import Families from './Families/Families';

function App(props) {

    const drawerWidth = 240;
    const navItems = ['Log in', 'Register'];

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLanguage = () => {
        console.log("funcionou")
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}

                <Button onClick={handleLanguage()} variant="text">En Espanol</Button>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (

        <Container maxWidth='70rem'>
            <Box >
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar component="nav">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Button
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                En Espanol
                            </Button>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {navItems.map((item) => (
                                    <Button key={item} sx={{ color: '#fff' }}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box component="nav">
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box>
                        {/* <Home/> */}
                        {/* <Families /> */}
                        <Tutorial />
                    </Box>
                </Box>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={12}>
                        <Box component="main" >
                            <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', height: '14rem', background: '#FAFAEF' }}>
                                <Grid >
                                    <Grid item xs={12} sm={10}>
                                        <Box>
                                            <Typography >​The information contained on this website should not be used as a substitute for the medical care and advice of your pediatrician. There may be variations in treatment that your pediatrician may recommend based on individual facts and circumstances.​</Typography>

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid >
                </Grid>
            </Box>
        </ Container>

    );

}

export default App;

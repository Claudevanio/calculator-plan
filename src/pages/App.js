import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
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
import Tutorial from './Tutorial/tutorial';
import { useWindowSize } from '../hooks/useWindowSize';

function App(props) {

    const drawerWidth = 240;
    const navItems = ['Log in', 'Register'];

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const windowSize = useWindowSize();

    const DESKTOP_SMALL_SIZE = 1023;
    const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;

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
        <Container 
        maxWidth='70rem'
        display={isMobile(windowSize) ? "contents" : ""}>
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
            </Box>
        </ Container>

    );

}

export default App;

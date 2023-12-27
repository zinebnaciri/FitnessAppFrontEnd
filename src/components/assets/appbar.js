import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box, Divider, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FlagIcon from '@mui/icons-material/Flag';
import QueryStatsIcon from '@mui/icons-material/QueryStats';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const Logo = styled('img')({
    width: '50px',   // Set a small width
    height: '50px',

});
const Title = styled(Typography)({
    color: 'black', // Set text color
});
export default function Layout({ children }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const location = useLocation();

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const DividerLine = styled(Divider)(({ theme }) => ({
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }));
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id="primary-search-account-menu"
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                anchor="left"
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    },
                }}
            >
                <Toolbar />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Logo src="images/logo.png" alt="Logo" />
                    <Title variant="subtitle1" sx={{ marginLeft: 2 }}>ZADFITNESS</Title>
                </Box>
                <DividerLine sx={{ width: '100%' }} />
                <List>
                    <ListItem button component={Link} to="/dashboard" sx={{
                        backgroundColor:
                            location.pathname === '/dashboard' ? '#f97316' : 'inherit',
                    }}><DashboardIcon sx={{ marginRight: '8px' }} />
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to="/workouts" sx={{
                        backgroundColor:
                            location.pathname === '/workouts' ? '#f97316' : 'inherit',
                    }}>
                        <SportsGymnasticsIcon sx={{marginRight:'8px'}} />
                        <ListItemText primary="Workouts" />
                    </ListItem>
                    <ListItem button component={Link} to="/diet" sx={{
                        backgroundColor:
                            location.pathname === '/diet' ? '#f97316' : 'inherit',
                    }}>
                        <RestaurantIcon sx={{marginRight:'8px'}} />
                        <ListItemText primary="Diet Plans" />
                    </ListItem>
                    <ListItem button component={Link} to="/goals" sx={{
                        backgroundColor:
                            location.pathname === '/goals' ? '#f97316' : 'inherit',
                    }}>
                        <FlagIcon sx={{marginRight:'8px'}} />
                        <ListItemText primary="Goals" />
                    </ListItem>
                    <ListItem button component={Link} to="/progress">
                        <QueryStatsIcon sx={{marginRight:'8px'}} />
                        <ListItemText primary="Progress" />
                    </ListItem>

                </List>
            </Drawer>

            <Box sx={{ flexGrow: 1, p: 3 }}>
                <AppBar position="static" sx={{ background: '#f97316' }}>
                    <Toolbar>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Welcome Back Name
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            {renderMenu}
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Content of the page */}
                <Box sx={{ mt: 3 }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

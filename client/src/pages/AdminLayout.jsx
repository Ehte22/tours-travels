import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import AdminDashboard from '../components/AdminDashboard';
import { useNavigate } from 'react-router-dom';
import AdminTours from '../components/admin-tours/AdminTours';
import AdminHotels from '../components/AdminHotels';
import AdminFlights from '../components/AdminFlights';
import AdminCabs from '../components/AdminCabs';
import AdminBlogs from '../components/AdminBlogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faCar, faGlobe, faHotel, faPlaneUp } from '@fortawesome/free-solid-svg-icons';

const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon style={{ color: '#0772ed' }} />,
    },
    {
        segment: 'tours',
        title: 'Tours',
        icon: <FontAwesomeIcon icon={faGlobe} fontSize={'20px'} color='#00c979' />,
    },
    {
        segment: 'hotels',
        title: 'Hotels',
        icon: <FontAwesomeIcon icon={faHotel} fontSize={'20px'} color='#f21839' />,
    },
    {
        segment: 'flights',
        title: 'Flights',
        icon: <FontAwesomeIcon icon={faPlaneUp} fontSize={'20px'} color='#f2c618' />,
    },
    {
        segment: 'cabs',
        title: 'Cabs',
        icon: <FontAwesomeIcon icon={faCar} fontSize={'20px'} color='#a607e0' />,
    },
    {
        segment: 'blogs',
        title: 'Blogs',
        icon: <FontAwesomeIcon icon={faBlog} fontSize={'20px'} color='#ade007' />,
    },
];


const adminTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    // colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 950,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#1a1919', // Set primary color to red for both modes
        },
    },
});

const AdminPageContent = ({ pathname }) => {
    return (
        <Box
            sx={{
                paddingY: { xs: '30px' },
                paddingX: { xs: '12px', md: '30px' },
                backgroundColor: '#F3F3F3',
            }}
        >
            {pathname === '/dashboard' && <AdminDashboard />}
            {pathname === '/tours' && <AdminTours />}
            {pathname === '/hotels' && <AdminHotels />}
            {pathname === '/flights' && <AdminFlights />}
            {pathname === '/cabs' && <AdminCabs />}
            {pathname === '/blogs' && <AdminBlogs />}
        </Box>
    );
}

AdminPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

const Search = () => {
    return (
        <Box >
            <Tooltip title="Search" enterDelay={1000}>
                <Box>
                    <IconButton
                        type="button"
                        aria-label="search"
                        size="small"
                        sx={{
                            display: { xs: 'inline-block', md: 'none' },
                        }}
                    >
                        <SearchIcon />
                    </IconButton>
                </Box>
            </Tooltip>
            <TextField
                id="search"
                label="Search"
                variant="outlined"
                size="small"
                slotProps={{
                    input: {
                        endAdornment: (
                            <IconButton type="button" aria-label="search" size="small">
                                <SearchIcon />
                            </IconButton>
                        ),
                        sx: { pr: 0.5 },
                    },
                }}
                sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
            />
        </Box>
    );
}

const AdminLayout = () => {
    const navigate = useNavigate()

    const [pathname, setPathname] = React.useState(() => {
        // Retrieve the stored pathname from localStorage or default to '/dashboard'
        return localStorage.getItem('adminPathname') || '/dashboard';
    });

    const [session, setSession] = React.useState({
        user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
        },
    });

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: 'Bharat Kashyap',
                        email: 'bharatkashyap@outlook.com',
                        image: 'https://avatars.githubusercontent.com/u/19550456',
                    },
                });
            },
            signOut: () => {
                setSession(null);
                navigate("/")
            },
        };
    }, [navigate]);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                setPathname(String(path));
                localStorage.setItem('adminPathname', String(path)); // Store the pathname
            },
        };
    }, [pathname]);


    return (
        <AppProvider
            session={session}
            authentication={authentication}
            navigation={NAVIGATION}
            router={router}
            branding={{
                logo: <img src="https://shreethemes.net/geotrip-live/geotrip/assets/img/logo.png" alt="MUI logo" />,
                title: '',
            }}
            theme={adminTheme}
        >
            <DashboardLayout slots={{
                toolbarActions: Search, sidebar: {
                    sx: {
                        display: { xs: 'block' }, // Show sidebar starting from xs
                    },
                },
            }}   >
                <AdminPageContent pathname={pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}

AdminLayout.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default AdminLayout;

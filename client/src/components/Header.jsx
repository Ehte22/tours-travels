import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { SideBarContext } from '../App';
import { useSignOutMutation } from '../redux/apis/auth.apis';

const pages = [
    { page: "HOME", to: "/" },
    { page: "HOTELS", to: "/hotels" },
    { page: "FLIGHTS", to: "/flights" },
    { page: "CABS", to: "/cabs" },
    { page: "TOURS", to: "/tours" },
    { page: "BLOGS", to: "/blogs" }
];

const Header = () => {
    const [signOut, { isSuccess }] = useSignOutMutation()

    const { setOpen } = useContext(SideBarContext)
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate()

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (isSuccess) {
            navigate('/')
        }
    }, [isSuccess, navigate])

    return (
        <Box
            sx={{
                width: '100%',
                height: '60px',
                position: { xs: 'static', md: 'fixed' },
                top: 0,
                backgroundColor: 'white',
                zIndex: 2,
                boxShadow: 'none',
                borderBottom: '1px solid gray',
                display: 'flex',
                alignItems: 'center',
                paddingY: '35px',
                paddingX: '12px'
            }}
        >
            <Container disableGutters maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            <img src="https://shreethemes.net/geotrip-live/geotrip/assets/img/logo.png" height={40} alt="Logo" />
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton onClick={toggleDrawer(true)}>
                                <MenuIcon sx={{ color: 'black' }} />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box sx={{ display: 'flex', gap: { md: '30px', lg: '50px' }, alignItems: 'center' }}>
                            <Box>
                                {pages.map((item, i) => (
                                    <Link
                                        key={i}
                                        to={item.to}
                                        style={{
                                            textDecoration: 'none',
                                            fontFamily: 'Poppins, Arial, sans-serif',
                                            letterSpacing: '1px',
                                            fontWeight: 'bold',
                                            color: 'gray',
                                            fontSize: '14px',
                                            marginLeft: '35px',
                                        }}
                                    >
                                        {item.page}
                                    </Link>
                                ))}
                            </Box>

                            <Box
                                aria-controls={open ? 'user-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{ display: 'flex', alignItems: 'center', gap: '10px', height: '60px', paddingX: '24px', cursor: 'pointer' }}
                            >
                                <Box
                                    component="img"
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                    alt="Profile"
                                    sx={{
                                        height: '30px',
                                        width: '30px',
                                        borderRadius: '50%',
                                        cursor: 'pointer'
                                    }}
                                />
                                <Typography sx={{ color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>
                                    John Doe
                                </Typography>
                                <FontAwesomeIcon icon={faCaretDown} color="gray" fontSize="12px" />
                            </Box>

                            <Menu
                                id="user-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem sx={{ width: '200px' }} onClick={handleClose}>
                                    <Link to="/dashboard" style={{ textDecoration: 'none', color: 'gray', fontSize: '14px' }}>
                                        Dashboard
                                    </Link>
                                </MenuItem>
                                <MenuItem sx={{ width: '200px' }} onClick={handleClose}>
                                    <Link to="/edit-profile" style={{ textDecoration: 'none', color: 'gray', fontSize: '14px' }}>
                                        Edit Profile
                                    </Link>
                                </MenuItem>
                                <MenuItem sx={{ width: '200px' }} onClick={handleClose}>
                                    <Link to="/wish-list" style={{ textDecoration: 'none', color: 'gray', fontSize: '14px' }}>
                                        Wish List
                                    </Link>
                                </MenuItem>
                                <Divider />
                                <MenuItem sx={{ width: '200px' }} onClick={() => {
                                    setAnchorEl(null)
                                    signOut()
                                }}>
                                    <Link style={{ textDecoration: 'none', color: 'gray', fontSize: '14px' }}>
                                        Sign Out
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;

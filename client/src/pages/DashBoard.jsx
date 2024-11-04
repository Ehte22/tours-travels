import { Box, Card, CardContent, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { faDollar, faGaugeHigh, faLock, faPenToSquare, faStar, faWallet, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { grey } from '@mui/material/colors'
import { faHeart, faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const myAccount = [
    { page: 'Dashboard', icon: faGaugeHigh, page_type: 'dashboard' },
    { page: 'Edit Profile', icon: faPenToSquare, page_type: 'edit-profile' },
    { page: 'Change Password', icon: faLock, page_type: 'change-password' }
]

const bookings = [
    { page: 'Bookings', icon: faNewspaper },
    { page: 'Invoices', icon: faWallet },
    { page: 'Reviews', icon: faStar },
    { page: 'Wish List', icon: faHeart },
]

const profileFields = [
    { key: 'Name', value: 'John doe' },
    { key: 'Gender', value: 'Male' },
    { key: 'Birth Date', value: 'November 18, 1997' },
    { key: 'Country', value: 'India' },
    { key: 'Email', value: 'john@gmail.com' },
    { key: 'Phone', value: '98989898' },
]

const currentBookings = [
    { booking: "Dubai – All Stunning Places", date: "September 7, 2024", totalAmount: "$2,679.22", status: "Pending" },
    { booking: "Dubai – All Stunning Places", date: "September 7, 2024", totalAmount: "$2,679.22", status: "Pending" }
]

const DashBoard = () => {
    return <>
        <Box>
            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: '36vh',
                        sm: '46vh',
                    },
                    backgroundImage: 'url(/tours/bg-tour.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px'
                }}>
                </Box>

            </Box>

            <Box>
                <Grid container >
                    {/* DashBoard SideBar Start */}
                    <Grid item md={3} lg={2.5} sx={{ paddingY: '50px', display: { xs: 'none', md: 'block' } }}>
                        <Box sx={{ paddingLeft: '36px' }}>
                            <Box>
                                <Typography sx={{
                                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                                }}>
                                    MY ACCOUNT
                                </Typography>

                                <Box sx={{ marginTop: '24px' }}>

                                    {myAccount.map((item, i) => <Link to={`/dashbord/?page_type=${item.page_type}`} key={i} style={{ textDecoration: 'none' }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '20px',
                                            marginTop: '16px',
                                            '&:focus': {
                                                borderLeft: '1px solid green'
                                            }
                                        }}>
                                            <FontAwesomeIcon icon={item.icon} color={grey[600]} fontSize='14px' />
                                            <Typography sx={{ color: grey[600], fontSize: '15px', fontWeight: 'bold' }}>{item.page}</Typography>
                                        </Box>
                                    </Link>)}

                                </Box>
                            </Box>

                            <Box sx={{ marginTop: '50px' }}>
                                <Typography sx={{
                                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                                    marginTop: '16px',
                                }}>
                                    MY BOOKINGS
                                </Typography>

                                <Box sx={{ marginTop: '24px' }}>
                                    {bookings.map((item, i) => <Link key={i} style={{ textDecoration: 'none' }}>
                                        <Box key={i} sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '20px',
                                            marginTop: '16px'
                                        }}>
                                            <FontAwesomeIcon icon={item.icon} color={grey[600]} fontSize='14px' />
                                            <Typography sx={{ color: grey[600], fontSize: '15px', fontWeight: 'bold' }}>{item.page}</Typography>
                                        </Box>
                                    </Link>)}
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ paddingX: '10px', marginTop: '28px' }}>
                            <Divider />
                            <Box sx={{ paddingLeft: '26px', paddingY: '12px' }}>
                                <Link style={{ textDecoration: 'none' }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px',
                                    }}>
                                        <FontAwesomeIcon icon={faLock} color={grey[600]} fontSize='14px' />
                                        <Typography sx={{ color: grey[600], fontSize: '15px', fontWeight: 'bold' }}>Sign Out</Typography>
                                    </Box>
                                </Link>
                            </Box>
                            <Divider />
                        </Box>

                    </Grid>
                    {/* DashBoard SideBar End */}

                    {/* DashBoard Main Content Start */}
                    <Grid xs={12} md={9} lg={9.5}>
                        <Box sx={{ paddingX: { xs: '12px', sm: '24px', md: '40px', }, paddingY: '40px', backgroundColor: '#f3f3f3' }}>

                            {/* My Profile Start */}
                            <Box>
                                <Card>
                                    <CardContent>
                                        <Box sx={{ paddingX: '16px' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography sx={{
                                                    marginTop: '4px',
                                                    color: '#cd2c22',
                                                    fontFamily: 'ArcaMajora, Arial, sans-serif'
                                                }}>
                                                    My Profile
                                                </Typography>
                                                <Link style={{
                                                    textDecoration: 'none', color: "gray",
                                                    fontSize: '13px'
                                                }}>Edit Profile</Link>
                                            </Box>
                                            <Divider sx={{ marginTop: '12px' }} />

                                            <Box sx={{ paddingY: '40px' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={3} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box
                                                            component="img"
                                                            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                                                            alt='Profile image'
                                                            sx={{
                                                                height: '80px',
                                                                width: '80px',
                                                                borderRadius: '50%'
                                                            }}
                                                        ></Box>
                                                    </Grid>
                                                    <Grid item sm={9} md={10} sx={{ marginTop: { xs: '20px', sm: 0 } }}>
                                                        <Grid container spacing={2}>
                                                            {profileFields.map((item, index) => {
                                                                return <Grid item xs={12} md={6} key={index}>
                                                                    <Grid container spacing={1} >
                                                                        <Grid item xs={6} md={6}>
                                                                            <Typography sx={{ color: grey[600], fontSize: '14px' }}>
                                                                                {item.key}
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item xs={6} md={6}>
                                                                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                                                                                {item.value}
                                                                            </Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>

                                                            })}
                                                            <Grid item md={12}>
                                                                <Grid container spacing={1}>
                                                                    <Grid item md={3}>
                                                                        <Typography sx={{ color: grey[600], fontSize: '14px' }}>
                                                                            Contact Address
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item md={9}>
                                                                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                                                                            -
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                            {/* My Profile End */}

                            {/* Current Booking Start */}
                            <Box sx={{ marginTop: '36px' }}>
                                <Card>
                                    <CardContent>
                                        <Box sx={{ paddingX: '16px' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography sx={{
                                                    marginTop: '4px',
                                                    color: '#cd2c22',
                                                    fontFamily: 'ArcaMajora, Arial, sans-serif'
                                                }}>
                                                    Current Bookings
                                                </Typography>
                                                <Link style={{
                                                    textDecoration: 'none', color: "gray",
                                                    fontSize: '13px'
                                                }}>View All Bookings</Link>
                                            </Box>
                                            <Divider sx={{ marginTop: '12px' }} />

                                            <Box sx={{ paddingY: '20px' }}>
                                                <Box >
                                                    <TableContainer>
                                                        <Table size="small" aria-label="a dense table" sx={{ minWidth: '650px' }}>
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell sx={{ fontWeight: 'bold', width: { md: '50%' } }}>Booking</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Payment Status</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {currentBookings.map((item, i) => {
                                                                    return (
                                                                        <TableRow
                                                                            key={i}
                                                                            sx={{
                                                                                '&:first-of-type': {
                                                                                    td: {
                                                                                        paddingTop: '20px',
                                                                                    },
                                                                                },
                                                                            }}
                                                                        >
                                                                            <TableCell sx={{ color: '#cd2c22', border: 'none' }}>{item.booking}</TableCell>
                                                                            <TableCell sx={{ color: '#cd2c22', border: 'none' }}>{item.date}</TableCell>
                                                                            <TableCell sx={{ fontWeight: 'bold', border: 'none' }}>{item.totalAmount}</TableCell>
                                                                            <TableCell sx={{ color: 'green', border: 'none' }}>
                                                                                {item.status}
                                                                                <Box
                                                                                    sx={{
                                                                                        backgroundColor: '#cd2c22',
                                                                                        paddingY: '4px',
                                                                                        paddingX: '10px',
                                                                                        display: 'inline-block',
                                                                                        marginLeft: '24px',
                                                                                    }}
                                                                                >
                                                                                    <FontAwesomeIcon icon={faDollar} fontSize={'12px'} color="white" />
                                                                                </Box>
                                                                                <Box
                                                                                    sx={{
                                                                                        backgroundColor: '#cd2c22',
                                                                                        paddingY: '4px',
                                                                                        paddingX: '10px',
                                                                                        display: 'inline-block',
                                                                                        marginLeft: '4px',
                                                                                    }}
                                                                                >
                                                                                    <FontAwesomeIcon icon={faXmark} fontSize={'12px'} color="white" fontWeight="bold" />
                                                                                </Box>
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    );
                                                                })}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Box>

                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                            {/* Current Booking End */}

                            {/* DashBoard Payment */}
                            {/* <Box>
                                    <Card>
                                        <CardContent>
                                            <Box sx={{ paddingX: '16px' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item md={4}>
                                                        <Typography sx={{
                                                            fontFamily: 'ArcaMajora, Arial, sans-serif',
                                                            color: '#cd2c22',
                                                            fontWeight: 900,
                                                            paddingY: '16px',
                                                            borderBottom: '1px solid gainsboro'
                                                        }}>ORDER SUMMARY</Typography>

                                                        <Box>
                                                            <Typography component='span'>Order Number:</Typography>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box> */}
                        </Box>
                    </Grid>
                    {/* DashBoard Main Content End */}
                </Grid>
            </Box>
        </Box >
    </>
}

export default DashBoard
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Box, Container, Grid, Link, Typography } from '@mui/material'

const Footer = () => {
    const aboutUs = ['Our Story', 'Travel Bolg & Tips', 'Working With Us', 'Be Our Partner']
    const support = ['Customer Support', 'Privacy & Policy', 'Contact Channels']
    return <>
        <Box sx={{ backgroundColor: '#003149' }}>
            <Box sx={{
                color: 'white',
                paddingY: '72px',
                paddingX: '12px'
            }}>
                <Container disableGutters>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box>
                                <Typography sx={{ color: '#cd2c22', fontWeight: 'bold', fontSize: '20px' }}>
                                    Call Us
                                </Typography>
                                <Typography sx={{ fontSize: '20px', marginTop: '5px' }}>
                                    <FontAwesomeIcon icon={faPhone} /> <Typography variant='span' marginLeft={'10px'}>+6-345-3456-233</Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ marginTop: '20px' }}>
                                <Typography sx={{ color: '#cd2c22', fontWeight: 'bold', fontSize: '20px' }}>
                                    Email
                                </Typography>
                                <Typography sx={{ fontSize: '20px', marginTop: '5px' }}>
                                    <FontAwesomeIcon icon={faEnvelope} /> <Typography variant='span' marginLeft={'10px'}>geoTrip@gmail.com</Typography>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2.5}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>About Us</Typography>
                            <Box marginTop={'16px'} color={'#557685'}>
                                {aboutUs.map((item, i) => <Box key={i} marginTop={'10px'}>
                                    <Link
                                        href="#"
                                        sx={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: '#cd2c22',
                                                textDecoration: 'none', // Ensure no underline on hover
                                            },
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </Box>)}
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2.5}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Support</Typography>
                            <Box marginTop={'16px'} color={'#557685'}>
                                {support.map((item, i) => <Box key={i} marginTop={'10px'}>
                                    <Link
                                        href="#"
                                        sx={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: '#cd2c22',
                                                textDecoration: 'none', // Ensure no underline on hover
                                            },
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </Box>)}
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Payment Methods</Typography>
                            <Box marginTop={'16px'}>
                                <Box
                                    sx={{
                                        backgroundImage: 'url(/payment.png)',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        height: '50px'
                                    }}
                                >
                                </Box>

                                <Box marginTop={'16px'} >
                                    <Typography variant='body1' color={'#557685'}>Our Partners</Typography>
                                    <Box marginTop={'10px'} sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                                        <img width={'25%'} src="/mytrip.png" alt="" />
                                        <img width={'25%'} src="/tripadv.png" alt="" />
                                        <img width={'25%'} src="/goibibo.png" alt="" />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>


                </Container>

            </Box>

            <Box sx={{ borderTop: '1px solid #557685', color: '#557685', paddingY: '20px', paddingX: '12px' }}>
                <Container disableGutters>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2">
                            © 2024 GeoTrip. All rights reserved.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: '20px' }}>
                            <Typography variant="body2">
                                Follow us on
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faLinkedin} />
                                <FontAwesomeIcon icon={faSquareInstagram} />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    </>
}

export default Footer
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Checkbox, Divider, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types';


const PaymentComponent = ({ setCurrentStep }) => {
    return <>
        <Box>
            <Box>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <FontAwesomeIcon icon={faFileContract} fontSize={'20px'} />
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '22px'
                            }}>Contact Details</Typography>

                        </Box>

                        <Box sx={{ marginTop: '20px' }}>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>First Name :</Typography>
                                <Typography sx={{ color: 'gray' }}>John</Typography>
                            </Box>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>Last Name :</Typography>
                                <Typography sx={{ color: 'gray' }}>doe</Typography>
                            </Box>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>Email :</Typography>
                                <Typography sx={{ color: 'gray' }}>john@gmail.com</Typography>
                            </Box>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>Phone :</Typography>
                                <Typography sx={{ color: 'gray' }}>8787878787</Typography>
                            </Box>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>Country :</Typography>
                                <Typography sx={{ color: 'gray' }}>India</Typography>
                            </Box>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>Address :</Typography>
                                <Typography sx={{ color: 'gray' }}>I don&rsquo;t know</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: { xs: '20px', md: '0' } }}>
                            <FontAwesomeIcon icon={faFileContract} fontSize={'20px'} />
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '22px'
                            }}>Billing Details</Typography>

                        </Box>

                        <Box sx={{ marginTop: '20px' }}>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>First Name :</Typography>
                                <Typography sx={{ color: 'gray' }}>John</Typography>
                            </Box>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>Last Name :</Typography>
                                <Typography sx={{ color: 'gray' }}>doe</Typography>
                            </Box>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>Email :</Typography>
                                <Typography sx={{ color: 'gray' }}>john@gmail.com</Typography>
                            </Box>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>Phone :</Typography>
                                <Typography sx={{ color: 'gray' }}>8787878787</Typography>
                            </Box>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>Country :</Typography>
                                <Typography sx={{ color: 'gray' }}>India</Typography>
                            </Box>
                            <Box sx={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ width: '120px' }}>Address :</Typography>
                                <Typography sx={{ color: 'gray' }}>I don&rsquo;t know</Typography>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Box sx={{
                marginTop: '40px',
                backgroundColor: '#f3f3f3',
                paddingTop: '28px',
                paddingBottom: '56px',
                paddingX: '32px',
            }}>
                <Typography sx={{
                    marginBottom: '28px',
                    textAlign: 'center',
                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                    fontWeight: 900,
                }}>
                    Please select a payment method
                </Typography>

                <Divider />

                <Box sx={{
                    marginTop: '28px',
                    color: 'gray',
                    textAlign: 'center',
                }}>
                    <Typography sx={{ fontSize: '13px' }}>
                        * If you wish to do a bank transfer, please select &quote;Book and pay later&quote; button.
                    </Typography>
                    <Typography sx={{ fontSize: '13px' }}>
                        You will have an option to submit payment receipt on your dashboard page.
                    </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', marginTop: '12px' }}>
                    <Checkbox size="small" />
                    <Typography variant='span' sx={{ fontSize: '13px', color: 'gray' }} >
                        * I agree with
                        <Typography variant='span' color={'#cd2c22'}> Terms of Service </Typography>
                        and
                        <Typography variant='span' color={'#cd2c22'}> Privacy Statement. </Typography>
                    </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', marginY: '32px' }}>
                    <Button variant='contained' sx={{
                        backgroundColor: '#cd2c22',
                        paddingY: '16px',
                        paddingX: '22px',
                        '&:hover': {
                            backgroundColor: '#cd2c22',
                        }
                    }}>
                        PAY NOW
                    </Button>
                </Box>

                <Divider sx={{ fontWeight: 'bold' }}>OR</Divider>

                <Box sx={{ textAlign: 'center', marginY: '32px' }}>
                    <Button variant='contained'
                        onClick={() => setCurrentStep(5)}
                        sx={{
                            backgroundColor: '#cd2c22',
                            paddingY: '16px',
                            paddingX: '32px',
                            '&:hover': {
                                backgroundColor: '#cd2c22',
                            }
                        }}>
                        BOOK AND PAY LATER
                    </Button>
                </Box>
            </Box>
        </Box>
    </>
}

PaymentComponent.propTypes = {
    setCurrentStep: PropTypes, // Validate setCurrentStep as a required function
};

export default PaymentComponent
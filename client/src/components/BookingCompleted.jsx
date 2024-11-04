import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Divider, Typography } from '@mui/material'

const BookingCompleted = () => {
    return <>
        <Box sx={{
            backgroundColor: '#f3f3f3',
            padding: '30px'
        }}>
            <Typography sx={{
                fontFamily: 'ArcaMajora, Arial, sans-serif',
                fontSize: '17px',
                fontWeight: 900,
                width: '100%',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                Booking Completed!
            </Typography>

            <Divider />

            <Box sx={{
                display: 'flex', alignItems: 'center',
                flexDirection: 'column', marginTop: '40px'
            }}>
                <FontAwesomeIcon icon={faCheckCircle}
                    color='#cd2c22' fontSize={'72px'} />

                <Typography sx={{
                    fontSize: '20px',
                    color: '#cd2c22',
                    marginTop: '18px',
                    fontWeight: 'bold'
                }}>
                    Thank you!
                </Typography>

                <Typography sx={{ color: 'gray', marginTop: '24px', textAlign: 'center' }}>
                    Your booking detail has been sent to your email.
                </Typography>
                <Typography sx={{ color: 'gray', marginTop: '2px', textAlign: 'center' }}>
                    You can check the payment status from your dashboard.
                </Typography>

                <Button variant='contained'
                    sx={{
                        marginTop: '36px',
                        marginBottom: '22px',
                        backgroundColor: '#cd2c22',
                        paddingY: '16px',
                        paddingX: '32px',
                        '&:hover': {
                            backgroundColor: '#cd2c22',
                        }
                    }}>
                    GO TO MY DASHBOARD
                </Button>
            </Box>

        </Box>
    </>
}

export default BookingCompleted
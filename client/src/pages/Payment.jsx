import { faCheck, faCrosshairs, faDollar, faHeadphonesSimple, faLock, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Card, CardContent, Container, Divider, Grid, Step, Stepper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ContactDetails from '../components/ContactDetails'
import PaymentComponent from '../components/PaymentComponent'
import BookingCompleted from '../components/BookingCompleted'

const book = [
    { title: 'No-hassle best price guarantee', icon: faDollar },
    { title: 'Customer care available 24/7', icon: faHeadphonesSimple },
    { title: 'Hand-picked Tours & Activities', icon: faStar },
    { title: 'Free Travel Insureance', icon: faCrosshairs },
]

const steps = [
    'Select Tour',
    'Contact Details',
    'Payment',
    'Complete',
];


const Payment = () => {
    const location = useLocation()
    const [showPriceBreakdown, setShowPriceBreakdown] = useState(false)
    const [currentStep, setCurrentStep] = useState(2)

    const tour = location.state.tour
    const selectedDate = new Date(location.state.selectedDate);

    const duration = parseInt(tour.duration)
    const endDate = new Date(selectedDate)

    endDate.setDate(endDate.getDate() + duration)


    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedDate = selectedDate.toLocaleDateString('en-US', options);
    // const formattedEndDate = endDate.toLocaleDateString('en-US', options);


    const handleToggle = () => {
        setShowPriceBreakdown(!showPriceBreakdown)
    }

    const handleNextStep = () => {
        setCurrentStep(3)
    }

    return <>
        <Box>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '320px', md: '280px' },
                    marginTop: { md: '70px' },
                    backgroundImage: `url(${tour.images[3]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <Box sx={{
                        height: { xs: '60%', md: '70%' },
                        width: '100%',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Container>
                            <Typography sx={{
                                fontFamily: 'ArcaMajora, Arial, sans-serif',
                                fontWeight: 900,
                                fontSize: '32px'
                            }}>{tour.title} - {tour.duration}</Typography>
                        </Container>
                    </Box>

                    <Box sx={{ height: { xs: '40%', md: '30%' }, display: 'flex', alignItems: 'center' }}>
                        <Container disableGutters>
                            <Grid container sx={{ alignItems: 'center' }}>
                                <Grid container sx={{ alignItems: 'center' }}>
                                    <Grid item md={8}>
                                        <Stepper activeStep={currentStep} alternativeLabel connector={null}>
                                            <Grid container spacing={2}>
                                                {steps.map((item, i) => <Grid key={i} item xs={6} md={3}>
                                                    <Step completed={i < (currentStep - 1)} >

                                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    width: '24px',
                                                                    height: '24px',
                                                                    borderRadius: '50%',
                                                                    marginRight: '8px',
                                                                    padding: '20px',
                                                                    backgroundColor: i < (currentStep - 1) ? 'white' : i > (currentStep - 1) ? 'black' : '#cd2c22',
                                                                }}
                                                            >
                                                                {i < (currentStep - 1) ? (
                                                                    <FontAwesomeIcon icon={faCheck} color="#cd2c22" />
                                                                ) : (
                                                                    <Typography sx={{ color: 'white', fontWeight: 'bold' }}>{i + 1}</Typography>
                                                                )}
                                                            </Box>
                                                            <Typography sx={{ color: 'white', marginLeft: '8px' }}>
                                                                {item}
                                                            </Typography>
                                                        </Box>
                                                    </Step>
                                                </Grid>)}
                                            </Grid>
                                        </Stepper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Box>

            </Box>
            <Box sx={{ marginY: '70px', paddingX: { xs: '12px', sm: '42px', md: '12px' } }}>
                <Container disableGutters>
                    <Box marginTop={'32px'}>
                        <Grid container spacing={{ xs: 4, lg: 8 }} >

                            <Grid item xs={12} md={7.5} lg={8}>
                                {currentStep === 2 && <ContactDetails />}
                                {currentStep === 3 && <PaymentComponent setCurrentStep={setCurrentStep} />}
                                {currentStep === 5 && <BookingCompleted />}
                            </Grid>

                            <Grid item xs={12} md={4.5} lg={4}>
                                <Box sx={{ height: '100%', position: 'relative' }}>
                                    <Box >
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Box sx={{ position: 'relative', top: { md: '-180px' } }}>
                                                    <Card>
                                                        <CardContent>
                                                            <Box sx={{ padding: '16px' }}>
                                                                <Typography sx={{
                                                                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                                                                    fontWeight: 900,
                                                                }}>{tour.title} - {tour.duration}</Typography>

                                                                <Box sx={{ marginTop: '24px' }}>
                                                                    <Typography sx={{ marginTop: '4px' }}>Travel Date: {formattedDate}</Typography>
                                                                    <Typography sx={{ marginTop: '4px' }}>End Date: </Typography>
                                                                    <Typography sx={{ marginTop: '4px' }}>Period: {tour.duration}</Typography>

                                                                    <Box sx={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
                                                                        <Typography>Adult: 10</Typography>
                                                                        <Typography>Chidren: 2</Typography>
                                                                    </Box>


                                                                    <Box sx={{ marginTop: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                                        <TextField sx={{
                                                                            width: '50%',
                                                                            '& .MuiOutlinedInput-root': {
                                                                                height: '38px',
                                                                                '& .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'gainsboro',
                                                                                },
                                                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'gainsboro',
                                                                                },
                                                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                                    border: '1px solid gainsboro',
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    height: '100%',
                                                                                    padding: '0 14px',
                                                                                    boxSizing: 'border-box'
                                                                                },
                                                                            }
                                                                        }}
                                                                            placeholder='Coupon Code'
                                                                        />
                                                                        <Typography sx={{ color: '#cd2c22', cursor: 'pointer' }}>Apply</Typography>
                                                                    </Box>


                                                                    <Typography sx={{
                                                                        marginTop: '24px',
                                                                        color: '#cd2c22',
                                                                        cursor: 'pointer', fontSize: '14px'
                                                                    }} onClick={handleToggle}>
                                                                        View Price Breakdown
                                                                    </Typography>

                                                                    <Box sx={{
                                                                        maxHeight: showPriceBreakdown ? '500px' : '0px',
                                                                        overflow: 'hidden',
                                                                        opacity: showPriceBreakdown ? 1 : 0,
                                                                        transition: 'opacity 0.5s ease-in-out, max-height 0.5s ease-in-out',
                                                                    }}>
                                                                        <Box sx={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                            <Box sx={{ display: 'flex', gap: '10px', }}>
                                                                                <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                                                                                    Adult Base Price
                                                                                </Typography>
                                                                                <Typography variant='span' fontSize='14px'>1 x $1,700</Typography>
                                                                            </Box>
                                                                            <Typography fontSize='14px' >$1,700</Typography>
                                                                        </Box>

                                                                        <Divider sx={{ marginY: '20px' }} />

                                                                        <Box sx={{ display: 'flex', gap: '10px', }}>
                                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                                                                                Room 1:
                                                                            </Typography>
                                                                            <Typography variant='span' fontSize='14px'>1 Adult</Typography>
                                                                        </Box>

                                                                        <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                                                                                Room Base Price
                                                                            </Typography>
                                                                            <Typography fontSize='14px' >$1,800</Typography>
                                                                        </Box>

                                                                        <Divider sx={{ marginY: '20px' }} />


                                                                        <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                                                                                Sub Total Price
                                                                            </Typography>
                                                                            <Typography fontSize='14px' >$3,500</Typography>
                                                                        </Box>

                                                                        <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                                                                                Tax Rate
                                                                            </Typography>
                                                                            <Typography fontSize='14px'>9%</Typography>
                                                                        </Box>

                                                                        <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                                                                                Tax Due
                                                                            </Typography>
                                                                            <Typography fontSize='14px'>$315</Typography>
                                                                        </Box>
                                                                    </Box>

                                                                </Box>
                                                            </Box>

                                                            <Divider sx={{ marginY: '20px' }} />

                                                            <Box sx={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                <Typography sx={{
                                                                    fontSize: '18px',
                                                                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                                                                }}>Total Price</Typography>
                                                                <Typography sx={{
                                                                    fontSize: '22px',
                                                                    fontWeight: 'bold'
                                                                }}>$3,815.00
                                                                </Typography>
                                                            </Box>

                                                            {
                                                                currentStep === 2 && <Button variant='contained'
                                                                    onClick={handleNextStep}
                                                                    sx={{
                                                                        marginTop: '16px',
                                                                        paddingY: '10px',
                                                                        width: '100%',
                                                                        backgroundColor: '#cd2c22',
                                                                        '&:hover': {
                                                                            backgroundColor: '#cd2c22'
                                                                        }
                                                                    }}>Next Step</Button>
                                                            }
                                                        </CardContent>
                                                    </Card>
                                                </Box>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Box sx={{ backgroundColor: '#F3F3F3', marginTop: { xs: '28px', md: '-150px' }, padding: '24px' }}>
                                                    <Typography sx={{
                                                        fontFamily: 'ArcaMajora, Arial, sans-serif',
                                                        fontWeight: 900
                                                    }}>
                                                        Why Book With Us?
                                                    </Typography>

                                                    <Box sx={{ marginTop: '10px' }}>
                                                        {book && book.map((item, i) => <Box key={i}>
                                                            <Box sx={{ paddingY: '10px' }}>
                                                                <FontAwesomeIcon icon={item.icon} color='#cd2c22' width={'20px'} fontSize={'14px'} />
                                                                <Typography variant='span' sx={{ marginLeft: '10px', color: 'gray' }}>{item.title}</Typography>
                                                            </Box>
                                                        </Box>)}
                                                    </Box>
                                                </Box>
                                            </Grid>

                                            <Grid item xs={12}>

                                                <Box sx={{
                                                    marginTop: '28px',
                                                    backgroundColor: 'rgba(0,0,0,0.8)',
                                                    paddingX: '30px', paddingY: '40px',
                                                    color: '#f3f3f3'
                                                }}>
                                                    <Typography sx={{
                                                        fontFamily: 'ArcaMajora, Arial, sans-serif',
                                                        fontWeight: 900,
                                                        fontSize: '20px'
                                                    }}>
                                                        Pay Safely With Us
                                                    </Typography>
                                                    <Box sx={{ marginTop: '14px', display: 'flex', gap: '20px' }}>
                                                        <FontAwesomeIcon icon={faLock} color='#cd2c22' fontSize={'24px'} />
                                                        <Typography sx={{ fontSize: '15px' }}>
                                                            The payment is encrypted and
                                                            transmitted securely with an SSL
                                                            protocol.
                                                        </Typography>
                                                    </Box>

                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    </>
}

export default Payment
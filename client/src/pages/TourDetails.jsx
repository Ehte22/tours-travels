import { faCalendar, faCalendarDays, faCheck, faClock, faCrosshairs, faDollar, faEnvelope, faHeadphonesSimple, faMinus, faPhone, faPlus, faStar, faStarHalfAlt, faUser, faUsers, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Card, CardContent, Container, Divider, Grid, IconButton, Paper, Popper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Carousel from '../components/Carousel'
import MapComponent from '../components/MapComponent'
import ReviewCard from '../components/ReviewCard'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const book = [
    { title: 'No-hassle best price guarantee', icon: faDollar },
    { title: 'Customer care available 24/7', icon: faHeadphonesSimple },
    { title: 'Hand-picked Tours & Activities', icon: faStar },
    { title: 'Free Travel Insureance', icon: faCrosshairs },
]

const availableDates = [
    new Date(2024, 7, 28),
    new Date(2024, 7, 29),

];

const TourDetails = () => {
    // const { id } = useParams()
    const location = useLocation()
    const tour = location.state.tour
    const [activeDay, setActiveDay] = useState(() => {
        const initialVisibility = {};
        tour.itinerary.forEach(item => {
            initialVisibility[item.day] = true;
        });
        return initialVisibility;
    })
    const [activeFaq, setActiveFaq] = useState(0)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [anchorEl, setAnchorEl] = useState(null);
    const [count, setCount] = useState(1)

    const navigate = useNavigate()


    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(tour.ratings);
        const hasHalfStar = tour.ratings % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} color={'rgb(246, 213, 23)'} fontSize={'14px'} />);
        }

        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key={'half'} icon={faStarHalfAlt} color={'rgb(246, 213, 23)'} fontSize={'14px'} />);
        }

        return stars;
    };


    const handleDayClick = (day) => {
        setActiveDay(prev => ({
            ...prev,
            [day]: !prev[day]
        }));
    };

    const isDateAvailable = (date) => {
        return availableDates.some(availableDate =>
            date.getFullYear() === availableDate.getFullYear() &&
            date.getMonth() === availableDate.getMonth() &&
            date.getDate() === availableDate.getDate()
        );
    };
    const handleFaqToggle = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        setAnchorEl(null);
    };

    const handleOpen = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handlePayment = () => {
        navigate('/payment', { state: { tour, selectedDate } })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <>
        <Box>
            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: '200px',
                        md: '580px',
                    },
                    backgroundImage: `url(${tour.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: { sm: 'center' },
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0, 0.2)',
                    height: '100%',
                    width: '100%',
                }}></Box>
            </Box>

            <Box marginY={'100px'} paddingX={'12px'}>
                <Container disableGutters>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <Typography sx={{
                                fontFamily: 'ArcaMajora, Arial, sans-serif',
                                fontWeight: 900,
                                fontSize: '28px'
                            }}>{tour.title}</Typography>

                            <Box sx={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                                    {renderStars()}
                                </Box>
                                <Typography color={'gray'} fontSize={'14px'}>({tour.reviews} Reviews) </Typography>
                            </Box>

                            <Box marginTop={'24px'}>
                                <Grid container spacing={2}>
                                    <Grid item md={3}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

                                            <FontAwesomeIcon icon={faClock} color={'#cd2c22'} height={'10px'} width={'16px'} />
                                            <Typography color={'gray'}>
                                                Duration: {tour.duration}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

                                            <FontAwesomeIcon icon={faCalendarDays} color={'#cd2c22'} height={'10px'} width={'16px'} />
                                            <Typography color={'gray'}>
                                                {tour.availiability}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <FontAwesomeIcon icon={faUsers} color={'#cd2c22'} height={'10px'} width={'16px'} />
                                            <Typography color={'gray'}>
                                                Max Peoples: {tour.maxPeople}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <FontAwesomeIcon icon={faUser} color={'#cd2c22'} height={'10px'} width={'16px'} />
                                            <Typography color={'gray'}>
                                                Min Age: {tour.minAge}+
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Divider sx={{ marginY: '36px' }} />

                            <Box>
                                <Typography color={'gray'}>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
                                </Typography>
                                <Typography color={'gray'} marginTop={'20px'}>
                                    Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Comma wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of t
                                </Typography>
                            </Box>

                            <Divider sx={{ marginTop: '36px', marginBottom: '10px' }} />

                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '18px', marginTop: '12px' }}>Price Includes</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        {tour.includes && tour.includes.map((item, i) => <Box key={i} sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '16px',
                                            marginTop: '12px'
                                        }}>
                                            <FontAwesomeIcon icon={faCheck} color={'green'} />
                                            <Typography>{item}</Typography>
                                        </Box>)}
                                    </Grid>
                                </Grid>
                            </Box>

                            <Divider sx={{ marginTop: '20px', marginBottom: '10px' }} />

                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '18px', marginTop: '12px' }}>Price Excludes</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        {tour.excludes && tour.excludes.map((item, i) => <Box key={i} sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '16px',
                                            marginTop: '12px'
                                        }}>
                                            <FontAwesomeIcon icon={faXmark} color={'red'} />
                                            <Typography>{item}</Typography>
                                        </Box>)}
                                    </Grid>
                                </Grid>
                            </Box>

                            <Divider sx={{ marginTop: '20px', marginBottom: '36px' }} />

                            <Box>
                                <Typography sx={{ fontFamily: 'ArcaMajora, Arial, sans-serif', fontWeight: 900, fontSize: '24px', marginBottom: '28px' }}>Photos</Typography>
                                <Carousel images={tour.images} />
                            </Box>

                            <Divider sx={{ marginTop: '48px' }} />

                            <Box>
                                <Typography sx={{ fontFamily: 'ArcaMajora, Arial, sans-serif', fontWeight: 900, fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>Itinerary</Typography>

                                {tour.itinerary && tour.itinerary.map((item, i) => <Box key={i} marginTop={'10px'}>
                                    <Typography
                                        onClick={() => handleDayClick(item.day)}
                                        sx={{ fontWeight: 'bold', backgroundColor: '#F3F3F3', paddingX: '28px', paddingY: '12px', cursor: 'pointer' }}>
                                        Day {item.day}
                                        <Typography variant='span' sx={{
                                            marginLeft: '20px',
                                            color: activeDay[item.day] ? '#cd2c22' : ''
                                        }}>{item.title}</Typography>
                                    </Typography>

                                    {
                                        activeDay[item.day] && <Typography sx={{ marginY: '24px', color: 'gray' }}>
                                            {item.desc}
                                        </Typography>
                                    }
                                </Box>)}

                            </Box>

                            <Divider sx={{ marginTop: '48px' }} />

                            <Box>
                                <Typography sx={{ fontFamily: 'ArcaMajora, Arial, sans-serif', fontWeight: 900, fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>Map</Typography>

                                <MapComponent location={tour.location} />
                            </Box>

                            <Divider sx={{ marginTop: '48px' }} />

                            <Box>
                                <Typography sx={{ fontFamily: 'ArcaMajora, Arial, sans-serif', fontWeight: 900, fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>FAQ</Typography>
                                <Box>
                                    {tour.faqs &&
                                        tour.faqs.map((item, i) => <Box key={i} marginTop={'12px'}>
                                            <Box display="flex" alignItems="center">
                                                <IconButton
                                                    onClick={() => handleFaqToggle(i)}
                                                    sx={{ backgroundColor: '#f6f5f5', borderRadius: '0', height: '40px', width: '40px' }}
                                                >
                                                    <FontAwesomeIcon icon={activeFaq === i ? faMinus : faPlus} fontSize={'16px'} />
                                                </IconButton>
                                                <Typography variant="body1" sx={{ fontWeight: 'bold', marginLeft: '20px' }}>
                                                    {item.title}
                                                </Typography>
                                            </Box>

                                            {activeFaq === i && (
                                                <Box sx={{ marginLeft: '60px', marginTop: '20px', marginBottom: '32px' }}>
                                                    {item.desc.split('\n').map((line, i) => (
                                                        <Typography key={i} sx={{ marginBottom: '8px', color: 'gray' }}>
                                                            {line.trim()}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            )}
                                        </Box>
                                        )}
                                </Box>
                            </Box>

                            <Divider sx={{ marginTop: '48px' }} />

                            <Box>
                                <Typography sx={{ fontFamily: 'ArcaMajora, Arial, sans-serif', fontWeight: 900, fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>Reviews</Typography>

                                <ReviewCard md={12} lg={12} />
                            </Box>

                            <Divider sx={{ display: { xs: 'block', md: 'none' }, marginBottom: '20px', marginTop: '40px' }} />
                        </Grid>


                        <Grid item xs={12} md={4} >
                            <Box sx={{ height: '100%', position: 'relative' }}>
                                <Box sx={{ position: 'sticky', top: '280px' }}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Box sx={{ position: 'relative', top: { md: '-180px' } }}>
                                                <Card sx={{ padding: '16px' }}>
                                                    <CardContent>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>Best Seller</Typography>
                                                        <Typography sx={{
                                                            fontFamily: 'ArcaMajora, Arial, sans-serif',
                                                            fontWeight: 900,
                                                            marginTop: '10px',
                                                            fontSize: '24px'
                                                        }}>${tour.price * count}.00</Typography>

                                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                            <Box sx={{ marginTop: '20px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                                                                <IconButton onClick={handleOpen}>
                                                                    <FontAwesomeIcon icon={faCalendar} color={'#cd2c22'} fontSize={'18px'} />
                                                                </IconButton>
                                                                <Typography variant='span' marginLeft={'10px'}>
                                                                    {selectedDate.toLocaleDateString('en-US', {
                                                                        year: 'numeric',
                                                                        month: 'long',
                                                                        day: 'numeric',
                                                                    })}
                                                                </Typography>
                                                            </Box>

                                                            <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="bottom-start">
                                                                <Paper>
                                                                    <DatePicker
                                                                        open
                                                                        disableOpenPicker
                                                                        value={selectedDate}
                                                                        onChange={handleDateChange}
                                                                        shouldDisableDate={(date) => !isDateAvailable(date)}
                                                                        renderInput={() => null}
                                                                    />
                                                                </Paper>
                                                            </Popper>
                                                        </LocalizationProvider>

                                                        <Box sx={{ fontSize: '18px', marginTop: '16px', marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                                            <FontAwesomeIcon icon={faUsers} color={'#cd2c22'} />
                                                            <Box sx={{ marginLeft: '14px' }}>
                                                                <Button onClick={() => setCount(count > 1 ? count - 1 : count)} variant='outlined' sx={{
                                                                    height: '30px', width: '20px', minWidth: '30px', borderColor: '#cd2c22',
                                                                    '&:hover': {
                                                                        borderColor: '#cd2c22'
                                                                    }
                                                                }}>
                                                                    <FontAwesomeIcon icon={faMinus} width={'20px'} color='#cd2c22' fontSize={'12px'} />
                                                                </Button>
                                                                <Typography component="span" sx={{ display: "inline-block", width: '70px', textAlign: 'center' }}>
                                                                    {count}
                                                                </Typography>
                                                                <Button onClick={() => setCount(count + 1)} variant='outlined' sx={{
                                                                    height: '30px', width: '20px', minWidth: '30px', borderColor: '#cd2c22',
                                                                    '&:hover': {
                                                                        borderColor: '#cd2c22'
                                                                    }
                                                                }}>
                                                                    <FontAwesomeIcon icon={faPlus} width={'20px'} color='#cd2c22' fontSize={'12px'} />
                                                                </Button>
                                                            </Box>
                                                        </Box>

                                                        <Button variant='contained' onClick={handlePayment}
                                                            sx={{
                                                                marginTop: '20px', backgroundColor: '#cd2c22', width: '100%',
                                                                paddingY: '8px', '&:hover': { backgroundColor: '#cd2c22' }
                                                            }}>
                                                            PROCEED BOOKING
                                                        </Button>
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
                                                backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661936495413-875706d59696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                                marginTop: '28px',
                                            }}>
                                                <Box sx={{
                                                    height: '100%',
                                                    width: '100%',
                                                    backgroundColor: 'rgba(205, 44, 34, 0.87)',
                                                    paddingX: '30px', paddingY: '40px',
                                                    color: '#f3f3f3'
                                                }}>
                                                    <Typography sx={{
                                                        fontFamily: 'ArcaMajora, Arial, sans-serif',
                                                        fontWeight: 900,
                                                        fontSize: '20px'
                                                    }}>
                                                        Get a Question?
                                                    </Typography>
                                                    <Typography sx={{ marginTop: '14px', fontSize: '15px' }}>
                                                        Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.
                                                    </Typography>

                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '24px', gap: '10px' }}>
                                                        <FontAwesomeIcon icon={faPhone} width='24px' />
                                                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                                                            1.8445.3356.33
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px', gap: '10px' }}>
                                                        <FontAwesomeIcon icon={faEnvelope} width='24px' />
                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                            Help@goodlayers.com
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </Box >
    </>
}

export default TourDetails
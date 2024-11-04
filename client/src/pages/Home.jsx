import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faCar, faCertificate, faGlobe, faHotel, faPlane, faTag, } from '@fortawesome/free-solid-svg-icons';
import { CabForm, FlightForm, HotelForm, TourForm } from '../components/Forms';
import TourCard from '../components/TourCard';
import { grey } from '@mui/material/colors';
import ReviewCard from '../components/ReviewCard';

const buttons = [
    { name: 'Hotels', icon: faHotel, form: <HotelForm /> },
    { name: 'Flights', icon: faPlane, form: <FlightForm /> },
    { name: 'Tour', icon: faGlobe, form: <TourForm /> },
    { name: 'Cab', icon: faCar, form: <CabForm /> },
]

const populatDestination = [
    { image: '/europe.jpg', title: 'Western Europe', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.', tours: 3, xs: 12, sm: 12, md: 8 },
    { image: '/scandivania.jpg', title: 'Scandinavia', desc: 'Explore the beautiful landscapes and cultures of Scandinavia.', tours: 2, xs: 12, sm: 6, md: 4 },
    { image: '/asia.jpg', title: 'Asia', desc: 'Discover the rich history and diverse cultures of Asia.', tours: 5, xs: 12, sm: 6, md: 4 },
    { image: '/america.jpg', title: 'America', desc: 'Experience the vibrant cultures and stunning landscapes of America.', tours: 4, xs: 12, sm: 6, md: 4 },
    { image: '/africa-wild.jpg', title: 'Africa Wild', desc: 'Embark on an adventure through the wild landscapes of Africa.', tours: 3, xs: 12, sm: 6, md: 4 },
]

const populatTours = [
    {
        image: "/venice-tour.jpg",
        title: "Venice, Rome and Milan - 9 Days 8 Nights",
        duration: "7 Days 6 Nights",
        ratings: 5,
        review: "477 Review", price: "$4,300", discountedPrice: "$3,500", seller: "Best Seller"
    },
    {
        image: "/paris-tour.jpg",
        title: "Enquiry Form Only - Paris - 6 Days 5 Nights",
        duration: "5 Days 4 Nights",
        ratings: 4.5,
        review: "976 Review", price: "$3,300", discountedPrice: "$2,500", seller: "Best Seller"
    },
    {
        image: "/moscow-tour.jpg",
        title: "Two Capitals Tour of 7 days and 6 nights",
        duration: "8 Days 7 Nights",
        ratings: 4,
        review: "675 Review", price: "$3,880", discountedPrice: "$3,000"
    }
]

const blogDescription = 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be...'

const articles = [
    { author: 'John Smith', title: 'How to travel with paper map', desc: blogDescription, image: 'home-article1.jpg', date: 'June 6, 2016', category: 'Uncategorized', comments: 0 },
    { author: 'John Smith', title: 'Change your place and get the fresh air', desc: blogDescription, image: 'home-article2.jpg', date: 'June 6, 2016', category: 'Uncategorized', comments: 0 },
    { author: 'John Smith', title: 'Pityful a rethoric question ran', desc: blogDescription, image: 'home-article3.jpg', date: 'June 6, 2016', category: 'Uncategorized', comments: 0 },
]
const Home = () => {
    const [selectedForm, setSelectedForm] = useState(<HotelForm />)

    const handleClickButton = (form) => {
        setSelectedForm(form)
    }
    return <>
        <Box sx={{ overflow: 'hidden' }}>
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '120vh', sm: '100vh' },
                    // width: '100vw',
                }}
            >
                <Box
                    sx={{
                        backgroundImage: 'url(https://shreethemes.net/geotrip-live/geotrip/assets/img/banner-8.jpg)',
                        height: '100%',
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 1,
                        paddingX: { xs: '16px', sm: '42px', md: '66px', lg: '90px' },
                    }}
                >
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <Typography sx={{
                            fontFamily: 'ArcaMajora, Arial, sans-serif',
                            fontWeight: 'bold', letterSpacing: '4px',
                            fontSize: {
                                xs: '35px',
                                sm: '28px',
                                md: '46px',
                                lg: '60px',
                            }
                        }}>
                            Explore The World Around You
                        </Typography>
                        <Typography variant='body1' sx={{ color: 'gainsboro', marginTop: '8px' }}>
                            Take a little break from the work strss of everyday. Discover plan trip and explore beautiful destinations.
                        </Typography>

                        <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            {
                                buttons && buttons.map(item => <Button
                                    key={item.name}
                                    onClick={() => handleClickButton(item.form)}
                                    sx={{
                                        backgroundColor: `#f5f6f71a`,
                                        color: 'white',
                                        textTransform: 'none',
                                        paddingy: '10px',
                                        paddingX: '14px',
                                        gap: '10px',
                                        '&:hover': {
                                            backgroundColor: '#f5f6f71a',
                                            color: 'white',
                                        },
                                        '&:focus': {
                                            color: '#cd2c22',
                                            backgroundColor: 'white',
                                            '& .MuiSvgIcon-root': {
                                                color: '#cd2c22',
                                            },
                                        },
                                    }}
                                >
                                    <FontAwesomeIcon icon={item.icon} className="MuiSvgIcon-root" color='white' />
                                    {item.name}
                                </Button>)
                            }
                        </Box>

                        <Box sx={{ marginTop: '16px', padding: '16px', backgroundColor: 'white', width: '100%', borderRadius: '10px' }}>
                            {selectedForm}
                        </Box>

                    </Box>



                </Box>

            </Box>

            <Box
                sx={{
                    position: 'relative',
                    top: {
                        xs: '0px',
                        md: '-40px',
                    },
                    zIndex: 1,
                    marginX: 'auto'
                }}
            >
                <Container sx={{
                    borderRadius: '3px',
                    background: 'linear-gradient(rgba(205, 44, 34, 1), rgba(255, 102, 92, 1))',
                    paddingY: '40px'
                }}>
                    <Grid
                        container
                        sx={{
                            color: 'white',
                            height: '100%',
                            justifyContent: 'center',
                            gap: {
                                xs: '30px',
                                md: '0px'
                            }
                        }}
                    >
                        <Grid item sm={7} md={4} sx={{ paddingX: '16px', display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faGlobe} fontSize={'40px'} />
                            <Box sx={{ color: 'white' }}>
                                <Typography sx={{ fontWeight: 'bold', letterSpacing: '2px' }}>
                                    700+ Destinations
                                </Typography>
                                <Typography>Our expert team handpicked all destinations in this site</Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={7} md={4} sx={{ paddingX: '16px', display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faTag} fontSize={'40px'} />
                            <Box>
                                <Typography sx={{ fontWeight: 'bold', letterSpacing: '2px' }}>
                                    Best Price Guarantee
                                </Typography>
                                <Typography>
                                    Price match within 48 hours of order confirmation
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={7} md={4} sx={{ paddingX: '16px', display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faCertificate} fontSize={'40px'} />
                            <Box>
                                <Typography sx={{ fontWeight: 'bold', letterSpacing: '2px' }}>
                                    Top Notch Support
                                </Typography>
                                <Typography>
                                    We are here to help, before, during, and even after your trip.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <PopularDest />
            <PopularTours />


            <Box marginTop={'70px'}>
                <Container disableGutters >
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{
                                background: 'linear-gradient(rgba(205, 44, 34, 1), rgba(255, 102, 92, 1))',
                                height: '350px',
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Typography variant='h5' sx={{ color: grey[300], fontWeight: 'bold' }}>
                                    Enjoy Summer Deals
                                </Typography>
                                <Typography variant='h4' sx={{ fontWeight: 'bold', marginTop: '5px' }}>
                                    Up to 40% Discount!
                                </Typography>
                                <Typography sx={{ marginTop: '10px', fontSize: '20px' }}>
                                    Geo <Typography variant='span' sx={{ color: grey[300] }}>Trip</Typography>
                                </Typography>
                                <Typography sx={{ marginTop: '8px', fontSize: '12px' }}>
                                    *Terms applied
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <Box
                                sx={{
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1473172707857-f9e276582ab6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    width: '100%',
                                    height: '350px',
                                }}>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            <RecomendedTours />
            <Box marginTop={'100px'} >
                <Box
                    sx={{
                        backgroundImage: 'url(  https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        width: '100%',
                        height: '600px',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center bottom',
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Box>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: {
                                        xs: '35px',
                                        sm: '46px',
                                        md: '56px'
                                    },
                                    fontWeight: 700,
                                    letterSpacing: '0px',
                                    textTransform: 'none',
                                }}
                            >
                                Traveling Highlights
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: '23px',
                                    letterSpacing: '0px',
                                    textTransform: 'none',
                                    color: '#cd2c22',
                                    marginTop: '25px',
                                }}
                            >
                                Your New Traveling Idea
                            </Typography>
                        </Box>
                    </Box>


                </Box>
            </Box>


            <Box sx={{ marginTop: '70px', paddingX: '12px' }}>
                <Container disableGutters>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'center', marginBottom: '50px' }}
                    >
                        Customer Reviews
                    </Typography>

                    <ReviewCard md={6} lg={4} />

                </Container>
            </Box>

            <RecentArticles />

            <Box marginTop={'100px'}  >
                <Box
                    sx={{
                        backgroundImage: 'url(/bg.jpg)',
                        width: '100%',
                        height: '500px',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center ',
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingX: '12px'
                        }}>
                        <Box>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: {
                                        xs: '25px',
                                        sm: '36px',
                                    },
                                    fontWeight: 700,
                                    letterSpacing: '0px',
                                    textTransform: 'none',
                                }}
                            >
                                <Box>Subscribe and Get</Box>
                                <Box sx={{ marginTop: '10px' }}>Special Discount with GeoTrip.com</Box>
                            </Typography>


                            <Box
                                sx={{
                                    backgroundColor: 'white',
                                    borderRadius: 3,
                                    padding: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '40px',
                                    width: {
                                        md: '800px',
                                        lg: '1000px'
                                    }
                                }}
                            >
                                <Grid container spacing={0} alignItems="center">
                                    <Grid item xl={9} lg={8} md={8} xs={12}>
                                        <TextField
                                            variant="outlined"
                                            placeholder="Enter Your Mail!"
                                            fullWidth
                                            InputProps={{
                                                style: {
                                                    fontWeight: 'bold',
                                                    paddingLeft: '8px',
                                                    border: 'none',
                                                },
                                                sx: {
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            border: 'none',
                                                        },
                                                    },
                                                },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 0,
                                                },
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={4} md={4} xs={12}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                fontWeight: 'medium',
                                                backgroundColor: '#cd2c22',
                                                color: 'white',
                                                padding: '10px 16px',
                                                '&:hover': {
                                                    backgroundColor: '#a3231a',
                                                }
                                            }}
                                        >
                                            Submit
                                            <FontAwesomeIcon icon={faArrowTrendUp} style={{ marginLeft: '8px' }} />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>


                </Box>
            </Box>

        </Box >

    </>
}

export default Home;

const PopularDest = () => {
    return <>
        <Box sx={{ paddingX: { xs: '12px' } }}>
            <Container disableGutters>
                <Box sx={{ marginTop: '20px' }} >
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}
                    >
                        Popular Destinations
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link sx={{ textDecoration: 'none', color: '#cd2c22' }}>
                            View All Destinations
                        </Link>
                    </Box>
                </Box>

                <Box marginTop={'36px'} >
                    <Grid container spacing={{ xs: 4, sm: 2, md: 4 }}>
                        {populatDestination.map((item, i) => <Grid key={i} item sm={item.sm} xs={item.xs} md={item.md} height={'100%'}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    maxWidth: '1150px',
                                    borderRadius: '3px',
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        '& .tour-info': {
                                            opacity: 1,
                                            transform: 'translateY(0)',
                                        },
                                    },
                                    '&:hover .title': {
                                        opacity: 0,
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.image}
                                    alt={item.title}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        borderRadius: '3px',
                                    }}
                                />
                                <Box
                                    className='title'
                                    sx={{ position: 'absolute', bottom: 40, width: '100%', color: 'white', zIndex: 10 }}
                                >
                                    <Typography sx={{
                                        fontFamily: 'ArcaMajora, Arial, sans-serif',
                                        margin: 0, fontSize: '24px', textAlign: 'center', fontWeight: 'bold',
                                    }}>
                                        {item.title}
                                    </Typography>
                                </Box>
                                <Box
                                    className="tour-info"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        padding: '20px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        color: 'white',
                                        borderRadius: '0 0 3px 3px',
                                        opacity: 0,
                                        transform: 'translateY(100%)',
                                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        paddingX: '40px'
                                    }}
                                >
                                    <Typography sx={{ fontFamily: 'ArcaMajora, Arial, sans-serif', margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ marginTop: '10px', textAlign: 'center', fontSize: '16px' }}>
                                        {item.desc}
                                    </Typography>
                                    <Link
                                        href="https://demo.goodlayers.com/traveltour/main4/tour-destination/western-europe/"
                                        underline="none"
                                        sx={{ marginTop: '15px', display: 'inline-block', color: '#cd2c22', fontWeight: 'bold' }}
                                    >
                                        View all tours
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        backgroundColor: '#cd2c22',
                                        padding: '5px 10px',
                                        color: 'white',
                                        fontSize: '14px',
                                        borderRadius: '3px',
                                    }}
                                >
                                    {item.tours} tours
                                </Box>
                            </Box>
                        </Grid>)}
                    </Grid>
                </Box>
            </Container>
        </Box >
    </>
}

const PopularTours = () => {
    return <>
        <Box sx={{ paddingX: '12px' }}>
            <Container disableGutters>
                <Box sx={{ marginTop: '50px' }}>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}
                    >
                        Popular Tours
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link sx={{ textDecoration: 'none', color: '#cd2c22' }}>
                            View All Popular Tours
                        </Link>
                    </Box>
                </Box>

                <Box sx={{ marginTop: '36px' }}>
                    <Grid container spacing={{ xs: 4, sm: 2, md: 4 }}>
                        {populatTours && populatTours.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <TourCard item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    </>
}

const RecomendedTours = () => {
    return <>
        <Box sx={{ paddingX: '12px' }}>
            <Container disableGutters>
                <Box sx={{ marginTop: '50px' }}>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}
                    >
                        Our Redomended
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link sx={{ textDecoration: 'none', color: '#cd2c22' }}>
                            View All Recomended
                        </Link>
                    </Box>
                </Box>

                <Box sx={{ marginTop: '36px' }}>
                    <Grid container spacing={{ xs: 4, sm: 2, md: 4 }}>
                        {populatTours && populatTours.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <TourCard item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    </>
}


const RecentArticles = () => {
    return <>
        <Box marginTop={"70px"} paddingX={'12px'}>
            <Container disableGutters>
                <Typography
                    sx={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}
                >
                    Recent Articles
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <Link sx={{ textDecoration: 'none', color: '#cd2c22' }}>
                        Read The Blog
                    </Link>
                </Box>

                <Box marginTop={'40px'}>
                    <Grid container spacing={{ xs: 4, sm: 2, md: 4 }}>
                        {articles && articles.map((item, i) => <Grid key={i} item xs={12} sm={6} md={4}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    maxWidth: '600px',
                                    margin: 'auto',
                                    overflow: 'hidden', // Ensures no overflow
                                    cursor: 'pointer',
                                    '&:hover .overlay': {
                                        opacity: 1,
                                    },
                                    '&:hover .image': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                {/* Image Box */}
                                <img
                                    className="image"
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        transition: 'transform 0.3s ease-in-out',
                                        display: 'block', // Ensures no extra space below the image
                                    }}
                                />

                                {/* Overlay Box */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease-in-out',
                                    }}
                                />

                                {/* Content Box */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        color: 'white',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        height: '100%',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        paddingX: '30px',
                                        paddingTop: '80%'
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 400 }}>
                                        <a style={{ color: 'inherit', textDecoration: 'none' }}>
                                            {item.title}
                                        </a>
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                                        <Typography variant="body2" sx={{ marginRight: '8px' }}>
                                            <i className="icon_clock_alt"></i> {item.date}
                                        </Typography>
                                        <Typography variant="body2">
                                            <i className="icon_documents_alt"></i> {item.author}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                        </Grid>)}
                    </Grid>
                </Box>

            </Container>
        </Box>
    </>
}



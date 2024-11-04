import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faPlaneDeparture, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const AdminTourCard = ({ item, setOpenModal }) => {

    const navigate = useNavigate()
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(item.ratings);
        const hasHalfStar = item.ratings % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} color={'rgb(246, 213, 23)'} fontSize={'12px'} />);
        }

        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key={'half'} icon={faStarHalfAlt} color={'rgb(246, 213, 23)'} fontSize={'12px'} />);
        }

        return stars;
    };

    const handleTourDetails = () => {
        navigate(`/tour-details/${item.id}`, { state: { tour: item } })
    }
    return <>
        <Card>
            <CardMedia
                component="img"
                image={`${import.meta.env.VITE_BACKEND_URL}/${item.images[0]}`}
                // image={item.images[0]}
                alt={item.name}
            />
            <CardContent>
                <Box sx={{ padding: {} }}>
                    <Grid container spacing={2}>
                        <Grid item xs={9} >
                            <Box sx={{ borderRight: '1px solid gainsboro' }}>
                                <Typography sx={{
                                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                                    fontSize: '20px',
                                    textTransform: 'uppercase',
                                    fontWeight: 900
                                }}>{item.name}</Typography>

                                <Box sx={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>

                                    <FontAwesomeIcon icon={faClock} color={'#cd2c22'} height={'10px'} width={'16px'} />
                                    <Typography color={'gray'}>
                                        {item.duration}
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>

                                    <FontAwesomeIcon icon={faCalendarDays} color={'#cd2c22'} height={'10px'} width={'16px'} />
                                    <Typography color={'gray'}>
                                        Availiability: {item.availiability}
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>

                                    <FontAwesomeIcon icon={faPlaneDeparture} color={'#cd2c22'} height={'10px'} width={'16px'} />
                                    <Typography color={'gray'}>
                                        {item.location}
                                    </Typography>
                                </Box>

                                <Typography sx={{ color: 'gray', marginTop: '14px' }}>
                                    {item.desc}
                                </Typography>
                            </Box>



                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Typography color={'gray'}>From</Typography>
                                <Typography sx={{ color: '#cd2c22', fontFamily: 'ArcaMajora, Arial, sans-serif', fontSize: '24px', fontWeight: 900 }}>${item.price}</Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                    {renderStars()}
                                </Box>

                                <Typography textAlign={'center'} color={'gray'} marginTop={'4px'} fontSize={'12px'}>({item.reviews}) Reviews</Typography>

                                <Button variant='contained'
                                    onClick={() => {
                                        handleTourDetails
                                        setOpenModal(true)
                                    }}
                                    sx={{
                                        marginTop: '12px',
                                        backgroundColor: '#cd2c22',
                                        fontSize: '12px',
                                        paddingY: '10px',
                                        paddingX: '16px',
                                        '&:hover': { backgroundColor: '#cd2c22' }
                                    }}>VIEW DETAILS</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card >
    </>
}

AdminTourCard.propTypes = {
    item: PropTypes.object.isRequired,
    setOpenModal: PropTypes.func.isRequired
}

export default AdminTourCard
import { faQuoteLeft, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const review = [
    {
        name: "Luaka Smith",
        image: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        review: "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.",
        rating: 5,
        traverls: "Solo Traveler"
    },
    {
        name: "Luaka Smith",
        image: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        review: "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.",
        rating: 5,
        traverls: "Solo Traveler"
    },
    {
        name: "Luaka Smith",
        image: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        review: "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.",
        rating: 5,
        traverls: "Solo Traveler"
    }
]

const ReviewCard = ({ md, lg }) => {
    const renderStars = (item) => {
        const stars = [];
        const fullStars = Math.floor(item.rating);
        const hasHalfStar = item.rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} color={'rgb(246, 213, 23)'} fontSize={'12px'} />);
        }

        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key={'half'} icon={faStarHalfAlt} color={'rgb(246, 213, 23)'} fontSize={'12px'} />);
        }

        return stars;
    };
    return <>


        <Box>
            <Grid container spacing={{ xs: 4, sm: 2, md: 4 }}>
                {review && review.map((item, i) => <Grid key={i} item md={md} lg={lg}>
                    <Card sx={{ padding: '30px' }}>
                        <CardContent>
                            <FontAwesomeIcon icon={faQuoteLeft} fontSize={'40px'} />
                            <Typography marginY={'16px'}>
                                {item.review}
                            </Typography>

                            <Box sx={{ display: 'flex', gap: '20px' }}>
                                <Box sx={{
                                    height: '60px',
                                    width: '60px',
                                    backgroundImage: `url(${item.image})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    borderRadius: '50%'

                                }}>
                                </Box>

                                <Box>
                                    <Typography variant='body1'
                                        sx={{
                                            fontSize: '18px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {item.name}
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', marginY: '3px' }}>
                                        {renderStars(item)}
                                    </Box>
                                    <Typography>{item.traverls}</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                </Grid>)}
            </Grid>
        </Box>
    </>
}

ReviewCard.propTypes = {
    md: PropTypes.number.isRequired,
    lg: PropTypes.number.isRequired,
};

export default ReviewCard
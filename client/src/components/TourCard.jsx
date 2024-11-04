import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import PropTypes from 'prop-types';


const TourCard = ({ item }) => {
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

    return <>
        <Box>
            <Card sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                />

                <CardContent >
                    {
                        item.seller &&
                        <Typography variant='span' sx={{ position: 'absolute', }}>
                            <Box sx={{ position: 'relative', bottom: '34px', backgroundColor: '#cd2c22', paddingX: '10px', paddingY: '5px', color: 'white', fontWeight: 'bold', fontSize: '14px' }}>
                                {item.seller}
                            </Box>
                        </Typography>
                    }
                    <Typography sx={{ fontFamily: 'ArcaMajora, Arial, sans-serif', fontSize: '20px' }}>
                        {item.title}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box marginTop={'10px'} >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 465 465" xmlSpace="preserve" width="20px" height="20px" fill="#cd2c22" >

                                    <path d="M279.591,423.714c-3.836,0.956-7.747,1.805-11.629,2.52c-10.148,1.887-16.857,11.647-14.98,21.804
c0.927,4.997,3.765,9.159,7.618,11.876c3.971,2.795,9.025,4.057,14.175,3.099c4.623-0.858,9.282-1.867,13.854-3.008
c10.021-2.494,16.126-12.646,13.626-22.662C299.761,427.318,289.618,421.218,279.591,423.714z"></path>
                                    <path d="M417.887,173.047c1.31,3.948,3.811,7.171,6.97,9.398c4.684,3.299,10.813,4.409,16.662,2.475
c9.806-3.256,15.119-13.83,11.875-23.631c-1.478-4.468-3.118-8.95-4.865-13.314c-3.836-9.59-14.714-14.259-24.309-10.423
c-9.585,3.834-14.256,14.715-10.417,24.308C415.271,165.528,416.646,169.293,417.887,173.047z"></path>
                                    <path d="M340.36,397.013c-3.299,2.178-6.704,4.286-10.134,6.261c-8.949,5.162-12.014,16.601-6.854,25.546
c1.401,2.433,3.267,4.422,5.416,5.942c5.769,4.059,13.604,4.667,20.127,0.909c4.078-2.352,8.133-4.854,12.062-7.452
c8.614-5.691,10.985-17.294,5.291-25.912C360.575,393.686,348.977,391.318,340.36,397.013z"></path>
                                    <path d="M465.022,225.279c-0.407-10.322-9.101-18.356-19.426-17.953c-10.312,0.407-18.352,9.104-17.947,19.422
c0.155,3.945,0.195,7.949,0.104,11.89c-0.145,6.473,3.021,12.243,7.941,15.711c2.931,2.064,6.488,3.313,10.345,3.401
c10.322,0.229,18.876-7.958,19.105-18.285C465.247,234.756,465.208,229.985,465.022,225.279z"></path>
                                    <path d="M414.835,347.816c-8.277-6.21-19.987-4.524-26.186,3.738c-2.374,3.164-4.874,6.289-7.434,9.298
c-6.69,7.86-5.745,19.666,2.115,26.361c0.448,0.38,0.901,0.729,1.371,1.057c7.814,5.509,18.674,4.243,24.992-3.171
c3.057-3.59,6.037-7.323,8.874-11.102C424.767,365.735,423.089,354.017,414.835,347.816z"></path>
                                    <path d="M442.325,280.213c-9.855-3.09-20.35,2.396-23.438,12.251c-1.182,3.765-2.492,7.548-3.906,11.253
c-3.105,8.156-0.13,17.13,6.69,21.939c1.251,0.879,2.629,1.624,4.126,2.19c9.649,3.682,20.454-1.159,24.132-10.812
c1.679-4.405,3.237-8.906,4.646-13.382C457.66,293.795,452.178,283.303,442.325,280.213z"></path>
                                    <path d="M197.999,426.402c-16.72-3.002-32.759-8.114-47.968-15.244c-0.18-0.094-0.341-0.201-0.53-0.287
c-3.584-1.687-7.162-3.494-10.63-5.382c-0.012-0.014-0.034-0.023-0.053-0.031c-6.363-3.504-12.573-7.381-18.606-11.628
C32.24,331.86,11.088,209.872,73.062,121.901c13.476-19.122,29.784-35.075,47.965-47.719c0.224-0.156,0.448-0.311,0.67-0.468
c64.067-44.144,151.06-47.119,219.089-1.757l-14.611,21.111c-4.062,5.876-1.563,10.158,5.548,9.518l63.467-5.682
c7.12-0.64,11.378-6.799,9.463-13.675L387.61,21.823c-1.908-6.884-6.793-7.708-10.859-1.833l-14.645,21.161
C312.182,7.638,252.303-5.141,192.87,5.165c-5.986,1.036-11.888,2.304-17.709,3.78c-0.045,0.008-0.081,0.013-0.117,0.021
c-0.225,0.055-0.453,0.128-0.672,0.189C123.122,22.316,78.407,52.207,46.5,94.855c-0.269,0.319-0.546,0.631-0.8,0.978
c-1.061,1.429-2.114,2.891-3.145,4.353c-1.686,2.396-3.348,4.852-4.938,7.308c-0.199,0.296-0.351,0.597-0.525,0.896
C10.762,149.191-1.938,196.361,0.24,244.383c0.005,0.158-0.004,0.317,0,0.479c0.211,4.691,0.583,9.447,1.088,14.129
c0.027,0.302,0.094,0.588,0.145,0.89c0.522,4.708,1.177,9.427,1.998,14.145c8.344,48.138,31.052,91.455,65.079,125.16
c0.079,0.079,0.161,0.165,0.241,0.247c0.028,0.031,0.059,0.047,0.086,0.076c9.142,9.017,19.086,17.357,29.793,24.898
c28.02,19.744,59.221,32.795,92.729,38.808c10.167,1.827,19.879-4.941,21.703-15.103
C214.925,437.943,208.163,428.223,197.999,426.402z"></path>
                                    <path d="M221.124,83.198c-8.363,0-15.137,6.78-15.137,15.131v150.747l137.87,71.271c2.219,1.149,4.595,1.69,6.933,1.69
c5.476,0,10.765-2.982,13.454-8.185c3.835-7.426,0.933-16.549-6.493-20.384l-121.507-62.818V98.329
C236.243,89.978,229.477,83.198,221.124,83.198z"></path>
                                </svg>
                                <Typography>
                                    {item.duration}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', marginTop: '12px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                    {renderStars()}
                                </Box>
                                <Box fontSize={'12px'}>({item.review})</Box>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: 'end' }}>
                            <Typography sx={{ marginTop: "20px", color: 'gray', textDecoration: 'line-through' }}>
                                {item.price}
                            </Typography>
                            <Typography sx={{ color: '#cd2c22', fontSize: '20px', fontWeight: 'bold' }}>
                                {item.discountedPrice}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box >
    </>
}

TourCard.propTypes = {
    item: PropTypes.object.isRequired
};

export default TourCard
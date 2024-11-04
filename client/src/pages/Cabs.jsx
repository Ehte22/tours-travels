import { Box, Button, Card, CardContent, Checkbox, Container, Divider, FormControl, FormControlLabel, Grid, MenuItem, Select, Slider, Typography } from '@mui/material'
import { useState } from 'react'
import { CabForm } from '../components/Forms'
import { faLocationDot, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropTypes } from 'prop-types'

const filterType = [
    { type: 'Start Ratings', options: [5, 4, 3, 2, 1], icon: faStar },
    { type: 'Car Modal', options: ['Hyundai', 'Maruti Suzuki', 'Tata', 'Mahindra', 'Kia'] }
]

const carList = [
    {
        name: 'Mercedes-Benz A 200 CDI',
        reviews: 2483,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lo bortis faucibus. Lorem ipsum dolor sit amet, conse dolor sit amet.',
        image: '/cars/car.jpg',
        location: 'Mumbai',
        km: 47838,
        fuelType: 'Diesel',
        carType: 'Automatic',
        price: 200,
        ratings: 5,
    },
    {
        name: 'Royal Plaza on Scotts',
        reviews: 3198,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lo bortis faucibus. Lorem ipsum dolor sit amet, conse dolor sit amet.',
        image: '/cars/car.jpg',
        location: 'Hyderabad',
        km: 29574,
        fuelType: 'Petrol',
        carType: 'Automatic',
        price: 237,
        ratings: 4.5,
    },
    {
        name: 'Siloso Beach Resort - Sentosa',
        reviews: 2793,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lo bortis faucibus. Lorem ipsum dolor sit amet, conse dolor sit amet.',
        image: '/cars/car.jpg',
        location: 'Pune',
        km: 10438,
        fuelType: 'Diesel',
        carType: 'Automatic',
        price: 149,
        ratings: 5,
    }
]

const Cabs = () => {

    const [sortBy, setSortBy] = useState({
        ranking: 0,
        price: 50
    })
    const [filterBy, setFilterBy] = useState({
        'Start Ratings': [],
        'Car Modal': [],
    });

    const [filterByPrice, setFilterByPrice] = useState([0, 2000])

    const handleChangeSort = (e) => {
        const { name, value } = e.target
        setSortBy({ ...sortBy, [name]: value })
    }

    const handleChangeFilter = (type, option) => {
        setFilterBy((prevFilters) => {

            const currentFilters = prevFilters[type] || [];

            const newFilters = currentFilters.includes(option)
                ? currentFilters.filter((item) => item !== option)
                : [...currentFilters, option];

            return { ...prevFilters, [type]: newFilters };
        });
    };
    return <>

        <Box sx={{ overflow: 'hidden' }}>
            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: '100vh',
                        sm: '56vh',
                    },
                    backgroundImage: 'url(/cars/car-bg.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box sx={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px'
                }}>
                    <Container disableGutters>
                        <Box sx={{ marginTop: { md: '32px' }, padding: '16px', backgroundColor: 'white', width: '100%', borderRadius: '10px' }}>
                            <CabForm />
                        </Box>
                    </Container>
                </Box>

            </Box>

            <Box sx={{ marginY: '100px', paddingX: '12px' }}>
                <Container disableGutters>
                    <Grid container spacing={4}>
                        <Grid item md={8}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <Card>
                                        <CardContent>
                                            <Grid container spacing={4}>
                                                <Grid item xs={6} sx={{ display: 'flex', gap: { sm: '10px' }, alignItems: 'center' }}>
                                                    <Typography>Sort By Ranking:</Typography>
                                                    <FormControl sx={{ width: '120px' }}>
                                                        <Select
                                                            value={sortBy.ranking}
                                                            displayEmpty
                                                            onChange={handleChangeSort}
                                                            inputProps={{ 'aria-label': 'Without label', name: 'ranking' }}
                                                            sx={{
                                                                width: '120px',
                                                                height: '40px',
                                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#cd2c22',
                                                                },
                                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#cd2c22',
                                                                },

                                                            }}
                                                        >
                                                            <MenuItem value={0}>0</MenuItem>
                                                            <MenuItem value={1}>1</MenuItem>
                                                            <MenuItem value={2}>2</MenuItem>
                                                            <MenuItem value={3}>3</MenuItem>
                                                            <MenuItem value={4}>4</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={6} sx={{ display: 'flex', gap: { sm: '10px' }, alignItems: 'center' }}>
                                                    <Typography>Sort By Price:</Typography>
                                                    <FormControl sx={{ width: '120px' }}>
                                                        <Select
                                                            value={sortBy.price}
                                                            displayEmpty
                                                            onChange={handleChangeSort}
                                                            inputProps={{ 'aria-label': 'Without label', name: 'price' }}
                                                            sx={{
                                                                width: '120px',
                                                                height: '40px',
                                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#cd2c22',
                                                                },
                                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#cd2c22',
                                                                },

                                                            }}
                                                        >
                                                            <MenuItem value={50}>50</MenuItem>
                                                            <MenuItem value={100}>100</MenuItem>
                                                            <MenuItem value={200}>200</MenuItem>
                                                            <MenuItem value={300}>300</MenuItem>
                                                            <MenuItem value={400}>400</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                {carList && carList.map((item, i) => <Grid key={i} item xs={12} md={12}>
                                    <CabCard item={item} />
                                </Grid>)}
                            </Grid>


                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>Filters</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#cd2c22', fontWeight: 'bold' }}>Clear All</Typography>
                                    </Box>
                                    <Divider sx={{ my: 2 }} />
                                    <Box sx={{ paddingX: '20px' }}>
                                        <Typography gutterBottom>Price Range</Typography>
                                        <Slider
                                            value={filterByPrice}
                                            onChange={e => setFilterByPrice(e.target.value)}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            min={0}
                                            max={2000}
                                            marks
                                            step={1}
                                            sx={{
                                                color: '#cd2c22',
                                                '& .MuiSlider-thumb': {
                                                    backgroundColor: '#cd2c22',
                                                    border: '2px solid #fff',
                                                },
                                                '& .MuiSlider-track': {
                                                    height: '2px',
                                                    border: 'none',
                                                },
                                                '& .MuiSlider-rail': {
                                                    height: '2px',
                                                    border: 'none',
                                                },
                                                '& .MuiSlider-mark': {
                                                    backgroundColor: '#cd2c22',
                                                    height: '2px',
                                                    width: '2px',
                                                },
                                                '& .MuiSlider-markActive': {
                                                    backgroundColor: '#e04a3d',
                                                    height: '2px',
                                                    width: '2px',
                                                },
                                            }}
                                        />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>{filterByPrice[0]} $</Typography>
                                            <Typography>{filterByPrice[1]} $</Typography>
                                        </Box>
                                    </Box>

                                    <Divider sx={{ my: 2 }} />

                                    <Grid container>
                                        {
                                            filterType && filterType.map((item, i) => <Grid item xs={12} sm={6} md={12} key={i}>
                                                <Typography sx={{ fontSize: '20px', marginY: '8px' }}>{item.type}</Typography>

                                                {item.options.map((options, j) => <Box key={j} sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                size='small'
                                                                checked={filterBy[item.type] && filterBy[item.type].includes(options) ? true : false}
                                                                onChange={() => handleChangeFilter(item.type, options)}
                                                                sx={{
                                                                    color: '#cd2c22',
                                                                    '&.Mui-checked': {
                                                                        color: '#cd2c22',
                                                                    },
                                                                }}
                                                            />
                                                        }
                                                        label={
                                                            <>
                                                                {item.type === 'Start Ratings' && Array(options)
                                                                    .fill()
                                                                    .map((_, index) => (
                                                                        <FontAwesomeIcon
                                                                            key={index}
                                                                            icon={faStar}
                                                                            style={{ color: '#ffd700', fontSize: '14px', marginRight: '4px' }}
                                                                        />
                                                                    ))}
                                                                {item.type === 'Customer Rating' && <Box>
                                                                    <FontAwesomeIcon
                                                                        icon={faStar}
                                                                        style={{ color: '#ffd700', fontSize: '14px', marginRight: '4px' }}
                                                                    />
                                                                    {options}
                                                                </Box>}
                                                                {(item.type !== 'Start Ratings' && item.type !== 'Customer Rating') && options}
                                                            </>
                                                        }
                                                    />
                                                </Box>)}

                                                <Box sx={{ display: { sm: 'hidden', md: 'block' } }}>
                                                    {i < filterType.length - 1 && (
                                                        <Divider sx={{ marginY: '12px', display: { sm: 'hidden', md: 'block' } }} />
                                                    )}
                                                </Box>
                                            </Grid>)
                                        }
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </Box>
    </>
}

export default Cabs

const CabCard = ({ item }) => {
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(item.ratings);
        const hasHalfStar = item.ratings % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} color={'#ffd700'} fontSize={'12px'} />);
        }

        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key={'half'} icon={faStarHalfAlt} color={'#ffd700'} fontSize={'12px'} />);
        }

        return stars;
    };
    return <>
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5} md={4}>
                        <Box sx={{
                            height: { xs: '280px', sm: '200px' },
                            width: '100%',
                            backgroundImage: `url(${item.image})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={7} md={8}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>{item.name}</Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                    {renderStars()}
                                </Box>
                            </Box>

                            <Box>
                                <Box fontSize={'12px'}>Exceptional</Box>
                                <Box fontSize={'12px'} color={'gray'}>({item.reviews}) reviews</Box>
                            </Box>
                        </Box>

                        <Box sx={{ fontSize: '14px', marginTop: '16px', color: 'gray' }}>{item.desc}</Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <FontAwesomeIcon icon={faLocationDot} color={'#cd2c22'} />
                            <Box marginLeft={'10px'}>{item.location}</Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', fontSize: '14px', color: 'gray', gap: '10px', marginTop: '10px' }}>
                                <Box>{item.km}</Box>
                                <Box>{item.fuelType}</Box>
                                <Box>{item.carType}</Box>
                            </Box>

                            <Box sx={{ display: { xs: 'flex', sm: 'block' }, justifyContent: 'flex-end', gap: '20px', alignItems: 'center' }}>
                                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>${item.price}</Typography>
                                <Button variant='contained' sx={{ backgroundColor: '#cd2c22', '&:hover': { backgroundColor: '#cd2c22' } }}>Book Now</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </>
}

CabCard.propTypes = {
    item: PropTypes.object.isRequired,
};
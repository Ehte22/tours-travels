import { Box, Button, Card, CardContent, Checkbox, Container, Divider, FormControl, FormControlLabel, Grid, MenuItem, Select, Slider, Typography } from '@mui/material'
import { useState } from 'react'
import { FlightForm } from '../components/Forms'
import PropTypes from 'prop-types'

const flightsList = [
    { airline: '/flights/air-singapore.png', from: 'New Delhi', to: 'Mumbai', start: '18:30', end: '20:30', duration: '02 Hour', price: '$734' },
    { airline: '/flights/air-indigo.png', from: 'Banglore', to: 'Hyderabad', start: '19:00', end: '21:30', duration: '02 Hour 30 Minutes', price: '$982' },
    { airline: '/flights/air-turkish.png', from: 'Aurangabad', to: 'Mumbai', start: '21:00', end: '22:30', duration: '01 Hour 30 Minutes', price: '$632' },
    { airline: '/flights/air-america.png', from: 'New Delhi', to: 'Mumbai', start: '18:30', end: '20:30', duration: '02 Hour', price: '$734' },
    { airline: '/flights/air-asia.png', from: 'Banglore', to: 'Hyderabad', start: '19:00', end: '21:30', duration: '02 Hour 30 Minutes', price: '$982' },
    { airline: '/flights/air-etihad.png', from: 'Aurangabad', to: 'Mumbai', start: '21:00', end: '22:30', duration: '01 Hour 30 Minutes', price: '$632' },
    { airline: '/flights/air-qatar.png', from: 'New Delhi', to: 'Mumbai', start: '18:30', end: '20:30', duration: '02 Hour', price: '$734' },
]

const filterType = [
    { type: 'Stop', options: ['Non Stop', '1 Stop', '2 Stop', '3 Stop'] },
    { type: 'Airlines', options: ['Indigo Ariline', 'Emirates Airline', 'American Airline', 'Etihand Airline', 'Qatar Airline', 'Turkish Ariline', 'Singapore Airline'] },
    { type: 'Flight Type', options: ['Business', 'First Class', 'Economy', 'Premium Economy'] },
    { type: 'Facilities', options: ['Snack With Drinks', 'High Class Dinner', 'Online Gaming', 'Seat Telivision'] },
]
const Flights = () => {
    const [sortBy, setSortBy] = useState({
        ranking: 0,
        price: 50
    })
    const [filterBy, setFilterBy] = useState({
        'Stop': [],
        'Airlines': [],
        'Flight Type': [],
        'Facilities': []
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



    return <Box overflow={'hidden'} >

        <Box
            sx={{
                width: '100%',
                height: {
                    xs: '100vh',
                    sm: '56vh',
                },
                backgroundImage: 'url(https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                backgroundPosition: 'top',
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
                        <FlightForm />
                    </Box>
                </Container>
            </Box>

        </Box >

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

                            {flightsList && flightsList.map((item, i) => <Grid key={i} item xs={12} md={12}>
                                <FlightCard item={item} />
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
                                                height: '2px', // Height for the active track
                                                border: 'none', // Remove the default track styling
                                            },
                                            '& .MuiSlider-rail': {
                                                height: '2px', // Height for the rail
                                                border: 'none', // Remove the default rail styling
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
                                                            checked={filterBy[item.type] && filterBy[item.type].includes(options)}
                                                            onChange={() => handleChangeFilter(item.type, options)}
                                                            sx={{
                                                                color: '#cd2c22',
                                                                '&.Mui-checked': {
                                                                    color: '#cd2c22',
                                                                },
                                                            }}
                                                        />
                                                    }
                                                    label={options}
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
    </Box >
}

export default Flights

const FlightCard = ({ item }) => {

    return <>
        <Card sx={{ height: { md: '100px' } }}>
            <CardContent>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', padding: '0px', margin: '0px' }}>
                                <img src={item.airline} style={{ width: '100px' }} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={2} sx={{ display: { xs: 'flex', md: 'block' }, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: '18px' }}>{item.start}</Typography>
                            <Typography>{item.from}</Typography>
                        </Grid>
                        <Grid item xs={4} sm={2} sx={{ display: { xs: 'flex', md: 'block' }, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: { xs: 'center', md: 'start' } }}>
                            <Typography>{item.duration}</Typography>
                        </Grid>
                        <Grid item xs={4} sm={2} sx={{ display: { xs: 'flex', md: 'block' }, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: '18px' }}>{item.end}</Typography>
                            <Typography>{item.to}</Typography>
                        </Grid>
                        <Grid item sm={3} width={'100%'}>
                            <Box sx={{ display: { xs: 'flex', sm: 'block' }, justifyContent: 'flex-end', gap: '20px', alignItems: 'center' }}>
                                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{item.price}</Typography>
                                <Button variant='contained' sx={{ backgroundColor: '#cd2c22', '&:hover': { backgroundColor: '#cd2c22' } }}>Book Now</Button>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </CardContent>
        </Card>
    </>
}

FlightCard.propTypes = {
    item: PropTypes.object.isRequired,
};
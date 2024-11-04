import Box from '@mui/material/Box';
import { Autocomplete, Button, Popover, Stack, TextField, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';

const initialState = [1, 0, 0]
const topLocation = ["mumbai", "pune", "delhi", "banglore"]
const persons = [
    { id: 1, type: "Adult" },
    { id: 2, type: "Children" },
    { id: 3, type: "Room" }
]

export const HotelForm = () => {
    const [searchHotel, setSearchHotel] = useState({});
    const [count, setCount] = useState(initialState)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleCountPlus = (index) => {
        const newCount = [...count]
        newCount[index] += 1
        setCount(newCount)
    }

    const handleCountMinus = (index) => {
        const newCount = [...count]
        if (newCount[index] > 0) {
            newCount[index] -= 1
            setCount(newCount)
        }
    }

    const handleChange = (event) => {
        const { value, name } = event
        setSearchHotel({ ...searchHotel, [name]: value })

    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return <>
        <Box>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6} lg={2.7}>
                    <Paper>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Autocomplete
                                id="free-solo-demo"
                                onChange={(e, value) => handleChange({ value, name: "location" })}
                                freeSolo
                                options={topLocation.map((item) => item)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Going To"
                                        InputLabelProps={{
                                            sx: {
                                                color: 'gray',
                                                '&.Mui-focused': {
                                                    color: '#cd2c22',
                                                },
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border by default
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #cd2c22', // Red border on focus
                                                },
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} lg={2.7}>
                    <Paper>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Check-in"
                                onChange={value => handleChange({ value, name: "checkIn" })}
                                slots={{
                                    textField: (params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            sx={{
                                                width: '100%',
                                                '& .MuiOutlinedInput-root': {
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent', // No border by default
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent', // No border on hover
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: '1px solid #cd2c22', // Red border on focus
                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        color: '#cd2c22', // Change calendar icon color
                                                    },
                                                    '& .MuiInputBase-root': {
                                                        color: '#cd2c22', // Change input text color
                                                    },
                                                },
                                            }}
                                        />
                                    ),
                                }}
                            />


                        </LocalizationProvider>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} lg={2.7}>
                    <Paper>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Check-out"
                                onChange={value => handleChange({ value, name: "checkOut" })}
                                slots={{
                                    textField: (params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            sx={{
                                                width: '100%',
                                                '& .MuiOutlinedInput-root': {
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent', // No border by default
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent', // No border on hover
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: '1px solid #cd2c22', // Red border on focus
                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        color: '#cd2c22', // Change calendar icon color
                                                    },
                                                    '& .MuiInputBase-root': {
                                                        color: '#cd2c22', // Change input text color
                                                    },
                                                },
                                            }}
                                        />
                                    ),
                                }}
                            />


                        </LocalizationProvider>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} lg={2.7} >
                    <Paper sx={{ height: '56px' }}>
                        <Box sx={{ width: '100%', height: '100%' }}>
                            <Box
                                onClick={event => setAnchorEl(event.currentTarget)}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    // cursor: 'pointer',
                                    color: 'gray',
                                    marginLeft: '16px',
                                }}
                            >
                                {count[0]} Adult
                                {count[1] > 0 ? `, ${count[1]} Children` : ''}
                                {count[2] > 0 ? `, ${count[2]} Room` : ''}
                            </Box>
                            <Popover
                                sx={{ marginTop: '10px' }}
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={() => setAnchorEl(null)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Box sx={{ paddingX: '30px', paddingY: '10px' }}>
                                    {
                                        persons && persons.map((item, i) => <Box key={i} sx={{ marginY: '15px' }}>
                                            <Button onClick={() => handleCountMinus(i)} variant='outlined' sx={{
                                                height: '30px', width: '20px', minWidth: '30px', borderColor: '#cd2c22',
                                                '&:hover': {
                                                    borderColor: '#cd2c22'
                                                }
                                            }}>
                                                <FontAwesomeIcon icon={faMinus} width={'20px'} color='#cd2c22' fontSize={'12px'} />
                                            </Button>
                                            <Typography component="span" sx={{ display: "inline-block", width: '120px', textAlign: 'center' }}>
                                                {count[i]} {item.type}
                                            </Typography>
                                            <Button onClick={() => handleCountPlus(i)} variant='outlined' sx={{
                                                height: '30px', width: '20px', minWidth: '30px', borderColor: '#cd2c22',
                                                '&:hover': {
                                                    borderColor: '#cd2c22'
                                                }
                                            }}>
                                                <FontAwesomeIcon icon={faPlus} width={'20px'} color='#cd2c22' fontSize={'12px'} />
                                            </Button>
                                        </Box>)
                                    }
                                </Box>
                            </Popover>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} lg={1.2} >
                    <Paper >
                        <Button variant='contained' sx={{
                            backgroundColor: '#cd2c22',
                            height: '56px',
                            width: {
                                xs: '100%',
                                md: '100%'
                            },
                            '&:hover': { backgroundColor: '#cd2c22' }
                        }}>
                            <FontAwesomeIcon icon={faSearch} fontSize={'16px'} /> <Typography marginLeft={'8px'} textTransform={'capitalize'}>Search</Typography>
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </>
}

export const FlightForm = () => {
    const [searchFlight, setsearchFlight] = useState({})

    const handleChange = (event) => {
        const { name, value } = event
        setsearchFlight({ ...searchFlight, [name]: value })
    }
    return <>
        <Box >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={2.2}>
                    <Paper sx={{ height: '56px' }}>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                onChange={(e, value) => handleChange({ value, name: "from" })}
                                options={topLocation.map((option) => option)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Leaving From"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'text',
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: 'gray',
                                                '&.Mui-focused': {
                                                    color: '#cd2c22',
                                                },
                                            },
                                        }}
                                        sx={{
                                            width: '100%',
                                            '& .MuiOutlinedInput-root': {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border by default
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #cd2c22', // Red border on focus
                                                },
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={2.2}>
                    <Paper sx={{ height: '56px' }}>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                onChange={(e, value) => handleChange({ value, name: "to" })}
                                disableClearable
                                options={topLocation.map((option) => option)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Going To"

                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'text',
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: 'gray',
                                                '&.Mui-focused': {
                                                    color: '#cd2c22',
                                                },
                                            },
                                        }}
                                        sx={{
                                            width: '100%',
                                            '& .MuiOutlinedInput-root': {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border by default
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #cd2c22', // Red border on focus
                                                },
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={2.1}>
                    <Paper sx={{ height: '56px' }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Departure.."
                                // value={selectedDate}
                                onChange={value => handleChange({ value, name: "departureDate" })}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent', // No border by default
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent', // No border on hover
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid #cd2c22', // Red border on focus
                                        },
                                        '& .MuiSvgIcon-root': {
                                            color: '#cd2c22', // Change calendar icon color
                                        },
                                        '& .MuiInputBase-root': {
                                            color: '#cd2c22', // Change input text color
                                        },

                                    },
                                }}
                            />

                        </LocalizationProvider>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={2.1}>
                    <Paper sx={{ height: '56px' }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Return.."
                                onChange={value => handleChange({ value, name: "returnDate" })}
                                    
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent', // No border by default
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent', // No border on hover
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid #cd2c22', // Red border on focus
                                        },
                                        '& .MuiSvgIcon-root': {
                                            color: '#cd2c22', // Change calendar icon color
                                        },
                                        '& .MuiInputBase-root': {
                                            color: '#cd2c22', // Change input text color
                                        },

                                    },
                                }}
                            />

                        </LocalizationProvider>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={2.1}>
                    <Paper sx={{ height: '56px' }}>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                onChange={(e, value) => handleChange({ value, name: "occupant" })}
                                disableClearable
                                options={topLocation.map((option) => option)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Occupant"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'text',
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: 'gray',
                                                '&.Mui-focused': {
                                                    color: '#cd2c22',
                                                },
                                            },
                                        }}
                                        sx={{
                                            width: '100%',
                                            '& .MuiOutlinedInput-root': {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border by default
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #cd2c22', // Red border on focus
                                                },
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={1.3} >
                    <Paper >
                        <Button variant='contained' sx={{
                            backgroundColor: '#cd2c22',
                            height: '56px',
                            width: {
                                xs: '100%',
                                md: '100%'
                            },
                            '&:hover': { backgroundColor: '#cd2c22' }
                        }}>
                            <FontAwesomeIcon icon={faSearch} fontSize={'16px'} /> <Typography marginLeft={'8px'} textTransform={'capitalize'}>Search</Typography>
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </>
}

export const TourForm = () => {
    const [searchTour, setSearchTour] = useState({})

    const handleChange = (event) => {
        const { name, value } = event
        setSearchTour({ ...searchTour, [name]: value })
    }

    return <>
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ height: '56px' }}>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                onChange={(e, value) => handleChange({ value, name: "location" })}
                                options={topLocation.map((option) => option)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Going To"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'text',
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: 'gray',
                                                '&.Mui-focused': {
                                                    color: '#cd2c22',
                                                },
                                            },
                                        }}
                                        sx={{
                                            width: '100%',
                                            '& .MuiOutlinedInput-root': {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border by default
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #cd2c22', // Red border on focus
                                                },
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ height: '56px' }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Choose Date"
                                // value={selectedDate}
                                onChange={value => handleChange({ value, name: "date" })}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent', // No border by default
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent', // No border on hover
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid #cd2c22', // Red border on focus
                                        },
                                        '& .MuiSvgIcon-root': {
                                            color: '#cd2c22', // Change calendar icon color
                                        },
                                        '& .MuiInputBase-root': {
                                            color: '#cd2c22', // Change input text color
                                        },

                                    },
                                }}
                            />

                        </LocalizationProvider>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={8} md={2.7}>
                    <Paper sx={{ height: '56px' }}>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                onChange={(e, value) => handleChange({ value, name: "tourType" })}
                                options={topLocation.map((option) => option)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Select Tour Type"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'text',
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: 'gray',
                                                '&.Mui-focused': {
                                                    color: '#cd2c22',
                                                },
                                            },
                                        }}
                                        sx={{
                                            width: '100%',
                                            '& .MuiOutlinedInput-root': {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border by default
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent', // No border on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #cd2c22', // Red border on focus
                                                },
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={4} md={1.3} >
                    <Paper >
                        <Button variant='contained' sx={{
                            backgroundColor: '#cd2c22',
                            height: '56px',
                            width: {
                                xs: '100%',
                                md: '100%'
                            },
                            '&:hover': { backgroundColor: '#cd2c22' }
                        }}>
                            <FontAwesomeIcon icon={faSearch} fontSize={'16px'} /> <Typography marginLeft={'8px'} textTransform={'capitalize'}>Search</Typography>
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </>
}

export const CabForm = () => {
    const [searchCab, setSearchCab] = useState({})

    const handleChange = event => {
        const { name, value } = event
        setSearchCab({ ...searchCab, [name]: value })
    }
    return <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
                <Paper sx={{ height: '56px' }}>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            onChange={(e, value) => handleChange({ value, name: "pickupLocation" })}
                            options={topLocation.map((option) => option)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select Pickup Location"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'text',
                                    }}
                                    InputLabelProps={{
                                        sx: {
                                            color: 'gray',
                                            '&.Mui-focused': {
                                                color: '#cd2c22',
                                            },
                                        },
                                    }}
                                    sx={{
                                        width: '100%',
                                        '& .MuiOutlinedInput-root': {
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'transparent', // No border by default
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'transparent', // No border on hover
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: '1px solid #cd2c22', // Red border on focus
                                            },
                                        },
                                    }}
                                />
                            )}
                        />
                    </Stack>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                <Paper sx={{ height: '56px' }}>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            onChange={(e, value) => handleChange({ value, name: "dropLocation" })}
                            options={topLocation.map((option) => option)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select Drop Location"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'text',
                                    }}
                                    InputLabelProps={{
                                        sx: {
                                            color: 'gray',
                                            '&.Mui-focused': {
                                                color: '#cd2c22',
                                            },
                                        },
                                    }}
                                    sx={{
                                        color: 'red',
                                        width: '100%',
                                        '& .MuiOutlinedInput-root': {
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'transparent', // No border by default
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'transparent', // No border on hover
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: '1px solid #cd2c22', // Red border on focus
                                            },
                                        },
                                    }}
                                />
                            )}
                        />
                    </Stack>
                </Paper>
            </Grid>

            <Grid item xs={12} lg={2.7}>
                <Paper sx={{ height: '56px' }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Choose Pickup Date"
                            onChange={value => handleChange({ value, name: "pickupDate" })}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent', // No border by default
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent', // No border on hover
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #cd2c22', // Red border on focus
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: '#cd2c22', // Change calendar icon color
                                    },
                                    '& .MuiInputBase-root': {
                                        color: '#cd2c22', // Change input text color
                                    },

                                },
                            }}
                        />

                    </LocalizationProvider>
                </Paper>
            </Grid>

            <Grid item xs={12} lg={1.3} >
                <Paper >
                    <Button variant='contained' sx={{
                        backgroundColor: '#cd2c22',
                        height: '56px',
                        width: {
                            xs: '100%',
                            md: '100%'
                        },
                        '&:hover': { backgroundColor: '#cd2c22' }
                    }}>
                        <FontAwesomeIcon icon={faSearch} fontSize={'16px'} /> <Typography marginLeft={'8px'} textTransform={'capitalize'}>Search</Typography>
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    </>
}
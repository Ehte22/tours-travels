import { Box, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

const ContactDetails = () => {
    return <>
        <Box>
            <Box>
                <Typography sx={{
                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                    fontWeight: 900,
                    fontSize: '20px',
                    marginBottom: '32px'
                }}>Traveller Details</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={2}>
                        <Typography>Traveller 1</Typography>
                    </Grid>

                    <Grid item xs={12} md={10}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <FormControl
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            height: '44px', // Set the height of the Select box
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'gainsboro',
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'gainsboro',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: '1px solid gainsboro',
                                            },
                                            '& .MuiSelect-select': {
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '0 14px',
                                            },
                                        },
                                    }}
                                >
                                    <Select defaultValue="mr">
                                        <MenuItem value="mr">Mr</MenuItem>
                                        <MenuItem value="mrs">Mrs</MenuItem>
                                        <MenuItem value="ms">Ms</MenuItem>
                                        <MenuItem value="miss">Miss</MenuItem>
                                        <MenuItem value="master">Master</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={5}>
                                <TextField
                                    placeholder='First Name*'
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            height: '44px',
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
                                        },
                                    }}
                                />
                            </Grid>

                            <Grid item xs={5}>
                                <TextField
                                    placeholder='Last Name*'
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            height: '44px',
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
                                        },
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    placeholder='Passport Number*'
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            height: '44px',
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
                                        },
                                    }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            height: '44px', // Set the height of the Select box
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'gainsboro',
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'gainsboro',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: '1px solid gainsboro',
                                            },
                                            '& .MuiSelect-select': {
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '0 14px',
                                            },
                                        },
                                    }}
                                >
                                    <Select defaultValue="Age" >
                                        <MenuItem selected disabled value="Age">Age</MenuItem>
                                        <MenuItem value="ms">12-15</MenuItem>
                                        <MenuItem value="miss">15-18</MenuItem>
                                        <MenuItem value="master">18+</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    placeholder='Phone*'
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            height: '44px',
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
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ marginTop: '48px', marginBottom: '32px' }}>
                <Typography sx={{
                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                    fontWeight: 900,
                    fontSize: '20px',
                    marginBottom: '32px'
                }}>Contact Details
                </Typography>

                <Box>
                    <Grid container spacing={0} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="fname">First Name*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id='fname'
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '44px',
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
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} sx={{ alignItems: 'center', marginTop: '20px' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="lname">Last Name*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id='lname'
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '44px',
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
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} sx={{ alignItems: 'center', marginTop: '20px' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="email">Email*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id='email'
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '44px',
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
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} sx={{ alignItems: 'center', marginTop: '20px' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="phone">Phone*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id='phone'
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '44px',
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
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} sx={{ alignItems: 'center', marginTop: '20px' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="country">Country*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <FormControl
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '44px', // Set the height of the Select box
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gainsboro',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gainsboro',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid gainsboro',
                                        },
                                        '& .MuiSelect-select': {
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '0 14px',
                                        },
                                    },
                                }}
                            >
                                <Select id='country' defaultValue="india">
                                    <MenuItem value="india">India</MenuItem>
                                    <MenuItem value="america">America</MenuItem>
                                    <MenuItem value="austra;oa">Australia</MenuItem>
                                    <MenuItem value="turkey">Turkey</MenuItem>
                                    <MenuItem value="newzeland">Newzeland</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} sx={{ marginTop: '20px' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="address">Address*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id="address"
                                multiline
                                rows={6}
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gainsboro',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gainsboro',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid gainsboro',
                                        },

                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ marginTop: '60px', marginBottom: '40px' }}>
                <Typography sx={{
                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                    fontWeight: 900,
                    fontSize: '20px',
                }}>
                    Billing Details
                </Typography>

                <Box sx={{ marginY: '20px' }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                size='small'
                                sx={{
                                    color: '#cd2c22',
                                    '&.Mui-checked': {
                                        color: '#cd2c22',
                                    },
                                }}
                            />
                        }
                        label="The same as contact details"
                    />
                </Box>

                <Box>
                    <Grid container spacing={0} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="fname">First Name*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id='fname'
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '44px',
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
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} sx={{ alignItems: 'center', marginTop: '20px' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="lname">Last Name*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id='lname'
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '44px',
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
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} sx={{ alignItems: 'center', marginTop: '20px' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="email">Email*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id='email'
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '44px',
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
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} sx={{ alignItems: 'center', marginTop: '20px' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="phone">Phone*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id='phone'
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '44px',
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
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} sx={{ alignItems: 'center', marginTop: '20px' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="country">Country*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <FormControl
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '44px', // Set the height of the Select box
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gainsboro',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gainsboro',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid gainsboro',
                                        },
                                        '& .MuiSelect-select': {
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '0 14px',
                                        },
                                    },
                                }}
                            >
                                <Select id='country' defaultValue="india">
                                    <MenuItem value="india">India</MenuItem>
                                    <MenuItem value="america">America</MenuItem>
                                    <MenuItem value="austra;oa">Australia</MenuItem>
                                    <MenuItem value="turkey">Turkey</MenuItem>
                                    <MenuItem value="newzeland">Newzeland</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} sx={{ marginTop: '20px' }}>
                        <Grid item xs={12} md={2}>
                            <InputLabel htmlFor="address">Address*</InputLabel>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id="address"
                                multiline
                                rows={6}
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gainsboro',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gainsboro',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid gainsboro',
                                        },

                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Box>
    </>
}

export default ContactDetails
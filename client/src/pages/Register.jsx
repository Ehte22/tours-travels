import { Box, Button, Container, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { useSignUpMutation } from '../redux/apis/auth.apis'
import { toast } from 'react-toastify'
import SelectCountryCompo from '../components/SelectCountryCompo'
import { LoadingContext } from '../App'

const date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const years = Array.from({ length: new Date().getFullYear() - 1900 }, (_, i) => 1901 + i).reverse()


const Register = () => {
    const [signUp, { data, isSuccess, isError, error, isLoading }] = useSignUpMutation()
    const [formErrors, setFormErrors] = useState()
    const { setIsLoading } = useContext(LoadingContext)

    const navigate = useNavigate()

    const initialValues = {
        firstName: 'john',
        lastName: 'doe',
        email: 'john@gmail.ocm',
        phone: '98989898',
        password: '123456',
        confirmPassword: '123456',
        date: '',
        month: '',
        year: '',
        country: ''
    }

    const onSubmit = (values) => {
        let formattedDate = ''

        if (values.date && values.month && values.year) {
            formattedDate = `${values.date} ${values.month}, ${values.year}`;
        }

        const userData = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            password: values.password,
            confirmPassword: values.confirmPassword,
            birthDate: formattedDate,
            country: values.country,
        }

        if (formErrors.length === 0) {
            console.log('Form submitted', values);
            signUp(userData)
        }

    }

    const validate = (values) => {
        const errors = [];

        if (!values.firstName || !values.lastName || !values.email || !values.phone || !values.password || !values.confirmPassword || !values.date || !values.month || !values.year || !values.country) {
            errors.push("Please fill all required fields");
        } else if (!/^[a-zA-Z]+$/i.test(values.firstName) || !/^[a-zA-Z]+$/i.test(values.lastName)) {
            errors.push("Only alphabetic characters are allowed for name");
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.push("Please enter a valid email address");
        } else if (!/^[3-9]\d{4,10}$/i.test(values.phone)) {
            errors.push("Please enter a valid phone number");
        } else if (values.password.length < 6) {
            errors.push("Password should be of minimum 6 characters length");
        } else if (values.password !== values.confirmPassword) {
            errors.push("Passwords do not match");
        }

        setFormErrors(errors);
    };

    useEffect(() => {
        setIsLoading(isLoading)
    }, [isLoading, setIsLoading])

    useEffect(() => {
        if (isSuccess) {
            toast.success(data.message)
            navigate('/signin')
        }

        if (isError) {
            toast.error(error.data.message)
        }
    }, [isError, isSuccess, navigate])

    return <>

        <Box>
            <Box
                sx={{
                    marginTop: { xs: 0, md: '60px' },
                    width: '100%',
                    height: {
                        xs: '26vh',
                        sm: '36vh',
                    },
                    backgroundImage: 'url(/tours/bg-tour.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px'
                }}>
                    <Typography sx={{
                        color: 'white',
                        fontFamily: 'ArcaMajora, Arial, sans-serif',
                        fontSize: {
                            xs: '36px',
                            sm: '42px',
                            md: '48px'
                        },
                        letterSpacing: '6px'
                    }}>SIGN UP</Typography>
                </Box>

            </Box>

            <Box sx={{ paddingY: '60px', paddingX: { xs: '12px', sm: '50px' } }}>
                <Container disableGutters>
                    <Typography sx={{
                        color: 'gray'
                    }}>
                        After creating an account, you&#39;ll be able to track your payment status, track the confirmation and you can also rate the tour after you finished the tour.
                    </Typography>

                    <Box sx={{ marginTop: '20px' }}>
                        {formErrors && formErrors.map((item, i) => <Box key={i} sx={{ paddingY: 1, paddingX: 2, backgroundColor: '#cd2c22', color: 'white' }}>
                            <Typography fontSize={'14px'}>
                                {formErrors}
                            </Typography>
                        </Box>)
                        }
                    </Box>
                    <Box>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validate={validate}
                        >
                            {({ handleSubmit }) => {
                                return <Form onSubmit={handleSubmit}>
                                    <Grid container rowSpacing={1} columnSpacing={4}>
                                        <Grid item xs={12} md={6} sx={{ marginTop: '20px' }}>
                                            <Typography sx={{
                                                marginY: '16px'
                                            }}>First Name*</Typography>
                                            <Field
                                                name="firstName"
                                                as={TextField}
                                                fullWidth
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: '48px',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro',
                                                        borderRadius: 0
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                }}
                                            />

                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ marginTop: { xs: 0, md: '20px' } }}>
                                            <Typography sx={{
                                                marginY: '16px'
                                            }}>Last Name*</Typography>
                                            <Field
                                                name="lastName"
                                                as={TextField}
                                                fullWidth
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: '48px',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro',
                                                        borderRadius: 0
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                }}
                                            />

                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography sx={{
                                                marginY: '16px',
                                            }}>Email*</Typography>
                                            <Field
                                                name="email"
                                                as={TextField}
                                                fullWidth
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: '48px',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro',
                                                        borderRadius: 0
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                }}
                                            />

                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography sx={{
                                                marginY: '16px',
                                            }}>Phone*</Typography>
                                            <Field
                                                name="phone"
                                                as={TextField}
                                                fullWidth
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: '48px',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro',
                                                        borderRadius: 0
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                }}
                                            />

                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography sx={{
                                                marginY: '16px',
                                            }}>Password*</Typography>
                                            <Field
                                                name="password"
                                                as={TextField}
                                                fullWidth
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: '48px',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro',
                                                        borderRadius: 0
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                }}
                                            />

                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography sx={{
                                                marginY: '16px',
                                            }}>Confirm Password*</Typography>
                                            <Field
                                                name="confirmPassword"
                                                as={TextField}
                                                fullWidth
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: '48px',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro',
                                                        borderRadius: 0
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid gainsboro !important',
                                                    },
                                                }}
                                            />

                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography sx={{ marginY: '16px', }}>
                                                Birth Date*
                                            </Typography>
                                            <Grid container spacing={2}>
                                                <Grid item xs={2.7} sm={2.2} md={3} lg={2.2}>
                                                    <FormControl fullWidth sx={{
                                                        '& .MuiInputBase-root': {
                                                            height: '48px',
                                                        },
                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro',
                                                            borderRadius: 0
                                                        },
                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro !important',
                                                        },
                                                        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro !important',
                                                        },
                                                    }}>
                                                        <Field
                                                            as={Select}
                                                            name="date"
                                                            displayEmpty
                                                        >
                                                            <MenuItem value="" disabled>Date</MenuItem>
                                                            {date.map((item, i) => <MenuItem key={i} value={item}>{item}</MenuItem>)}

                                                        </Field>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={3} sm={2.5} md={3.5} lg={2.5}>
                                                    <FormControl fullWidth sx={{
                                                        '& .MuiInputBase-root': {
                                                            height: '48px',
                                                        },
                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro',
                                                            borderRadius: 0
                                                        },
                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro !important',
                                                        },
                                                        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro !important',
                                                        },
                                                    }}>
                                                        <Field
                                                            as={Select}
                                                            name="month"
                                                            displayEmpty
                                                        >
                                                            <MenuItem value="" disabled>Month</MenuItem>
                                                            {month.map((item, i) => <MenuItem key={i} value={item}>{item}</MenuItem>)}

                                                        </Field>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={2.7} sm={2.2} md={3} lg={2.2}>
                                                    <FormControl fullWidth sx={{
                                                        '& .MuiInputBase-root': {
                                                            height: '48px',
                                                        },
                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro',
                                                            borderRadius: 0
                                                        },
                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro !important',
                                                        },
                                                        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro !important',
                                                        },
                                                    }}>
                                                        <Field
                                                            as={Select}
                                                            name="year"
                                                            displayEmpty
                                                        >
                                                            <MenuItem value="" disabled>Year</MenuItem>
                                                            {years.map((item, i) => <MenuItem key={i} value={item}>{item}</MenuItem>)}

                                                        </Field>
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography sx={{ marginY: '16px', }}>
                                                Country*
                                            </Typography>
                                            <SelectCountryCompo name="country" />
                                        </Grid>


                                        <Grid item xs={12} sx={{ marginTop: '32px' }}>
                                            <Button variant='contained' type='submit'
                                                sx={{
                                                    backgroundColor: '#cd2c22', width: '100%',
                                                    paddingY: '12px', '&:hover': { backgroundColor: '#cd2c22' }
                                                }}>
                                                Sign up
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            }}
                        </Formik>

                        <Typography sx={{ marginTop: '20px', textAlign: 'center' }}>
                            If you already have an account?
                            <Link to='/signin' style={{ textDecoration: 'none', color: '#cd2c22' }}>  Sign In</Link>
                        </Typography>
                    </Box>

                </Container>
            </Box >
        </Box >
    </>
}

export default Register
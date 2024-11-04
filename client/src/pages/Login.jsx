import { Box, Button, Container, Divider, FormControl, FormHelperText, Grid, TextField, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContinueWithGoogleMutation, useSignInMutation } from '../redux/apis/auth.apis'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { LoadingContext } from '../App'

const Login = () => {
    const [singIn, { isSuccess: signInSuccess, isLoading }] = useSignInMutation()
    const [signInWithGoogle, { isSuccess: signInWithGoogleSuccess }] = useContinueWithGoogleMutation()

    const navigate = useNavigate()
    const { setIsLoading } = useContext(LoadingContext);

    const initialValues = {
        username: '',
        password: ''
    }

    const validationSchema = Yup.object({
        username: Yup.string().required('*Field Username is required'),
        password: Yup.string().required('*Field Password is required')
    })

    const onSubmit = (values) => {
        singIn(values)
    }

    useEffect(() => {
        setIsLoading(isLoading)
    }, [isLoading, setIsLoading]);

    useEffect(() => {
        if (signInSuccess || signInWithGoogleSuccess) {
            navigate('/dashboard')
        }
    }, [signInSuccess, signInWithGoogleSuccess, navigate])

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
                    }}>SIGN IN</Typography>
                </Box>

            </Box>


            <Box sx={{ paddingY: '80px', paddingX: { xs: '12px', sm: '50px' } }}>
                <Container disableGutters>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <Grid container rowSpacing={1} columnSpacing={4}>
                                <Grid item xs={12} md={6}>
                                    <Typography sx={{
                                        marginY: '16px'
                                    }}>E-Mail or Phone Number*</Typography>
                                    <Field name="username">
                                        {({ field, form }) => (
                                            <FormControl fullWidth error={Boolean(form.errors.username && form.touched.username)}>
                                                <TextField
                                                    {...field}
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiInputBase-root': {
                                                            height: '48px',
                                                        },
                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro',
                                                            borderRadius: 0,
                                                        },
                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro !important',
                                                        },
                                                        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro !important',
                                                        },
                                                    }}
                                                />
                                                <FormHelperText>
                                                    <ErrorMessage name="username" />
                                                </FormHelperText>
                                            </FormControl>
                                        )}
                                    </Field>


                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Typography sx={{
                                        marginY: '16px'
                                    }}>Password*</Typography>
                                    <Field name="password">
                                        {({ field, form }) => (
                                            <FormControl fullWidth error={Boolean(form.errors.password && form.touched.password)}>
                                                <TextField
                                                    {...field}
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiInputBase-root': {
                                                            height: '48px',
                                                        },
                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro',
                                                            borderRadius: 0,
                                                        },
                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro !important',
                                                        },
                                                        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            border: '2px solid gainsboro !important',
                                                        },
                                                    }}
                                                />
                                                <FormHelperText>
                                                    <ErrorMessage name="password" />
                                                </FormHelperText>
                                            </FormControl>
                                        )}
                                    </Field>

                                </Grid>

                                <Grid item xs={12} sx={{ marginTop: '24px' }}>
                                    <Button variant='contained' type='submit'
                                        sx={{
                                            backgroundColor: '#cd2c22', width: '100%',
                                            paddingY: '12px', '&:hover': { backgroundColor: '#cd2c22' }
                                        }}>
                                        Sign In
                                    </Button>

                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>

                    <Box sx={{ textAlign: 'end', marginTop: '12px' }}>
                        <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#cd2c22', fontSize: '14px' }}>
                            Forgot Password?
                        </Link>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
                        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                            <GoogleLogin
                                onSuccess={response => signInWithGoogle(response)}
                                onError={error => console.log(error)}
                            >
                            </GoogleLogin>
                        </GoogleOAuthProvider>
                    </Box>

                    <Divider sx={{ marginY: '32px' }} />

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{
                            fontFamily: 'ArcaMajora, Arial, sans-serif',
                            fontWeight: 900,
                            marginBottom: '8px'
                        }}>DO NOT HAVE AN ACCOUNT?</Typography>
                        <Link to="/signup" style={{
                            fontFamily: 'ArcaMajora, Arial, sans-serif',
                            fontSize: '12px',
                            color: '#cd2c22',
                            textDecoration: 'none'
                        }}>CREATE AN ACCOUNT</Link>
                    </Box>
                </Container>
            </Box>
        </Box>
    </>
}

export default Login
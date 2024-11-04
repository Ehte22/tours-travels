import { Box, Button, Container, FormControl, FormHelperText, Grid, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { useReseetPasswordMutation, useVerifyEmailMutation, useVerifyOTPMutation } from '../redux/apis/auth.apis'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ForgotPassword = () => {
    const [verifyEmail, { isSuccess: verifyEmailSuccess }] = useVerifyEmailMutation()
    const [verifyOtp, { isSuccess: verifyOtpSuccess }] = useVerifyOTPMutation()
    const [resetPassword, { isSuccess: resetPasswordSuccess }] = useReseetPasswordMutation()

    const [forgotPasswordForm, setForgotPasswordForm] = useState(<VerifyEmail verifyEmail={verifyEmail} />)

    const navigate = useNavigate()

    useEffect(() => {
        if (verifyEmailSuccess) {
            setForgotPasswordForm(<OtpForm verifyOtp={verifyOtp} />)
        }
        if (verifyOtpSuccess) {
            setForgotPasswordForm(<ResetPassword resetPassword={resetPassword} />)
        }
        if (resetPasswordSuccess) {
            navigate('/signin')
        }
    }, [verifyEmailSuccess, verifyOtpSuccess, resetPasswordSuccess, navigate, resetPassword, verifyOtp])



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
                    }}>MY ACCOUNT</Typography>
                </Box>



            </Box>

            <Box sx={{ paddingY: '60px', paddingX: { xs: '12px', sm: '50px' } }}>
                <Container disableGutters>
                    {forgotPasswordForm}
                </Container>
            </Box>
        </Box>
    </>
}

export default ForgotPassword

const VerifyEmail = ({ verifyEmail }) => {

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Please enter your username')
    });

    return <Box>
        <Typography sx={{
            color: 'gray',
            textAlign: 'center'
        }}>
            Lost your password? Please enter your email address. You will receive a OTP to create a new password via email.
        </Typography>

        <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
                verifyEmail(values)
            }}
        >
            {({ handleSubmit }) => {
                return <Form onSubmit={handleSubmit}>
                    <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                        <Grid item xs={12} md={6.1} sx={{ marginTop: '20px' }}>
                            <Typography sx={{
                                marginY: '16px'
                            }}>E-mail Address*</Typography>
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

                        <Grid item xs={12} md={6.1} >
                            <Button variant='contained' type='submit'
                                sx={{
                                    backgroundColor: '#cd2c22', width: '100%',
                                    paddingY: '12px', '&:hover': { backgroundColor: '#cd2c22' },
                                    letterSpacing: '2px',
                                    fontWeight: 'bold'
                                }}>
                                Reset Password
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            }}
        </Formik>
    </Box>
}

const OtpForm = ({ verifyOtp }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [remainingTime, setRemainingTime] = useState(600); // Time in seconds
    const inputRefs = useRef([]);

    useEffect(() => {
        if (remainingTime > 0) {
            const interval = setInterval(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [remainingTime]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input field
            if (value && index < 3) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        // Allow backspace to move to the previous input
        if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1].focus();
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}m ${secs}s`;
    };

    const handleSubmit = () => {
        const otpValue = otp.join('')
        if (otpValue.length === 4) {
            console.log(otpValue);
            verifyOtp(otpValue)
        }
    }

    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{
                fontFamily: 'ArcaMajora, Arial, sans-serif',
                fontSize: { xs: '20px', sm: '24px' }
            }} gutterBottom>
                Enter the OTP sent to your email
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '20px' }}>
                {otp.map((digit, index) => (
                    <Grid item key={index}>
                        <TextField
                            inputRef={el => inputRefs.current[index] = el}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            inputProps={{
                                maxLength: 1,
                                style: { textAlign: 'center', fontSize: '24px' }, // Centering text
                            }}
                            variant="outlined"
                            sx={{
                                width: '60px', height: '60px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid gray',
                                    borderRadius: 0,
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid black !important',
                                },
                                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: '2px solid #cd2c22 !important',
                                },
                            }}
                            type="text"
                            size="small"
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="body2" color="textSecondary" gutterBottom>
                Time remaining: {formatTime(remainingTime)}
            </Typography>


            <Box>
                <Button variant='contained'
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: '#cd2c22', width: '320px',
                        paddingY: '12px', '&:hover': { backgroundColor: '#cd2c22' },
                        letterSpacing: '2px', marginTop: '16px'
                    }}>
                    SUBMIT OTP
                </Button>
            </Box>
        </Box>
    );
};

const ResetPassword = ({ resetPassword }) => {

    const initialValues = {
        password: '',
        confirmPassword: ''
    }

    const validationSchema = Yup.object({
        password: Yup.string()
            .required('*Field password is required')
            .min(6, '*Password must be at least 8 characters long'),
        confirmPassword: Yup.string()
            .required('*Field confirm password is required')
            .oneOf([Yup.ref('password'), null], '*Passwords must match')
    })

    const onSubmit = (values) => {
        console.log(values)
        resetPassword(values)
    }
    return <>
        <Box>
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
                            <Grid item xs={12} md={6} >
                                <Typography sx={{
                                    marginY: '16px'
                                }}>Confirm Password*</Typography>
                                <Field name="confirmPassword">
                                    {({ field, form }) => (
                                        <FormControl fullWidth error={Boolean(form.errors.confirmPassword && form.touched.confirmPassword)}>
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
                                                <ErrorMessage name="confirmPassword" />
                                            </FormHelperText>
                                        </FormControl>
                                    )}
                                </Field>

                            </Grid>

                            <Grid item xs={12} sx={{ marginTop: '24px' }}>
                                <Button variant='contained' type='submit'
                                    sx={{
                                        backgroundColor: '#cd2c22', width: '100%',
                                        paddingY: '12px', '&:hover': { backgroundColor: '#cd2c22' },
                                        letterSpacing: '2px'
                                    }}>
                                    SUBMIT
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </Container>
        </Box>
    </>
}

VerifyEmail.propTypes = {
    verifyEmail: PropTypes,
};

OtpForm.propTypes = {
    verifyOtp: PropTypes,
};

ResetPassword.propTypes = {
    resetPassword: PropTypes,
};
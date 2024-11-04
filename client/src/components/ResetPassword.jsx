import { Box, Button, Container, FormControl, FormHelperText, Grid, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as Yup from 'yup'

const ResetPassword = () => {

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
        console.log(values);

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

export default ResetPassword
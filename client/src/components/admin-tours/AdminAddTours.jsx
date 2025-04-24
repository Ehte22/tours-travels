import { Alert, Box, Button, FormLabel, Grid, IconButton, ImageList, ImageListItem, InputAdornment, List, ListItem, ListItemText, Modal, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faEdit, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Field, FieldArray, Form, Formik } from 'formik'
import { format } from 'date-fns'
import { grey } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import { useAddTourMutation, useUpdateTourMutation } from '../../redux/apis/tour.apis'
import PropTypes from 'prop-types'
import { toast } from '../../services/toast'

const inputLabelProps = {
    sx: {
        color: 'gray',
        '&.Mui-focused': {
            color: '#00c979',
        },
    },
};

const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #00c979',
        },
        '& .MuiSvgIcon-root': {
            color: '#00c979',
        },
        '& .MuiInputBase-root': {
            color: '#00c979',
        },
        '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #f6fffb inset',
            WebkitTextFillColor: '#000',
        },
    },
};

const AdminAddTours = ({ selectedTour }) => {
    const [formErrors, setFormErrors] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [open, setOpen] = useState(false);
    const [removeImages, setRemoveImages] = useState([])

    const [addTour] = useAddTourMutation()
    const [updateTour, { data, error, isSuccess, isError }] = useUpdateTourMutation()

    const initialValues = {
        name: selectedTour?.name || '',
        location: selectedTour?.location || '',
        duration: selectedTour?.duration || '',
        availability_from: selectedTour?.availability_from || '',
        availability_to: selectedTour?.availability_to || '',
        max_people: selectedTour?.max_people || '',
        min_age: selectedTour?.min_age || '',
        price: selectedTour?.price || '',
        includes: selectedTour?.includes || '',
        excludes: selectedTour?.excludes || '',
        itinerary: selectedTour?.itinerary || [{
            day: '',
            title: '',
            desc: '',
        }],
        faqs: selectedTour?.faqs || [{
            title: '',
            desc: '',
        }],
        images: selectedTour?.images || [],
        desc: selectedTour?.desc || '',


        newInclude: '',
        newExclude: '',
        editIndex: null,
    }

    const validate = (values) => {

        let errors = [];

        const requiredFields = [
            'name', 'location', 'duration', 'availability_from', 'availability_to',
            'max_people', 'min_age', 'price', 'includes', 'excludes', 'desc'
        ];

        const isEmpty = requiredFields.some(key => !values[key])
        if (isEmpty) {
            errors.push('All Fields are required');
            setFormErrors(errors);
            return
        }

        if (values.images.length === 0) {
            errors.push('Tour images is required')
            setFormErrors(errors)
            return
        }

        if (values.includes.length === 0) {
            errors.push('Includes is required')
            setFormErrors(errors)
            return
        }

        if (values.excludes.length === 0) {
            errors.push('Excludes is required')
            setFormErrors(errors)
            return
        }

        const isEmptyItinerary = values.itinerary.some(item => !item.day || !item.title || !item.desc)
        if (isEmptyItinerary) {
            errors.push('Itinerary all fields are required')
            setFormErrors(errors);
            return
        }

        const isEmptyFaqs = values.faqs.some(item => !item.title || !item.desc)
        if (isEmptyFaqs) {
            errors.push('Faqs all fields are required')
            setFormErrors(errors);
            return
        }

        return setFormErrors([])

    }

    const handleAddToArray = (fieldValue, push, setFieldValue, fieldName, editIndex, replace) => {
        const trimmedValue = fieldValue.trim();
        if (trimmedValue) {
            if (editIndex !== null) {
                replace(editIndex, trimmedValue);
                setFieldValue('editIndex', null);
            } else {
                push(trimmedValue);
            }
            setFieldValue(fieldName, '');
        }
    };

    const handleEditToArray = (fieldArray, index, setFieldValue, fieldName) => {
        const itemToEdit = fieldArray[index];
        setFieldValue(fieldName, itemToEdit); // Set the clicked item back into the input field
        setFieldValue('editIndex', index); // Store the index for updating later
    };

    const handleDeleteImage = (index, images, setFieldValue) => {
        setRemoveImages((prev) => [...prev, index])
        const updatedImages = images.filter((_, i) => i !== index)
        setFieldValue("images", updatedImages);
    };

    const handleEditImage = (event, index, images, setFieldValue) => {
        const file = event.target.files[0];
        setRemoveImages((prev) => [...prev, index])
        if (file) {
            const updatedImages = [...images];
            updatedImages[index] = file;
            setFieldValue("images", updatedImages);
        }
    };

    const onSubmit = (values) => {
        console.log(values);

        setIsSubmitted(true)
        values = { ...values, removeImages }

        if (formErrors.length === 0) {
            const formData = new FormData()

            const removeKeys = ['newInclude', 'newExclude', 'editIndex'];

            Object.keys(values).forEach(key => {
                if (removeKeys.includes(key)) return;

                if (key === 'includes' || key === 'excludes' || key === 'images' || key === 'removeImages') {
                    values[key].forEach((item) => {
                        formData.append(key, item);
                    });
                } else if (key === 'itinerary' || key === 'faqs') {
                    values[key].forEach((item, index) => {
                        Object.keys(item).forEach(subKey => {

                            formData.append(`${key}[${index}][${subKey}]`, item[subKey]);
                        });
                    });
                } else {
                    formData.append(key, values[key]);
                }
            });

            if (selectedTour) {
                updateTour({ tourData: formData, id: selectedTour._id })
            } else {
                addTour(formData)
            }
        }
    }

    useEffect(() => {
        // isSuccess && toast.showSuccess(data.message)
        isError && toast.showError(error.data.message)
    }, [isSuccess, isError, data, error])

    return <>
        <pre>{JSON.stringify(error, null, 2)}</pre>
        <Box>
            {(formErrors.length > 0 && isSubmitted) && <Box sx={{
                paddingY: 1, paddingX: 2, marginBottom: '16px', backgroundColor: '#cd2c22', color: 'white',
                borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
                <Box>
                    {formErrors.map((error, i) => <Typography key={i} fontSize={'14px'} fontWeight={500}>
                        {error}
                    </Typography>)}
                </Box>
                <IconButton onClick={() => setIsSubmitted(false)}>
                    <FontAwesomeIcon icon={faClose} color='white' fontSize={'16px'} />
                </IconButton>
            </Box>}

            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}>
                {({ values, setFieldValue, resetForm, handleSubmit }) => {
                    return <Form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {/* Tour Name */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <Paper>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Field
                                            name='name'
                                            as={TextField}
                                            label="Name" variant="outlined"
                                            InputLabelProps={inputLabelProps}
                                            sx={textFieldStyles}
                                            onChange={(e) => setFieldValue('name', e.target.value.toUpperCase())}
                                        />
                                    </Stack>
                                </Paper>
                            </Grid>

                            {/* Tour Location */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <Paper>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Field
                                            name='location'
                                            as={TextField}
                                            label="Location" variant="outlined"
                                            InputLabelProps={inputLabelProps}
                                            sx={textFieldStyles}
                                        />
                                    </Stack>
                                </Paper>
                            </Grid>

                            {/* Tour Duration */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <Paper>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Field
                                            name="duration"
                                            as={TextField}
                                            label="Duration" variant="outlined"
                                            InputLabelProps={inputLabelProps}
                                            sx={textFieldStyles}
                                        />
                                    </Stack>
                                </Paper>
                            </Grid>

                            {/* Tour Max People */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <Paper>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Field
                                            name='max_people'
                                            as={TextField}
                                            label="Max People" variant="outlined"
                                            InputLabelProps={inputLabelProps}
                                            sx={textFieldStyles}
                                        />
                                    </Stack>
                                </Paper>
                            </Grid>

                            {/* Tour Min Age */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <Paper>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Field
                                            name='min_age'
                                            as={TextField}
                                            label="Min Age" variant="outlined"
                                            InputLabelProps={inputLabelProps}
                                            sx={textFieldStyles}
                                        />
                                    </Stack>
                                </Paper>
                            </Grid>

                            {/* Tour Price */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <Paper>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Field
                                            name='price'
                                            as={TextField}
                                            label="Price" variant="outlined"
                                            InputLabelProps={inputLabelProps}
                                            sx={textFieldStyles}
                                        />
                                    </Stack>
                                </Paper>

                            </Grid>

                            {/* Tour Availability From  */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <Paper>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                label="Availability From"
                                                value={values.availability_from ? new Date(values.availability_from) : null}
                                                onChange={(value) => {
                                                    if (value) {
                                                        const formattedDate = format(value, 'MMM dd');
                                                        setFieldValue('availability_from', formattedDate);
                                                    }
                                                }}
                                                textField={(params) => <TextField {...params} fullWidth />}
                                                sx={{
                                                    ...textFieldStyles,
                                                    '& label.Mui-focused': { color: '#00c979' },
                                                    '& .MuiInputLabel-root': { color: 'gray' },
                                                }}
                                            />


                                        </LocalizationProvider>
                                    </Stack>
                                </Paper>
                            </Grid>

                            {/* Tour Availability To  */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <Paper>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                label="Availability To"
                                                value={values.availability_to ? new Date(values.availability_to) : null}
                                                onChange={(value) => {
                                                    if (value) {
                                                        const formattedDate = format(value, 'MMM dd');
                                                        setFieldValue('availability_to', formattedDate);
                                                    }
                                                }}
                                                textField={(params) => <TextField {...params} fullWidth />}
                                                sx={{
                                                    ...textFieldStyles,
                                                    '& label.Mui-focused': { color: '#00c979' },
                                                    '& .MuiInputLabel-root': { color: 'gray' },
                                                }}
                                            />

                                        </LocalizationProvider>
                                    </Stack>
                                </Paper>
                            </Grid>

                            {/* Description */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <Paper>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Field
                                            name="desc"
                                            as={TextField}
                                            label="Description" variant="outlined"
                                            InputLabelProps={inputLabelProps}
                                            sx={textFieldStyles}
                                            multiline
                                            rows={2}
                                        />
                                    </Stack>
                                </Paper>
                            </Grid>

                            {/* images Modal Button*/}
                            <Grid item xs={12} sm={6} lg={4}>
                                <Button variant="contained" onClick={() => setOpen(true)} sx={{ backgroundColor: '#00c979' }}>
                                    Tour Images
                                </Button>
                            </Grid>

                            {/* Tour Includes */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <FieldArray name='includes'>
                                    {({ push, remove, replace }) => (
                                        <>
                                            <Paper>
                                                <Stack spacing={2} sx={{ width: '100%' }}>
                                                    <TextField
                                                        variant="outlined"
                                                        label="Add Included Item"
                                                        value={values.newInclude}
                                                        onChange={(e) => setFieldValue('newInclude', e.target.value)}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <IconButton onClick={() =>
                                                                        handleAddToArray(
                                                                            values.newInclude,
                                                                            push,
                                                                            setFieldValue,
                                                                            'newInclude',
                                                                            values.editIndex,
                                                                            replace
                                                                        )
                                                                    }>
                                                                        <FontAwesomeIcon icon={faPlus} color="#00c979" />
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        InputLabelProps={inputLabelProps}
                                                        sx={textFieldStyles}
                                                    />

                                                </Stack>
                                            </Paper>

                                            {
                                                values.includes && values.includes.length > 0 && <Paper>
                                                    <Stack sx={{ mt: '10px' }} >
                                                        <List>
                                                            {values.includes.map((item, index) => (
                                                                <ListItem
                                                                    key={index}
                                                                    secondaryAction={
                                                                        <>
                                                                            {/* Edit Button */}
                                                                            <IconButton edge="end" aria-label="edit" onClick={() => handleEditToArray(values.includes, index, setFieldValue, 'newInclude')} >
                                                                                <FontAwesomeIcon icon={faEdit} color='#2e8adb' fontSize={'19px'} />
                                                                            </IconButton>

                                                                            {/* Delete Button */}
                                                                            <IconButton edge="end" aria-label="delete" sx={{ marginLeft: '4px' }} onClick={() => remove(index)}>
                                                                                <FontAwesomeIcon icon={faTrash} color='#f21839' fontSize={'18px'} />
                                                                            </IconButton>
                                                                        </>
                                                                    }
                                                                >
                                                                    <ListItemText primary={item} />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </Stack>
                                                </Paper>
                                            }
                                        </>
                                    )}
                                </FieldArray>
                            </Grid>

                            {/* Tour Excludes */}
                            <Grid item xs={12} sm={6} lg={4}>
                                <FieldArray name='excludes'>
                                    {({ push, remove, replace }) => (
                                        <>
                                            <Paper>
                                                <Stack spacing={2} sx={{ width: '100%' }}>
                                                    <TextField
                                                        variant="outlined"
                                                        label="Add Exclude Item"
                                                        value={values.newExclude}
                                                        onChange={(e) => setFieldValue('newExclude', e.target.value)}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <IconButton onClick={() =>
                                                                        handleAddToArray(
                                                                            values.newExclude,
                                                                            push,
                                                                            setFieldValue,
                                                                            'newExclude',
                                                                            values.editIndex,
                                                                            replace
                                                                        )
                                                                    }>
                                                                        <FontAwesomeIcon icon={faPlus} color="#00c979" />
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        InputLabelProps={inputLabelProps}
                                                        sx={textFieldStyles}
                                                    />

                                                </Stack>
                                            </Paper>

                                            {
                                                values.excludes.length > 0 && <Paper>
                                                    <Stack sx={{ mt: '10px' }} >
                                                        <List>
                                                            {values.excludes.map((item, index) => (
                                                                <ListItem
                                                                    key={index}
                                                                    secondaryAction={
                                                                        <>
                                                                            {/* Edit Button */}
                                                                            <IconButton edge="end" aria-label="edit" onClick={() => handleEditToArray(values.excludes, index, setFieldValue, 'newExclude')} >
                                                                                <FontAwesomeIcon icon={faEdit} color='#2e8adb' fontSize={'19px'} />
                                                                            </IconButton>

                                                                            {/* Delete Button */}
                                                                            <IconButton edge="end" aria-label="delete" sx={{ marginLeft: '4px' }} onClick={() => remove(index)}>
                                                                                <FontAwesomeIcon icon={faTrash} color='#f21839' fontSize={'18px'} />
                                                                            </IconButton>
                                                                        </>
                                                                    }
                                                                >
                                                                    <ListItemText primary={item} />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </Stack>
                                                </Paper>
                                            }
                                        </>
                                    )}
                                </FieldArray>
                            </Grid>

                            {/* Tour Itinerary */}
                            <Grid item xs={12} sm={6} lg={6}>
                                <FieldArray name="itinerary">
                                    {({ push, remove }) => (
                                        <>
                                            {values.itinerary.map((item, index) => (
                                                <Paper key={index} sx={{ mb: 2, padding: 2 }}>
                                                    <Stack spacing={2}>
                                                        <Typography sx={{ color: 'black', fontWeight: 450 }}>Add Itinerary</Typography>

                                                        {/* Day Field */}
                                                        <Paper>
                                                            <Stack>
                                                                <Field
                                                                    label={`Day ${index + 1}`}
                                                                    name={`itinerary[${index}].day`}
                                                                    as={TextField}
                                                                    value={item.day}
                                                                    onChange={(e) => setFieldValue(`itinerary[${index}].day`, e.target.value)}
                                                                    InputLabelProps={inputLabelProps}
                                                                    sx={textFieldStyles}
                                                                />
                                                            </Stack>
                                                        </Paper>

                                                        {/* Title Field */}
                                                        <Paper>
                                                            <Stack>
                                                                <Field
                                                                    label="Title"
                                                                    name={`itinerary[${index}].title`}
                                                                    as={TextField}
                                                                    value={item.title}
                                                                    onChange={(e) => setFieldValue(`itinerary[${index}].title`, e.target.value)}
                                                                    InputLabelProps={inputLabelProps}
                                                                    sx={textFieldStyles}
                                                                />
                                                            </Stack>
                                                        </Paper>

                                                        {/* Description Field */}
                                                        <Paper>
                                                            <Stack>
                                                                <Field
                                                                    label="Description"
                                                                    name={`itinerary[${index}].desc`}
                                                                    as={TextField}
                                                                    value={item.desc}
                                                                    onChange={(e) => setFieldValue(`itinerary[${index}].desc`, e.target.value)}
                                                                    InputLabelProps={inputLabelProps}
                                                                    sx={textFieldStyles}
                                                                    multiline
                                                                    rows={3}
                                                                />
                                                            </Stack>
                                                        </Paper>

                                                        {/* Action Buttons */}
                                                        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>

                                                            {values.itinerary.length === (index + 1) &&
                                                                <IconButton onClick={() => push({ day: '', title: '', desc: '' })}>
                                                                    <FontAwesomeIcon icon={faPlus} color='#00c979' />
                                                                </IconButton>
                                                            }
                                                            {
                                                                values.itinerary.length > 1 &&
                                                                <IconButton onClick={() => remove(index)} >
                                                                    <FontAwesomeIcon icon={faMinus} color='#f21839' />
                                                                </IconButton>
                                                            }
                                                        </Stack>
                                                    </Stack>
                                                </Paper>
                                            ))}
                                        </>
                                    )}
                                </FieldArray>
                            </Grid>

                            {/* Tour Faqs */}
                            <Grid item xs={12} sm={6} lg={6}>
                                <FieldArray name="faqs">
                                    {({ push, remove }) => (
                                        <>
                                            {values.faqs && values.faqs.map((item, index) => (
                                                <Paper key={index} sx={{ mb: 2, padding: 2 }}>
                                                    <Stack spacing={2}>
                                                        <Typography sx={{ color: 'black', fontWeight: 450 }}>Add Faqs</Typography>

                                                        {/* Title Field */}
                                                        <Paper>
                                                            <Stack>
                                                                <Field
                                                                    label="Title"
                                                                    name={`faqs[${index}].title`}
                                                                    as={TextField}
                                                                    value={item.title}
                                                                    onChange={(e) => setFieldValue(`faqs[${index}].title`, e.target.value)}
                                                                    InputLabelProps={inputLabelProps}
                                                                    sx={textFieldStyles}
                                                                />
                                                            </Stack>
                                                        </Paper>

                                                        {/* Description Field */}
                                                        <Paper>
                                                            <Stack>
                                                                <Field
                                                                    label="Description"
                                                                    name={`faqs[${index}].desc`}
                                                                    as={TextField}
                                                                    value={item.desc}
                                                                    onChange={(e) => setFieldValue(`faqs[${index}].desc`, e.target.value)}
                                                                    InputLabelProps={inputLabelProps}
                                                                    sx={textFieldStyles}
                                                                    multiline
                                                                    rows={3}
                                                                />
                                                            </Stack>
                                                        </Paper>

                                                        {/* Action Buttons */}
                                                        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>

                                                            {values.faqs.length === (index + 1) &&
                                                                <IconButton onClick={() => push({ title: '', desc: '' })}>
                                                                    <FontAwesomeIcon icon={faPlus} color='#00c979' />
                                                                </IconButton>
                                                            }
                                                            {
                                                                values.faqs.length > 1 &&
                                                                <IconButton onClick={() => remove(index)} >
                                                                    <FontAwesomeIcon icon={faMinus} color='#f21839' />
                                                                </IconButton>
                                                            }
                                                        </Stack>
                                                    </Stack>
                                                </Paper>
                                            ))}
                                        </>
                                    )}
                                </FieldArray>
                            </Grid>

                        </Grid>

                        {/* Reset and Submit Buttons */}
                        <Box sx={{ textAlign: 'end' }}>
                            <Button variant='contained' type='button' sx={{ backgroundColor: grey[400], marginLeft: '10px' }}
                                onClick={() => { resetForm(), setIsSubmitted(false) }}>
                                Reset
                            </Button>
                            <Button variant='contained' type='submit' sx={{ backgroundColor: '#00c979', marginLeft: '10px' }}>
                                submit
                            </Button>
                        </Box>

                        {/* Image Modal */}
                        <Modal
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 600,
                                bgcolor: 'background.paper',
                                boxShadow: 24,
                                p: 4,
                            }}>

                                {/* Title and Modal Close Button */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Select Tour Images
                                    </Typography>
                                    <IconButton onClick={() => setOpen(false)}>
                                        <FontAwesomeIcon icon={faClose} fontSize={'22px'} />
                                    </IconButton>
                                </Box>

                                {/* Image File Input */}
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', mt: 3 }}>
                                    <TextField
                                        sx={{ display: 'none' }}
                                        id="file-upload"
                                        type="file"
                                        multiple={true}
                                        onChange={(event) => {
                                            const files = event.target.files
                                            setFieldValue("images", [...values.images, ...files]);
                                        }}
                                    />
                                    <FormLabel htmlFor="file-upload">
                                        <Button variant="contained" component='span' sx={{ backgroundColor: '#00c979' }}>
                                            Select Image
                                        </Button>
                                    </FormLabel>
                                </Box>

                                {/* Image Preview */}
                                <Box marginTop={'32px'}>
                                    {
                                        (values.images.length > 0) && <ImageList sx={{ width: '100%', height: '400px' }} cols={2} >
                                            {
                                                values.images.map((item, index) => (

                                                    <ImageListItem key={index}>
                                                        <Box
                                                            component="img"
                                                            src={item instanceof File ? URL.createObjectURL(item) : item}
                                                            alt={`Preview ${index}`}
                                                            sx={{ width: "100%", height: "170px" }}
                                                        />
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: selectedTour ? 0 : 2 }}>
                                                            <Typography>{item.name}</Typography>
                                                            <Box>
                                                                {/* Edit Button */}
                                                                <IconButton edge="end" aria-label="edit">
                                                                    <FormLabel htmlFor={`${index}`}>
                                                                        <FontAwesomeIcon icon={faEdit} color="#2e8adb" fontSize="19px" />
                                                                    </FormLabel>
                                                                </IconButton>
                                                                <TextField
                                                                    id={`${index}`}
                                                                    type="file"
                                                                    sx={{ display: "none" }}
                                                                    onChange={(e) => handleEditImage(e, index, values.images, setFieldValue, item)}
                                                                />

                                                                {/* Delete Button */}
                                                                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteImage(index, values.images, setFieldValue)} sx={{ marginLeft: '4px' }}>
                                                                    <FontAwesomeIcon icon={faTrash} color="#f21839" fontSize="18px" />
                                                                </IconButton>
                                                            </Box>
                                                        </Box>
                                                    </ImageListItem>
                                                ))
                                            }

                                        </ImageList>
                                    }
                                    {/* {
                                        selectedTour && <ImageList sx={{ width: '100%', height: '400px' }} cols={2} >
                                            {
                                                selectedTour.images.map((item, index) => <ImageListItem key={index}>
                                                    <Box
                                                        component="img"
                                                        src={`${import.meta.env.VITE_BACKEND_URL}/${item}`}
                                                        alt={`Preview ${index}`}
                                                        sx={{ width: "100%", height: "170px" }}
                                                    />
                                                    <Box>
                                                        <IconButton edge="end" aria-label="edit">
                                                            <FormLabel htmlFor={`e-${index}`}>
                                                                <FontAwesomeIcon icon={faEdit} color="#2e8adb" fontSize="19px" />
                                                            </FormLabel>
                                                        </IconButton>
                                                        <TextField
                                                            id={`e-${index}`}
                                                            type="file"
                                                            sx={{ display: "none" }}
                                                            onChange={(e) => handleEditImage(e, index, selectedTour.images, setFieldValue)}
                                                        />

                                                        <IconButton edge="end" aria-label="delete"
                                                            onClick={() => handleDeleteImage(index, selectedTour.images, setFieldValue)}
                                                            sx={{ marginLeft: '4px' }}>
                                                            <FontAwesomeIcon icon={faTrash} color="#f21839" fontSize="18px" />
                                                        </IconButton>
                                                    </Box>
                                                </ImageListItem>)
                                            }
                                        </ImageList>
                                    } */}
                                </Box>
                            </Box>


                        </Modal>
                    </Form>
                }}
            </Formik>

            <Snackbar
                autoHideDuration={4000}
                sx={{ backgroundColor: "#00c979", color: "#00c979" }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={isSuccess}
            >
                <Alert
                    variant="filled"
                    severity="success"
                    sx={{
                        width: "100%",
                        backgroundColor: "#00c979",
                        color: "white", // Set text color to white
                    }}
                >
                    Login Success
                </Alert>
            </Snackbar>

        </Box>
    </>
}

export default AdminAddTours


AdminAddTours.propTypes = {
    selectedTour: PropTypes.object,
}
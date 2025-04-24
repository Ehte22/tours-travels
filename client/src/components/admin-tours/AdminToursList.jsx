import { Box, Grid, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useDeleteTourMutation, useGetTourDetailsQuery, useGetToursQuery } from "../../redux/apis/tour.apis"
import AdminTourCard from "../AdminTourCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'

const AdminToursList = ({ setTour, setSelectedTour }) => {
    const { data } = useGetToursQuery()
    const [openModal, setOpenModal] = useState(false);
    const [selectedTourId, setSelectedTourId] = useState(null);

    const { data: tourDetails } = useGetTourDetailsQuery(selectedTourId, {
        skip: !selectedTourId,
    });
    const [deleteTour] = useDeleteTourMutation()

    const handleOpenModal = (tourId) => {
        setSelectedTourId(tourId);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedTourId(null);
    };

    const handleDeleteTour = () => {
        deleteTour(tourDetails._id)
        setOpenModal(false)
    }
    const handleEditTour = () => {
        setTour('edit')
        setOpenModal(false)
        setSelectedTour(tourDetails)
    }

    return <>
        <Box marginY={'20px'}>
            <Grid container spacing={4} sx={{ display: 'flex', justifyContent: { sm: 'center', lg: 'flex-start' } }}>
                {data && data.map((item, i) => <Grid key={i} item sm={9} md={7} lg={6} xl={4} display={'flex'} alignItems={'center'}>
                    <AdminTourCard item={item} openTourDetails={() => handleOpenModal(item._id)} isAdmin={true} />
                </Grid>)}
            </Grid>
        </Box>


        {/* Tour Detail Modal */}
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 3,
            }}>

                {/* Title and Modal Close Button */}
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Tour Details
                        </Typography>
                        <IconButton onClick={() => setOpenModal(false)}>
                            <FontAwesomeIcon icon={faClose} fontSize={'22px'} />
                        </IconButton>
                    </Box>

                    <Box sx={{ textAlign: 'end' }}>
                        {/* Edit Button */}
                        <IconButton edge="end" aria-label="edit" onClick={handleEditTour}>
                            <FontAwesomeIcon icon={faEdit} color='#2e8adb' fontSize={'19px'} />
                        </IconButton>

                        {/* Delete Button */}
                        <IconButton edge="end" aria-label="delete" sx={{ marginLeft: '4px' }} onClick={handleDeleteTour}>
                            <FontAwesomeIcon icon={faTrash} color='#f21839' fontSize={'18px'} />
                        </IconButton>
                    </Box>
                </Box>

                <Box sx={{
                    maxHeight: 'calc(80vh - 60px)',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' }
                }}>
                    {tourDetails && <Box marginTop={'12px'}>
                        <Grid container columnSpacing={4}>
                            <Grid item sm={6}>
                                {/* Name */}
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Name</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>{tourDetails.name}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                                {/* Duration */}
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Duration</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>{tourDetails.duration}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                                {/* Max People */}
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Max People</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>{tourDetails.max_people}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                                {/* Availability From */}
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Availability From</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>{tourDetails.availability_to}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            <Grid item sm={6}>
                                {/* Location */}
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Location</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>{tourDetails.location}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                                {/* Price */}
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Price</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>{tourDetails.price}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                                {/* Min Age */}
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Min Age</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>{tourDetails.min_age}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                                {/* Availability To */}
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Availability To</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>{tourDetails.availability_to}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                {/* Description */}
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Description</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography>{tourDetails.desc}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Includes */}
                            <Grid item sm={6}>
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Includes</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            {tourDetails.includes.map((item, i) => {
                                                return <Typography key={i} sx={{ marginTop: i > 0 ? '6px' : '' }}>
                                                    {item}
                                                </Typography>
                                            })}
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Excludes */}
                            <Grid item sm={6}>
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Excludes</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            {tourDetails.excludes.map((item, i) => {
                                                return <Typography key={i} sx={{ marginTop: i > 0 ? '6px' : '' }}>
                                                    {item}
                                                </Typography>
                                            })}
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Images */}
                            <Grid item sm={12}>
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Images</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Grid container spacing={1}>
                                                {tourDetails.images.map((item, i) => <Grid key={i} item xs={2.4}>
                                                    <Box key={i}
                                                        component="img"
                                                        // src={`${import.meta.env.VITE_BACKEND_URL}/${item}`}
                                                        src={item}
                                                        alt={`Preview ${i}`}
                                                        sx={{ width: "100%", height: "80px" }}
                                                    />
                                                </Grid>)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Itinerary */}
                            <Grid item sm={12}>
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Itinerary</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <TableContainer component={Paper}>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Day</TableCell>
                                                            <TableCell>Title</TableCell>
                                                            <TableCell>Description</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {tourDetails.itinerary.map((item, i) => (
                                                            <TableRow
                                                                key={i}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >

                                                                <TableCell>{item.day}</TableCell>
                                                                <TableCell>{item.title}</TableCell>
                                                                <TableCell>{item.desc}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Faqs */}
                            <Grid item sm={12}>
                                <Box my={'8px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Faqs</Typography>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <TableContainer component={Paper}>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Title</TableCell>
                                                            <TableCell>Description</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {tourDetails.faqs.map((item, i) => (
                                                            <TableRow
                                                                key={i}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >

                                                                <TableCell >{item.title}</TableCell>
                                                                <TableCell >{item.desc}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>}
                </Box>

            </Box>

        </Modal>
    </>
}

export default AdminToursList

AdminToursList.propTypes = {
    setTour: PropTypes.func.isRequired,
    setSelectedTour: PropTypes.func.isRequired,
}
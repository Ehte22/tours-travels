import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import { useGetToursQuery } from "../../redux/apis/tour.apis"
import AdminTourCard from "../AdminTourCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const AdminToursList = () => {
    const { data } = useGetToursQuery()
    const [openModal, setOpenModal] = useState(false);

    return <>
        <Box marginY={'20px'}>
            <Grid container spacing={4} sx={{ display: 'flex', justifyContent: { sm: 'center', lg: 'flex-start' } }}>
                {data && data.map((item, i) => <Grid key={i} item sm={9} md={7} lg={6} xl={4} display={'flex'} alignItems={'center'}>
                    <AdminTourCard item={item} setOpenModal={setOpenModal} />
                </Grid>)}

            </Grid>
        </Box>


        {/* Tour Detail Modal */}
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 700,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 3,
            }}>

                {/* Title and Modal Close Button */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Tour Details
                    </Typography>
                    <IconButton onClick={() => setOpenModal(false)}>
                        <FontAwesomeIcon icon={faClose} fontSize={'22px'} />
                    </IconButton>
                </Box>


            </Box>


        </Modal>
    </>
}

export default AdminToursList
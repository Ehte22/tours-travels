import { useState } from 'react'
import AdminToursList from './AdminToursList'
import AdminAddTours from './AdminAddTours'
import { Box, Button, Typography } from '@mui/material'


const AdminTours = () => {
    const [tour, setTour] = useState('list')
    const [selectedTour, setSelectedTour] = useState(null)
    return <>
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                    sx={{ fontSize: '20px', fontFamily: 'ArcaMajora, Arial, sans-serif' }}>
                    Tours
                </Typography>
                <Button
                    variant='contained'
                    sx={{ backgroundColor: '#00c979' }}
                    onClick={() => setTour(tour === 'list' ? 'add' : 'list')}>
                    {tour === 'list' ? 'Add Tour' : 'Back'}
                </Button>
            </Box>
            <Box sx={{
                backgroundColor: 'white', borderRadius: '8px', marginTop: '20px',
                padding: '20px'
            }}>
                {tour === 'list' && <AdminToursList setTour={setTour} setSelectedTour={setSelectedTour} />}
                {tour === 'add' && <AdminAddTours />}
                {tour === 'edit' && <AdminAddTours selectedTour={selectedTour} />}
            </Box>
        </Box>

    </>
}

export default AdminTours

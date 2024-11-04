import { Box, CircularProgress } from '@mui/material'
import { useContext } from 'react'
import { LoadingContext } from '../App'

const Loader = () => {
    const { isLoading } = useContext(LoadingContext)
    return <>
        {isLoading && <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full screen loader
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
                zIndex: 9999, // Ensure it covers everything
            }}
        >
            <CircularProgress />
        </Box>}
    </>
}

export default Loader
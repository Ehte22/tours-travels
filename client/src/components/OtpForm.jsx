import { useState, useRef, useEffect } from 'react';
import { TextField, Grid, Typography, Box } from '@mui/material';

const OtpForm = () => {
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

    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{
                fontFamily: 'ArcaMajora, Arial, sans-serif',
                fontSize: { xs: '20px', sm: '24px' }
            }} gutterBottom>
                Enter the OTP sent to your email
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ marginY: '20px' }}>
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
        </Box>
    );
};

export default OtpForm;

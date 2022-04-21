import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
        const navigate = useNavigate();
        function handleNavigate(path: string) {
                navigate(path);
        }
        return (
                <div>
                        <Typography variant="h1">LandingPage</Typography>
                        <Button onClick={() => handleNavigate('/invoicegenerator')} type="button">Try me!</Button>
                </div>
        );
}

import {
        AppBar, Button, Drawer, IconButton, Toolbar, Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Wrapper } from './styles';

export default function InvoiceGenerator() {
        const [isOpen, setIsOpen] = React.useState(false);

        const darkTheme = createTheme({
                palette: {
                        mode: 'dark',
                        primary: {
                                main: '#1976d2',
                        },
                },
        });

        return (
                <Wrapper>
                        <Grid container spacing={2} direction="column" className="invoice-gen-header">
                                <Grid item xs={12}>
                                        <ThemeProvider theme={darkTheme}>
                                                <AppBar position="static">
                                                        <Toolbar>
                                                                <IconButton
                                                                        size="large"
                                                                        edge="start"
                                                                        color="inherit"
                                                                        aria-label="menu"
                                                                        onClick={() => setIsOpen(true)}
                                                                        sx={{ mr: 2 }}
                                                                >
                                                                        <MenuIcon />
                                                                </IconButton>
                                                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                                        ACCGEN
                                                                </Typography>
                                                        </Toolbar>
                                                </AppBar>
                                                <Drawer
                                                        anchor="left"
                                                        open={isOpen}
                                                        onClose={() => setIsOpen(false)}
                                                >
                                                        <Typography><Button>Back</Button></Typography>
                                                </Drawer>
                                        </ThemeProvider>
                                </Grid>
                                <Grid item xs={12}><Typography>InvoiceGen</Typography></Grid>
                        </Grid>

                </Wrapper>
        );
}

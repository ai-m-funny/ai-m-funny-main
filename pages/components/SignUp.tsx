import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'


export default function SignUp (){
    return (
        <Container component="main" maxWidth= "xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    aliginItems: 'center'
                }}
                />
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>

                <Box component= "form" noValidate sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="username"
                            label="username"
                            name="username"
                            /> 
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="email"
                            name="email"
                            /> 
                        </Grid>
                       </Grid> 
                       <Button 
                       type="submit"
                       fullWidth
                       variant='contained'
                       sx={{mt: 3, nb: 2}}
                       >
                        Sign Up
                       </Button>
                </Box>



                </Container>
      
    )
}
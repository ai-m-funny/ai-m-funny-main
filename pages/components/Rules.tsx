import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Rules() {
    return (
        <div>
          <Container component="main" maxWidth= "lg">
                <Typography variant="body1">
                    Rules: each user can only submit 1 prompt and 1 image per contest. Your prompt will generate 4 images using Dall-E 2. Select which one you would like to enter, and then click the submit button to have your chosen image added to the contest.
                </Typography>
          </Container>
        </div>
    )
}
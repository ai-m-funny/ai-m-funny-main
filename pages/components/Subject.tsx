import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useState } from 'react'

export default function Subject({subject}) {
  return (
        <div>
          <Container component="main" maxWidth= "lg">
                <Typography variant="body1">
                    Current Contest Subject: {subject}
                </Typography>
          </Container>
        </div>
    )
}
import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useState } from 'react'

export default function Subject() {
  const [subject, setSubject] = useState();
  async function getSubject() {
    const response = await fetch('/api/contest', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setSubject(data[0].contestname);
  };
  console.log(getSubject());
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
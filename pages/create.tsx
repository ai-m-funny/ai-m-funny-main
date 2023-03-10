import * as React from 'react'

import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useState } from 'react'
import { ChangeEvent } from 'react'
import Rules from './components/Rules'
import DallEImages from './components/DallEImages'
import Subject from './components/Subject';
import LoadingButton from '@mui/lab/LoadingButton';
import { CircularProgress, LinearProgress } from '@mui/material'
import { useSession } from "next-auth/react"



export default function Create() {
    const { data: session } = useSession()
    console.log('session: ', session)
    const [textInput, setTextInput] = useState("");
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
      setLoading(true);
      e.preventDefault();
      const response = await fetch('/api/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: textInput })
      });
      const data = await response.json();
      setResult(data.image_url);
      setLoading(false);
    }
    const [subject, setSubject] = useState();
    async function getSubject(): Promise<void>{
      const response = await fetch('/api/contest', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      setSubject(data[0].contestname);
      console.log(subject)
    }
    getSubject();
    const props = {
      subject: subject,
      urls: result,
      loading: loading
    }
    if (!session) {
      return (
        <h1>unauthorized</h1>
      )
    }
    return (
        <div>
          <Container component="main" maxWidth= "lg">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    aliginItems: 'center'
                }}
                />
                    <Typography component="h1" variant="h5">
                        Create images, enter the contest!
                    </Typography>
                    <Rules />
                    <Subject subject={subject} />
                <Box component= "form" noValidate sx={{mt: 3}} onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={10} sm={10}>
                            <TextField
                            required
                            fullWidth
                            id="prompt"
                            label="Enter your prompt for Dall-E here - be creative!"
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                            name="prompt"
                            /> 
                        </Grid>
                        <Grid item xs={2} sm={2}>
                          <LoadingButton
                            size="large"
                            type="submit"
                            variant="contained"
                            loading={loading}
                            loadingPosition="center"
                            loadingIndicator={<CircularProgress
                                                color='primary'
                                                size='20px'
                                                />}
                            sx={
                              {
                                backgroundColor: '#64B5F6 !important',
                                color: '#ffffff',
                                className: 'buttonMUI',
                                marginTop: '6px',
                              }
                            }
                          >
                            Generate
                          </LoadingButton>
                        </Grid>
                       </Grid> 
                </Box>
            </Container>
            <DallEImages props={props}/>
        </div>
    )
}
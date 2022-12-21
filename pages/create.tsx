import * as React from 'react'
import styles from '../styles/Form.module.css';
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



export default function Create() {

    const [textInput, setTextInput] = useState("");
    const [result, setResult] = useState();
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
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
                    <Subject />
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
                          <div className="input-button">
                            <button type='submit' className={styles.button}>
                              Generate
                            </button>
                          </div>
                        </Grid>
                       </Grid> 
                </Box>
            </Container>
            <DallEImages urls={result}/>
        </div>
    )
}
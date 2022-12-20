import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useState } from 'react'
import { ChangeEvent } from 'react'

export default function DallEImages({urls}) {
  // const returnedImages:string[] = [];
  // urls.forEach(obj => {
  //   const image:string = obj.url
  //   returnedImages.push(image)
  // })
  // }

    return (
        <div>
          <Container component="main" maxWidth= "lg"
            sx={{
                    marginTop: 8,
                    display: 'grid',
                    aliginItems: 'center',
                    minHeight: '30vh',
                    height: '100%',
                    width: '100%',
                    outline: '2px solid black',
                    borderRadius: '10px',
                }}>
                  <Grid container spacing={2}>
                    <Grid>
                      <img />
                    </Grid>
                    <Grid>
                      
                    </Grid>
                    <Grid>
                      
                    </Grid>
                    <Grid>
                      
                    </Grid>
                  </Grid>
          </Container>
          <Container>
            <Button 
              type="submit"
              variant='contained'
              sx={{mt: 1, nb: 2}}
              >
                Submit
            </Button>
          </Container>
        </div>
    )
}
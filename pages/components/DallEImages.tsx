import * as React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Item from '@mui/material/Grid'
import Image from 'next/image'
import { useState } from 'react'

export default function DallEImages({urls}) {
  
  async function handleClick(e, url) {
    e.preventDefault();
    const response = await fetch('/api/contest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image_url: url })
    });
    const data = await response.json();
    console.log(data);
  }
  if (urls === undefined) return;
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
                    borderRadius: '10px',
                    alignContent: 'center',
                }}>
                  <Grid container spacing={4} columns={12}>
                    <Grid item xs={12} sm={6}>
                      <Item>
                        <Image src={`${urls[0].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[0].url)} />
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Item>
                        <Image src={`${urls[1].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[1].url)} />
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Item>
                        <Image src={`${urls[2].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[2].url)} />
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Item>
                        <Image src={`${urls[3].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[3].url)} />
                      </Item>
                    </Grid>
                  </Grid>
          </Container>
          <Button 
              type="submit"
              variant='contained'
              sx={{mt: 1, nb: 2}}
              >
              Submit
          </Button>
        </div>
    )
}
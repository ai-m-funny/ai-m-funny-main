import * as React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Item from '@mui/material/Grid'
import Image from 'next/image'
import styles from 'styles/Form.module.css';
import { useState } from 'react'
import Link from 'next/link'

export default function DallEImages({props}) {
  const [submitted, setSubmitted] = useState();
  const urls = props.urls;
  const contestName = props.subject;
  async function handleClick(e: React.MouseEvent<HTMLImageElement, MouseEvent>, url: string, contestName: string) {
    e.preventDefault();
    console.log(contestName)
    const response = await fetch('/api/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        url: url, 
        votes: 0,
        username: 'test', 
        contestname: contestName
      })
    });
    const data = await response.json();
    setSubmitted(true);
  }
  if (urls === undefined) return;
  if (submitted === true) return (
    <div>
      <p>Your image has been submitted!</p>
      <Link href='/feed'>Click here to back to the contest feed</Link>
    </div>
  )
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
                  Click on the image you would like to submit to the contest!
                  <Grid container spacing={4} columns={12}>
                    <Grid item xs={12} sm={6}>
                      <Item>
                        <Image src={`${urls[0].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[0].url, contestName)} />
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Item>
                        <Image src={`${urls[1].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[1].url, contestName)} />
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Item>
                        <Image src={`${urls[2].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[2].url, contestName)} />
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Item>
                        <Image src={`${urls[3].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[3].url, contestName)} />
                      </Item>
                    </Grid>
                  </Grid>
          </Container>
        </div>
    )
}
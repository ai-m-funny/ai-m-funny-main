
import React, { useState, useEffect } from 'react';
import LikeButton from './components/LikeButton';
import styles from '../styles/Feed.module.css';
import { imageListClasses } from '@mui/material';
export default function Feed(){
    const [images, setImages] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('/api/images');
        const data = await response.json();
        setImages(data);
      }
      fetchData();
    }, []);

    const feeditem = images.map((image) => {
        return <LikeButton
        key={image.idimages}
        url={image.url}
        votes={image.votes}
        username={image.username}
        />
    });
    return (
      <div className= "feedContainer">
        <h3 className="text-2xl text-gray-700 font-bold mb-6 ml-3">Feed</h3>
        {feeditem}
      </div>
    );
};


import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import axios from 'axios';

const PexelsGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        'https://api.pexels.com/v1/curated?page=2&per_page=40',
        {
          headers: {
            Authorization:
              'HYc10ql0A33gytZITtvtbfu7f7bRAolxnEuUe274vKkZBemo95eh34l6',
          },
        }
      );
      setPhotos(response.data.photos);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Pexels Gallery</h1>
      <Grid container spacing={3}>
        {photos.map((photo) => (
          <Grid item key={photo.id} xs={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                image={photo.src.original}
                alt={photo.alt}
              />
              <CardContent>
                <p>Photographer: {photo.photographer}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PexelsGallery;

//HYc10ql0A33gytZITtvtbfu7f7bRAolxnEuUe274vKkZBemo95eh34l6

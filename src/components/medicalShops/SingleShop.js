import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function SingleShop({ id, name, image, description, address}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', m:3, maxWidth:650 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
            mt={1} mb={1}
          >
            {description}
          </Typography>
          <div style={{display:"flex"}}>
          <LocationOnIcon mt={1} sx={{ color: 'text.secondary' }} />
          <Typography 
          variant="subtitle1"
          component="div"
          sx={{ color: 'text.secondary' }}
          
          mb={1} ml={1}>{address}</Typography>
          </div>
          <NavLink to={`/shop/${id}`}>
          <Button variant="contained" color="primary">
            View More
          </Button>
          </NavLink>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="medical shop picture"
      />
    </Card>
  );
}
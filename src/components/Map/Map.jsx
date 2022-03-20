import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined' 
import Rating from '@mui/material/Rating';

 
import useStyle from './style';

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const classes = useStyle()
  const isMobile = useMediaQuery('min-width:600px')

 /*  const coordinates ={lat: 0 , lng: 0} */
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootsURLKey={{ KEY: 'AIzaSyBLGRuO1A0EHSi6pcmCuNm6xGXgc5l27MQ' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) =>
        { 
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={''}
      >
      </GoogleMapReact>
    </div> 
  )
}

export default Map
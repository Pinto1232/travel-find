import React, {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import { CssBaseline, Grid } from '@material-ui/core'

//Import the getPlacesData function
import { getPlacesData } from '../src/api/index'


function App() {
  //Creat a hook to access the data
  const [places, setPlaces] = useState([])

  /*const [coordinates, setCoordinates] = useState({lat: 0, lng: 0}) */
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  
  //Get one more useEffect to get user geolocation automatically when the page is loaded
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) =>
    { 
      setCoordinates({lat: latitude, lng: longitude})
    })
      
  }, [])

  useEffect(() =>
  {
    console.log(coordinates, bounds);  
    // Calling the getPlacesData function
    getPlacesData()
    .then((data) =>{
      console.log('data', data);
      //Set the setPlaces function inside of the useffect hook
      setPlaces(data)    
    }) 
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
              <List />
        </Grid>
      
        <Grid item xs={12} md={8}>
          <Map
            //Setting the parameter in the map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />    
        </Grid>
      </Grid>
    </>
  )
}

export default App

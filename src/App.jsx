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

  useEffect(() =>{
    // Calling the getPlacesData function
    getPlacesData()
    .then((data) =>{
      console.log('data', data);
      //Set the setPlaces function inside of the useffect hook
      setPlaces(data)    
    })
  }, [])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
              <List />
        </Grid>
      
        <Grid item xs={12} md={8}>
              <Map />    
        </Grid>
      </Grid>
    </>
  )
}

export default App

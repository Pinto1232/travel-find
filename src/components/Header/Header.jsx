import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyle from './style'

const Header = () =>
{
  const classes = useStyle()
  return (
    <AppBar position="static">
       <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          <Box display="flex">
              Travel Advisor
          </Box>
        </Typography>

         <Typography variant="h6" className={classes.title}>
          <Box display="flex">
            <Typography>
                Explore new Places
            </Typography>
          {/*   <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
                <InputBase placeholder='...' classes={{root: classes.inputRoot, input: classes.inputInput}} />
           </div>
          {/*  </Autocomplete>  */}
          </Box>
        </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header
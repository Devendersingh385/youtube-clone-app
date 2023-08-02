import React from 'react'
import { Box, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper
      component='form'
      className=''
      // onSubmit={()=>{

      // }}
      sx={{
        width: 'auto !important',
        height: 'auto !important',
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
      >
        <input 
            className='search-bar'
            placeholder='search...'
            value=''
            // onChange={()=>{

            // }}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
            </Paper>  
    </Box>    
    </>
  )
}

export default SearchBar
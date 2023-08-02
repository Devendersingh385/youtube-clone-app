'use client'
import React, { useState, useEffect } from 'react';
import {Box, Stack, Typography} from '@mui/material'

import SideBar from '@/Components/SideBar/SideBar';
import Videos from '../Videos/page';

import { fetchFromAPI } from '@/utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
const [videos, setVideos] = useState(null);

  useEffect(()=> {
    setVideos(null);
    
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=> setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack  sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: {sx: 'auto', md: '92vh'}, BorderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2} }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography
          variant='body1'
        >
          copyright 2023 devplix
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#fff'}}>
         {selectedCategory}
          <span style={{ color: '#f31503'}}>
            videos
          </span>
        </Typography>

       <Videos Videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
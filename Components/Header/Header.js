import React from 'react'
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import DropDownMenu from './DropDownMenu';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <>
    <Box sx={{ width: '100%', padding: '0 16px' }}>
      <Stack spacing={2} direction='row' alignItems='center' className='sticky top-0 justify-between'>
        <Link href='/' className='flex items-center'>
        <Image 
            src='/vercel.svg'
            width={100}
            height={24}
            alt='vercel'
        />
        </Link>
       <SearchBar />
       <DropDownMenu />      
      </Stack>
    </Box>

    </>
  )
}

export default Header
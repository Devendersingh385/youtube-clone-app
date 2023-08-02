import React from 'react'
import { Stack } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '@/utils/constants'
import SearchBar from '../Header/SearchBar'

const Navbar = () => (
    <Stack
    direction="row" 
    p={2}
    alignItems='center'
    sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between'
    }}    
    >
    <Link href=''>
    <Image src={logo}
    width={45}
    height={45}
    alt='logo'
    />
    </Link>
    <SearchBar />
    </Stack>
)

export default Navbar
'use client'

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DropDownMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

  return (
    <>
    <Stack spacing={2} direction='row' alignItems='center'>
        <Button
            id='dropDownBtn'
            sx={{
                minWidth: '40px',
                height: '40px'
                
            }}
            onClick={handleClick}
            aria-controls={ open ? 'dropDownList' : undefined }
            aria-haspopup= 'true'
            aria-expanded={ open ? 'true' : undefined}
        >
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MoreVertIcon"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
        </Button>
        <Menu
            id='dropDownList'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'dropDownBtn',
              }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>   
        </Menu>
        <Button variant="outlined"><AccountCircleIcon className='mr-2'/> Sign in</Button>
    </Stack>
    </>
  )
}

export default DropDownMenu
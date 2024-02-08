import { Box, Button, InputLabel } from '@mui/material'
import React from 'react'

const Header = ({ option, setOption }) => {
  return (
    <Box
      sx={{
        padding: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'grey',
      }}
    >
      <InputLabel>Cafeteria APEC</InputLabel>
      <Box>
        <Button
          onClick={() => setOption('cafeteria')}
          variant={option === 'cafeteria' ? 'contained' : 'outlined'}
        >
          Cafeteria
        </Button>
        <Button
          sx={{ ml: 2 }}
          onClick={() => setOption('campus')}
          variant={option === 'campus' ? 'contained' : 'outlined'}
        >
          Campus
        </Button>
        <Button
          sx={{ ml: 2 }}
          onClick={() => setOption('supplier')}
          variant={option === 'supplier' ? 'contained' : 'outlined'}
        >
          Suplidores
        </Button>
        <Button
          sx={{ ml: 2 }}
          onClick={() => setOption('userType')}
          variant={option === 'userType' ? 'contained' : 'outlined'}
        >
          Tipos de usuarios
        </Button>
      </Box>
    </Box>
  )
}

export default Header

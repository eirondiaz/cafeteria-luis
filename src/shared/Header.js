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
        <Button
          sx={{ ml: 2 }}
          onClick={() => setOption('user')}
          variant={option === 'user' ? 'contained' : 'outlined'}
        >
          Usuarios
        </Button>
        <Button
          sx={{ ml: 2 }}
          onClick={() => setOption('brand')}
          variant={option === 'brand' ? 'contained' : 'outlined'}
        >
          Marcas
        </Button>
        <Button
          sx={{ ml: 2 }}
          onClick={() => setOption('item')}
          variant={option === 'item' ? 'contained' : 'outlined'}
        >
          Articulos
        </Button>
        <Button
          sx={{ ml: 2 }}
          onClick={() => setOption('employee')}
          variant={option === 'employee' ? 'contained' : 'outlined'}
        >
          Empleados
        </Button>
        <Button
          sx={{ ml: 2 }}
          onClick={() => setOption('sale')}
          variant={option === 'sale' ? 'contained' : 'outlined'}
        >
          Ventas
        </Button>
      </Box>
    </Box>
  )
}

export default Header

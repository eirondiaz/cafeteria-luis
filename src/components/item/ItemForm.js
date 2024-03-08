import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const ItemForm = ({ element = {}, isEditing = false }) => {
  const [data, setData] = useState(element)

  const handleChange = (e) => {
    const { name, value } = e.target

    setData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }))
  }

  const onSubmit = () => {
    console.log(data)
  }

  return (
    <Box>
      <Typography variant="h5">{`${
        isEditing ? 'Editar' : 'Agregar'
      } Articulos`}</Typography>
      <Box sx={{ mt: 4 }}>
        <TextField
          required
          sx={{ width: '100%' }}
          name="description"
          label="Descripcion"
          variant="outlined"
          defaultValue={data?.description || ''}
          onChange={handleChange}
        />
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Marca</InputLabel>
          <Select
            required
            defaultValue={data?.brand?.id || ''}
            name={'brand'}
            label="Marca"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          sx={{ width: '100%', mt: 2 }}
          name="cost"
          label="Costo"
          type={'number'}
          variant="outlined"
          defaultValue={data?.cost || ''}
          onChange={handleChange}
        />
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Proveedor</InputLabel>
          <Select
            required
            defaultValue={data?.supplier?.id || ''}
            name={'supplier'}
            label="Proveedor"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          sx={{ width: '100%', mt: 2 }}
          name="stock"
          type={'number'}
          label="Existencia"
          variant="outlined"
          defaultValue={data?.stock || ''}
          onChange={handleChange}
        />
      </Box>
      <Button onClick={onSubmit} sx={{ mt: 4 }} variant="contained">
        {isEditing ? 'Editar' : 'Agregar'}
      </Button>
    </Box>
  )
}

export default ItemForm

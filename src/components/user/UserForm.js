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

const UserForm = ({ element = {}, isEditing = false }) => {
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
      } Usuario`}</Typography>
      <Box sx={{ mt: 4 }}>
        <TextField
          required
          sx={{ width: '100%' }}
          name="name"
          label="Nombre"
          variant="outlined"
          defaultValue={data?.name || ''}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ width: '100%', mt: 2 }}
          name="cedula"
          label="Cedula"
          variant="outlined"
          defaultValue={data?.cedula || ''}
          onChange={handleChange}
        />
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo de usuario</InputLabel>
          <Select
            required
            defaultValue={data?.userType?.id || ''}
            name={'userType'}
            label="Tipo de usuario"
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
          name="creditLimit"
          label="Limite de credito"
          variant="outlined"
          defaultValue={data?.creditLimit || ''}
          onChange={handleChange}
        />
      </Box>
      <Button onClick={onSubmit} sx={{ mt: 4 }} variant="contained">
        {isEditing ? 'Editar' : 'Agregar'}
      </Button>
    </Box>
  )
}

export default UserForm

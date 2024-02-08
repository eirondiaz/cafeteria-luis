import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const CafeteriaForm = ({ element = {}, isEditing = false }) => {
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
      } Cafeteria`}</Typography>
      <Box sx={{ mt: 4 }}>
        <TextField
          required
          sx={{ width: '100%' }}
          name="description"
          label="Descripción"
          variant="outlined"
          defaultValue={data?.description || ''}
          onChange={handleChange}
        />
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Campus</InputLabel>
          <Select
            required
            defaultValue={data?.campus || ''}
            name={'campus'}
            label="Age"
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
          label="Encargado"
          variant="outlined"
          name="encargado"
          defaultValue={data?.encargado || ''}
          onChange={handleChange}
        />
      </Box>
      <Button onClick={onSubmit} sx={{ mt: 4 }} variant="contained">
        {isEditing ? 'Editar' : 'Agregar'}
      </Button>
    </Box>
  )
}

export default CafeteriaForm

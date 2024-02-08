import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SupplierForm = ({ element = {}, isEditing = false }) => {
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
      } Suplidor`}</Typography>
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
      </Box>
      <Button onClick={onSubmit} sx={{ mt: 4 }} variant="contained">
        {isEditing ? 'Editar' : 'Agregar'}
      </Button>
    </Box>
  )
}

export default SupplierForm

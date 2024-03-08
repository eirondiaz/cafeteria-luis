import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const EmployeeForm = ({ element = {}, isEditing = false }) => {
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
      } Empleado`}</Typography>
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
          type={'number'}
          label="Cedula"
          variant="outlined"
          defaultValue={data?.cedula || ''}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ width: '100%', mt: 2 }}
          name="workShift"
          label="Tanda Labor"
          variant="outlined"
          defaultValue={data?.workShift || ''}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ width: '100%', mt: 2 }}
          name="commisionPercentage"
          type={'number'}
          label="Porciento Comision"
          variant="outlined"
          defaultValue={data?.commisionPercentage || ''}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ width: '100%', mt: 2 }}
          name="admissionDate"
          //label="Fecha Admision"
          type={'date'}
          variant="outlined"
          defaultValue={data?.admissionDate || ''}
          onChange={handleChange}
        />
      </Box>
      <Button onClick={onSubmit} sx={{ mt: 4 }} variant="contained">
        {isEditing ? 'Editar' : 'Agregar'}
      </Button>
    </Box>
  )
}

export default EmployeeForm

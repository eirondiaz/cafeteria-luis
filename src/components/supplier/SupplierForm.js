import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const SupplierForm = ({
  element = {},
  isEditing = false,
  setIsEditing,
  setRefresh,
  setOpen,
}) => {
  const [data, setData] = useState(element)

  const handleChange = (e) => {
    const { name, value } = e.target

    setData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }))
  }

  const onSubmit = async () => {
    isEditing ? update() : create()
  }

  const create = async () => {
    try {
      await axios.post(
        'https://open-source-cafeteria-api-luis.onrender.com/api/suppliers',
        data
      )
      setRefresh((prevVal) => !prevVal)
      setOpen(false)
    } catch (error) {
      console.log(error.stack)
    } finally {
      setIsEditing(false)
      //setIsLoading(false)
    }
  }

  const update = async () => {
    try {
      await axios.put(
        `https://open-source-cafeteria-api-luis.onrender.com/api/suppliers/${data.id}`,
        data
      )
      setRefresh((prevVal) => !prevVal)
      setOpen(false)
    } catch (error) {
      console.log(error)
    } finally {
      setIsEditing(false)
      //setIsLoading(false)
    }
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
          name="comercialName"
          label="Nombre Comercial"
          variant="outlined"
          defaultValue={data?.comercialName || ''}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ width: '100%', mt: 2 }}
          name="rnc"
          label="RNC"
          variant="outlined"
          defaultValue={data?.rnc || ''}
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

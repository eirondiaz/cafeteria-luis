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
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const UserForm = ({
  element = {},
  isEditing = false,
  setIsEditing,
  setRefresh,
  setOpen,
}) => {
  const [data, setData] = useState(element)
  const [userTypeList, setUserTypeList] = useState([])

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
        'https://open-source-cafeteria-api-luis.onrender.com/api/users',
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
        `https://open-source-cafeteria-api-luis.onrender.com/api/users/${data.id}`,
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

  const getUserTypes = async () => {
    try {
      const res = await axios.get(
        'https://open-source-cafeteria-api-luis.onrender.com/api/user-types'
      )
      setUserTypeList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserTypes()
  }, [])

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
            defaultValue={data?.userTypeId?.id || ''}
            name={'userTypeId'}
            label="Tipo de usuario"
            onChange={handleChange}
          >
            {userTypeList.map((x) => (
              <MenuItem key={x.id} value={x.id}>
                {x.description}
              </MenuItem>
            ))}
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

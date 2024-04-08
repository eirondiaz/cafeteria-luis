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
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const CafeteriaForm = ({
  element = {},
  isEditing = false,
  setIsEditing,
  setRefresh,
  setOpen,
}) => {
  const [data, setData] = useState(element)
  const [campusList, setCampusList] = useState([])

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

  const getCampus = async () => {
    try {
      const res = await axios.get(
        'https://open-source-cafeteria-api-luis.onrender.com/api/campus'
      )
      setCampusList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const create = async () => {
    try {
      await axios.post(
        'https://open-source-cafeteria-api-luis.onrender.com/api/cafeterias',
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

  const update = async () => {
    try {
      await axios.put(
        `https://open-source-cafeteria-api-luis.onrender.com/api/cafeterias/${data.id}`,
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

  useEffect(() => {
    getCampus()
  }, [])

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
            defaultValue={data?.campusId || ''}
            name={'campusId'}
            label="Campus"
            onChange={handleChange}
          >
            {campusList.map((x) => (
              <MenuItem key={x.id} value={x.Id}>
                {x.description}
              </MenuItem>
            ))}
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

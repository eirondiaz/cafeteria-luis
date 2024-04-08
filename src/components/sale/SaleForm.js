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

const SaleForm = ({
  element = {},
  isEditing = false,
  setIsEditing,
  setRefresh,
  setOpen,
}) => {
  const [data, setData] = useState(element)
  const [employeeList, setEmployeeList] = useState([])
  const [userList, setUserList] = useState([])
  const [itemList, setItemList] = useState([])

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
        'https://open-source-cafeteria-api-luis.onrender.com/api/sales',
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
        `https://open-source-cafeteria-api-luis.onrender.com/api/sales/${data.id}`,
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

  const getUsers = async () => {
    try {
      const res = await axios.get(
        'https://open-source-cafeteria-api-luis.onrender.com/api/users'
      )
      setUserList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getItems = async () => {
    try {
      const res = await axios.get(
        'https://open-source-cafeteria-api-luis.onrender.com/api/items'
      )
      setItemList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getEmployees = async () => {
    try {
      const res = await axios.get(
        'https://open-source-cafeteria-api-luis.onrender.com/api/employees'
      )
      setEmployeeList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
    getItems()
    getEmployees()
  }, [])

  return (
    <Box>
      <Typography variant="h5">{`${
        isEditing ? 'Editar' : 'Agregar'
      } Ventas`}</Typography>
      <Box sx={{ mt: 4 }}>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Empleado</InputLabel>
          <Select
            required
            defaultValue={data?.employeeId?.id || ''}
            name={'employeeId'}
            label="Empleado"
            onChange={handleChange}
          >
            {employeeList.map((x) => (
              <MenuItem key={x.id} value={x.id}>
                {x.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Articulo</InputLabel>
          <Select
            required
            defaultValue={data?.itemId?.id || ''}
            name={'itemId'}
            label="Articulo"
            onChange={handleChange}
          >
            {itemList.map((x) => (
              <MenuItem key={x.id} value={x.id}>
                {x.description}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Usuario</InputLabel>
          <Select
            required
            defaultValue={data?.userId?.id || ''}
            name={'userId'}
            label="Usuario"
            onChange={handleChange}
          >
            {userList.map((x) => (
              <MenuItem key={x.id} value={x.id}>
                {x.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          sx={{ width: '100%', mt: 2 }}
          name="cost"
          label="Monto Articulo"
          type={'number'}
          variant="outlined"
          defaultValue={data?.cost || ''}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ width: '100%', mt: 2 }}
          name="stock"
          type={'number'}
          label="Unidades Vendidas"
          variant="outlined"
          defaultValue={data?.units || ''}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ width: '100%', mt: 2 }}
          name="comment"
          label="Comentarios"
          variant="outlined"
          defaultValue={data?.comment || ''}
          onChange={handleChange}
        />
      </Box>
      <Button onClick={onSubmit} sx={{ mt: 4 }} variant="contained">
        {isEditing ? 'Editar' : 'Agregar'}
      </Button>
    </Box>
  )
}

export default SaleForm

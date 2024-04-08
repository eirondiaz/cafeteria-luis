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

const ItemForm = ({
  element = {},
  isEditing = false,
  setIsEditing,
  setRefresh,
  setOpen,
}) => {
  const [data, setData] = useState(element)
  const [brandList, setBrandList] = useState([])
  const [supplierList, setSupplierList] = useState([])

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
        'https://open-source-cafeteria-api-luis.onrender.com/api/items',
        data
      )
      setRefresh((prevVal) => !prevVal)
      setOpen(false)
    } catch (error) {
      console.log(error)
    } finally {
      //setIsEditing(false)
      //setIsLoading(false)
    }
  }

  const update = async () => {
    try {
      await axios.put(
        `https://open-source-cafeteria-api-luis.onrender.com/api/items/${data.id}`,
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

  const getBrands = async () => {
    try {
      const res = await axios.get(
        'https://open-source-cafeteria-api-luis.onrender.com/api/brands'
      )
      setBrandList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getSuppliers = async () => {
    try {
      const res = await axios.get(
        'https://open-source-cafeteria-api-luis.onrender.com/api/suppliers'
      )
      setSupplierList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBrands()
    getSuppliers()
  }, [])

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
            defaultValue={data?.brandId?.id || ''}
            name={'brandId'}
            label="Marca"
            onChange={handleChange}
          >
            {brandList.map((x) => (
              <MenuItem key={x.id} value={x.id}>
                {x.description}
              </MenuItem>
            ))}
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
            defaultValue={data?.supplierId?.id || ''}
            name={'supplierId'}
            label="Proveedor"
            onChange={handleChange}
          >
            {supplierList.map((x) => (
              <MenuItem key={x.id} value={x.id}>
                {x.comercialName}
              </MenuItem>
            ))}
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

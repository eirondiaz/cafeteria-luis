import { Add } from '@mui/icons-material'
import { Box, IconButton, Modal, Tooltip, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { style } from '../../shared/ModalStyle'
import CafeteriaForm from './CafeteriaForm'
import CafeteriaTable from './CafeteriaTable'

const CafeteriaScreen = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setEditing] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const getData = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(
        'https://open-source-cafeteria-api-luis.onrender.com/api/cafeterias'
      )
      setData(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [refresh])

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">Gestión de cafetería</Typography>
        <Tooltip title="Agregar">
          <IconButton onClick={handleOpen}>
            <Add color="primary" />
          </IconButton>
        </Tooltip>
      </Box>

      <CafeteriaTable
        data={data}
        setRefresh={setRefresh}
        isEditing={isEditing}
        setEditing={setEditing}
        setOpenEditForm={setOpen}
        openEditFrom={open}
      />

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CafeteriaForm />
        </Box>
      </Modal> */}
    </Box>
  )
}

export default CafeteriaScreen

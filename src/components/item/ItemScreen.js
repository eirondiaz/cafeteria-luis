import { Add } from '@mui/icons-material'
import { Box, IconButton, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { style } from '../../shared/ModalStyle'
import ItemForm from './ItemForm'
import ItemTable from './ItemTable'

const ItemScreen = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">Gestión de usuarios</Typography>
        <Tooltip title="Agregar">
          <IconButton onClick={handleOpen}>
            <Add color="primary" />
          </IconButton>
        </Tooltip>
      </Box>

      <ItemTable />

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ItemForm />
        </Box>
      </Modal>
    </Box>
  )
}

export default ItemScreen

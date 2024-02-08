import { Add } from '@mui/icons-material'
import { Box, IconButton, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { style } from '../../shared/ModalStyle'
import UserTypeForm from './UserTypeForm'
import UserTypeTable from './UserTypeTable'

const UserTypeScreen = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">Gestión de tipos de usuarios</Typography>
        <Tooltip title="Agregar">
          <IconButton onClick={handleOpen}>
            <Add color="primary" />
          </IconButton>
        </Tooltip>
      </Box>

      <UserTypeTable />

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <UserTypeForm />
        </Box>
      </Modal>
    </Box>
  )
}

export default UserTypeScreen

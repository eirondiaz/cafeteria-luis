import { Add } from '@mui/icons-material'
import { Box, IconButton, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { style } from '../../shared/ModalStyle'
import CampusForm from './CampusForm'
import CampusTable from './CampusTable'

const CampusScreen = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">Gestión de campus</Typography>
        <Tooltip title="Agregar">
          <IconButton onClick={handleOpen}>
            <Add color="primary" />
          </IconButton>
        </Tooltip>
      </Box>

      <CampusTable />

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <CampusForm />
        </Box>
      </Modal>
    </Box>
  )
}

export default CampusScreen

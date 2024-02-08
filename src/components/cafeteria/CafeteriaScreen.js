import { Add } from '@mui/icons-material'
import { Box, IconButton, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { style } from '../../shared/ModalStyle'
import CafeteriaForm from './CafeteriaForm'
import CafeteriaTable from './CafeteriaTable'

const CafeteriaScreen = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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

      <CafeteriaTable />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CafeteriaForm />
        </Box>
      </Modal>
    </Box>
  )
}

export default CafeteriaScreen

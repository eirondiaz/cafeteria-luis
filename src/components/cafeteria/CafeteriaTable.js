import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { DeleteOutline, EditOutlined } from '@mui/icons-material'
import CafeteriaForm from './CafeteriaForm'
import { style } from '../../shared/ModalStyle'

const rows = [
  {
    description: 'Frozen yoghurt',
    campus: 10,
    encargado: 'manuel',
  },
  {
    description: 'Ice cream sandwich',
    campus: 20,
    encargado: 'miguel',
  },
  { description: 'Eclair', campus: 30, encargado: 'juan' },
  { description: 'Cupcake', campus: 20, encargado: 'carlos' },
  { description: 'Gingerbread', campus: 10, encargado: 'eiron' },
]

const CafeteriaTable = () => {
  const [open, setOpen] = useState(false)
  const [openEditFrom, setOpenEditForm] = useState(false)
  const [selected, setSelected] = useState({})
  const [isEditing, setEditing] = useState(false)

  const handleClickOpen = (row) => {
    setSelected(row)
    setOpen(true)
  }

  const handleClickOpenEditForm = (row) => {
    setSelected(row)
    setOpenEditForm(true)
    setEditing(true)
  }

  const handleClose = () => {
    setOpen(false)
    setOpenEditForm(false)
    setEditing(false)
    setSelected({})
  }

  return (
    <Box>
      <TableContainer sx={{ mt: 6 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Descripción</TableCell>
              <TableCell align="right">Campus</TableCell>
              <TableCell align="right">Encargado</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.description}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.description}
                </TableCell>
                <TableCell align="right">{row.campus}</TableCell>
                <TableCell align="right">{row.encargado}</TableCell>
                <TableCell align="right">
                  <>
                    <Tooltip title={'Editar'}>
                      <IconButton
                        onClick={() => {
                          handleClickOpenEditForm(row)
                        }}
                      >
                        <EditOutlined color="primary" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={'Eliminar'}>
                      <IconButton
                        onClick={() => {
                          handleClickOpen(row)
                        }}
                      >
                        <DeleteOutline color="error" />
                      </IconButton>
                    </Tooltip>
                  </>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={openEditFrom} onClose={handleClose}>
        <Box sx={style}>
          <CafeteriaForm isEditing={isEditing} element={selected} />
        </Box>
      </Modal>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Estás seguro que deseas eliminar "${selected?.description}"?`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default CafeteriaTable

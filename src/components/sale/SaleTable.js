import { DeleteOutline, EditOutlined } from '@mui/icons-material'
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
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { style } from '../../shared/ModalStyle'
import SaleForm from './SaleForm'

const rows = [
  {
    description: 'Frozen yoghurt',
    cost: '20',
    brand: { description: 'Crisol' },
    supplier: { commercialName: 'Cliente' },
    stock: '20',
  },
  {
    description: 'Frozen yoghurt',
    cost: '20',
    brand: { description: 'La Famosa' },
    supplier: { commercialName: 'Cliente' },
    stock: '20',
  },
  {
    description: 'Frozen yoghurt',
    cost: '20',
    brand: { description: 'Induveca' },
    supplier: { commercialName: 'Cliente' },
    stock: '20',
  },
  {
    description: 'Frozen yoghurt',
    cost: '20',
    brand: { description: 'Maggi' },
    supplier: { commercialName: 'Cliente' },
    stock: '20',
  },
  {
    description: 'Frozen yoghurt',
    cost: '20',
    brand: { description: 'Goya' },
    supplier: { commercialName: 'Cliente' },
    stock: '20',
  },
]

const SaleTable = ({
  data,
  setRefresh,
  isEditing,
  setEditing,
  setOpenEditForm,
  openEditFrom,
}) => {
  const [open, setOpen] = useState(false)
  // const [openEditFrom, setOpenEditForm] = useState(false)
  const [selected, setSelected] = useState({})
  // const [isEditing, setEditing] = useState(false)

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

  const onDelete = async () => {
    try {
      await axios.delete(
        `https://open-source-cafeteria-api-luis.onrender.com/api/sales/${selected.id}`
      )
      setRefresh((prevVal) => !prevVal)
    } catch (error) {
      console.log(error)
    } finally {
      handleClose()
    }
  }

  return (
    <Box>
      <TableContainer sx={{ mt: 6 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No. Factura</TableCell>
              <TableCell>Empleado</TableCell>
              <TableCell>Articulo</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Fecha venta</TableCell>
              <TableCell>Monto articulo</TableCell>
              <TableCell>Unidades vendidas</TableCell>
              <TableCell>Comentario</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.employeeId.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.itemId.description}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.userId.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.createdAt}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.itemId?.cost}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.units}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.comment}
                </TableCell>
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
          <SaleForm
            setRefresh={setRefresh}
            setIsEditing={setEditing}
            isEditing={isEditing}
            setOpen={setOpenEditForm}
            element={selected}
          />
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
          <Button onClick={onDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default SaleTable
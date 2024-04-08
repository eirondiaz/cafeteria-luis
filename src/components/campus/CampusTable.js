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
import TestComp from './CampusForm'

const rows = [
  {
    description: 'Frozen yoghurt',
  },
  {
    description: 'Ice cream sandwich',
  },
  { description: 'Eclair' },
  { description: 'Cupcake' },
  { description: 'Gingerbread' },
]

const CampusTable = ({
  data,
  setRefresh,
  isEditing,
  setEditing,
  setOpenEditForm,
  openEditFrom,
}) => {
  const [open, setOpen] = useState(false)
  //const [openEditFrom, setOpenEditForm] = useState(false)
  const [selected, setSelected] = useState({})
  //const [isEditing, setEditing] = useState(false)

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
        `https://open-source-cafeteria-api-luis.onrender.com/api/campus/${selected.id}`
      )
      setRefresh((prevVal) => !prevVal)
    } catch (error) {
      console.log(error)
    } finally {
      handleClose()
    }
  }

  return (
    <>
      <Modal open={openEditFrom} onClose={handleClose}>
        <Box sx={style}>
          <TestComp
            setRefresh={setRefresh}
            setIsEditing={setEditing}
            isEditing={isEditing}
            setOpen={setOpenEditForm}
            element={selected}
          />
        </Box>
      </Modal>
      <Box>
        <TableContainer sx={{ mt: 6 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Descripción</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.description}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.description}
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
    </>
  )
}

export default CampusTable

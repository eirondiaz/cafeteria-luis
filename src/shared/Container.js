import { Box } from '@mui/system'
import React from 'react'
import CafeteriaScreen from '../components/cafeteria/CafeteriaScreen'
import CampusScreen from '../components/campus/CampusScreen'
import SupplierScreen from '../components/supplier/SupplierScreen'
import UserTypeScreen from '../components/user-type/UserTypeScreen'

const OUTLET = {
  cafeteria: <CafeteriaScreen />,
  campus: <CampusScreen />,
  supplier: <SupplierScreen />,
  userType: <UserTypeScreen />,
}

const Container = ({ option }) => {
  return <Box sx={{ padding: 10 }}>{OUTLET[option]}</Box>
}

export default Container

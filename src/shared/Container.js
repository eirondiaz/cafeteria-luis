import { Box } from '@mui/system'
import React from 'react'
import BrandScreen from '../components/brand/BrandScreen'
import CafeteriaScreen from '../components/cafeteria/CafeteriaScreen'
import CampusScreen from '../components/campus/CampusScreen'
import EmployeeScreen from '../components/employee/EmployeeScreen'
import ItemScreen from '../components/item/ItemScreen'
import SupplierScreen from '../components/supplier/SupplierScreen'
import UserTypeScreen from '../components/user-type/UserTypeScreen'
import UserScreen from '../components/user/UserScreen'

const OUTLET = {
  cafeteria: <CafeteriaScreen />,
  campus: <CampusScreen />,
  supplier: <SupplierScreen />,
  userType: <UserTypeScreen />,
  user: <UserScreen />,
  brand: <BrandScreen />,
  item: <ItemScreen />,
  employee: <EmployeeScreen />,
}

const Container = ({ option }) => {
  return <Box sx={{ padding: 10 }}>{OUTLET[option]}</Box>
}

export default Container

import { Box } from '@mui/material'
import React, { useState } from 'react'
import Container from './Container'
import Header from './Header'

const Layout = () => {
  const [option, setOption] = useState('cafeteria')

  return (
    <Box>
      <Header option={option} setOption={setOption} />
      <Container option={option} />
    </Box>
  )
}

export default Layout

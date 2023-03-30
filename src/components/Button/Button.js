import React, { Children } from 'react'
import { Button as MuiButton } from '@mui/material'
const Button = (props) => {
    const {children,...others}=props;
  return <MuiButton {...others}>
    {children}
  </MuiButton>
}

export default Button

import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

function PrivateRouteLogin({isLogged}) {
  return isLogged ? <Outlet /> : <Navigate to='/login-first' />    
}

export default PrivateRouteLogin
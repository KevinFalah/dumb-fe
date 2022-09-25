import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'

function layoutAdmin(props) {
  return (
    <>
        <NavbarAdmin />
        {props.children}
    </>
  )
}

export default layoutAdmin
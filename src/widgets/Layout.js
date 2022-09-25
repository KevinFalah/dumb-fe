import React from 'react'
import Navbar from '../components/Navbar'

function Layout(props) {
  return (
    <>
        <Navbar />
        {props.children}
    </>
  )
}

export default Layout
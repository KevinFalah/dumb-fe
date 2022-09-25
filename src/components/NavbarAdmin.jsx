import Logo from "../Images/logo.png";
import "../App.css";
import React, { useState, useContext } from "react";
import ModalRegister from "./auth/ModalRegister";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import userProfile from "../Images/profil.jpg";
import { Dropdown } from "react-bootstrap";
import {FaUser, FaMoneyCheckAlt, FaSignOutAlt, FaVideo} from 'react-icons/fa'
import {UserContext} from '../context/UserContext'


function NavbarAdmin() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [state, dispatch] = useContext(UserContext)
  const user = localStorage.getItem('token')

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/')
  }

  useEffect(() => {
    if (user){
      setIsLogin(true)
    } else setIsLogin(false)
  }, [state, handleLogout]);


  return (
    <nav className="navbar navbar-expand-lg navbarshad sticky-top bg-dark">
      <div className="container-fluid ">
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarUl">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tvshows" className="nav-link text-light">
                Tv Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/movies">
                Movies
              </Link>
            </li>
          </ul> */}
          <div className="flex-grow-1 d-none d-sm-block">
            <Link to='/'>
              <img src={Logo} alt="Dumbflix" />
            </Link>
          </div>
          <div>
            {isLogin ? (
              <Dropdown>
                <Button className="bg-transparent border-0" as={Link} to='/admin'></Button>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  <img src={userProfile} width={40} height={40} style={{borderRadius: "100%", objectFit: "cover"}} alt="user" />
                </Dropdown.Toggle>
              
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item as={Link} to='/list-film'>
                   <FaVideo className="text-danger ms-2"/> Film
                  </Dropdown.Item>
                  <Dropdown.Divider className="bg-light dropDivid"  />
                  <Dropdown.Item href="#" onClick={handleLogout}>
                  <FaSignOutAlt className="text-danger ms-2" />   Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
                
              </Dropdown>
            ) : (
              <Button
                variant="primary"
                className="btn bg-white text-danger fw-bold border-0 btn-regis py-1 me-3"
                onClick={handleShow}
              >
                SIGN IN
              </Button>
            )}
            <ModalRegister handleClose={handleClose} show={show} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
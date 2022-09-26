import React from "react"
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <NavLink className="navbar-brand" to="/" exact>
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{" "}
            React Bootstrap
          </NavLink>

          {/* <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{' '}
            React Bootstrap
          </Navbar.Brand> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">หน้าหลัก</Nav.Link> */}
              {/* <Nav.Link href="#link">เกี่ยวกับ</Nav.Link> */}

              <NavLink to="/" className="nav-link" exact activeClassName="active">
                หน้าหลัก
              </NavLink>

              <NavLink to="/about" className="nav-link" exact activeClassName="active">
                เกี่ยวกับเรา
              </NavLink>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar

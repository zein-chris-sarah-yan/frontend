import React from "react";
import { Navbar } from "react-bootstrap";
import Coffee from "../assets/logos/logo-main.svg";
import { NavLink } from "react-router-dom";
import { Modal, Container, Row, Col } from "react-bootstrap"
import { FormikForm } from "../components/Login"
import modal from "../assets/images/modal.jpg"


const style = {
  navStyle: {
    backgroundColor: "#f5f1e8"
  },
  justify: {
    display: "flex",
    justifyContent: "space-around"
  },

  logo: {
    margin: "0px auto"
  },

  link: {
    color: "#4C3A32",
    fontSize: "24px"
  },

  specialLink: {
    backgroundColor: "#4C3A32",
    color: "#f5f1e8",
    fontSize: "24px",
    padding: "10px"
  }
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lgshow: false, 
    }

  }

  handleClose = () => {
    this.setState({ lgshow: false })
  }

  handleShow = () => {
    this.setState({ lgshow:true })
  }
  render() {
    return (
      <Navbar style={style.navStyle} collapseOnSelect sty>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={style.justify} id="responsive-navbar-nav">
          <NavLink to="/" style={style.link}>
            Home
          </NavLink>
          <NavLink to="/search" style={style.link}>
            Search
          </NavLink>
          <Navbar.Brand>
            <img
              style={style.logo}
              alt=""
              src={Coffee}
              width="300"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <NavLink onClick={this.handleShow} style={style.link}>

            Login
          </NavLink>



          <NavLink to="/register" style={style.specialLink}>
            Register
          </NavLink>
        </Navbar.Collapse>
        <Modal 
        size='lg'
        show={this.state.lgshow} 
        onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container> 
              <Row>
              <Col xs={12} md={7}>
                 <img src={modal} alt="modal" width="400"  />
                </Col>
                <Col xs={12} md={4}>
                  <FormikForm />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <NavLink onClick={this.handleClose}>
            close
            </NavLink>
          </Modal.Footer>
        </Modal>
      </Navbar>
    );
  }
}

export default Navigation;

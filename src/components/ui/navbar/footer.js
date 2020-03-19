import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'





const Footer = () => {
    return(
      
        <Navbar fixed="bottom" bg="dark" expand="lg" variant="dark" className="fixed-bottom mb-0">
            <Navbar.Brand href="#home">React Webinar by Ironhack 2020</Navbar.Brand>
            <Navbar.Toggle />
        
            <Navbar.Text className="ml-auto">
            Exercise developed by: <a href="#login">Fernando Marín Sánchez</a>
            </Navbar.Text>
        
      </Navbar>
        
    )
}

export default Footer
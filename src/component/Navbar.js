import React from 'react'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    Button
} from 'reactstrap';

import logo from '../images/logo.jpg';
  
function App() {
  
    // Collapse isOpen State
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
        <div className="header">
            <Navbar fixed="top" expand="md" className="fixed-navbar">
                <NavbarBrand href="/"><img src={logo} alt="Logo" /></NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#" className="active">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Community</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Ambassadors</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact Us</NavLink>
                        </NavItem>                                                                        
                    </Nav>
                </Collapse>
                <Nav className="mr-auto right-navbar align-items-center" navbar>
                    <NavItem>
                        <NavLink href="#">Sign Up</NavLink>
                    </NavItem> 
                    <NavItem>
                        <Button color="primary" className="signin-button"> Sign In</Button>
                    </NavItem>                                        
                </Nav>
            </Navbar>
        </div>
    );
}
  
export default App;
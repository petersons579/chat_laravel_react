import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

function Header() {

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="#home">Integração com Laravel Echo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Navbar>

                </div>
            </div>
        </div>
    );

}

export default Header;
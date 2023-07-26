import {Container, Navbar } from "react-bootstrap";

function Header() {
    return ( 
        <Navbar>
            <Container>
                <Navbar.Brand className="fs-6 d-lg-none d-block"> BOUNTY<span className="red">HUNTER</span> </Navbar.Brand>
                <Navbar.Brand className="fs-2 d-lg-block d-none"> BOUNTY<span className="red">HUNTER</span> </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="flex-grow-0">
                    <button className="butn transparent-btn  ps-3 pe-3 pt-2 pb-2 fs-6">Sign up</button>
                    <button className="butn  ps-3 pe-3 pt-2 pb-2 fs-6">Log in</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}

export default Header;
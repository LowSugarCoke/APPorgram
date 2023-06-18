import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNarbar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">AP程式</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">首頁</Nav.Link>
                        <Nav.Link href="#news">最新消息</Nav.Link>
                        <Nav.Link href="#about">關於我們</Nav.Link>
                        <Nav.Link href="#class">課程介紹</Nav.Link>
                        <Nav.Link href="#contact">聯絡我們</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNarbar;

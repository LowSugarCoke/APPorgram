import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './NavBar.module.css'; // 請根據你的檔案結構調整路徑

const NavBar = () => {
    return (
        <Navbar className={styles.navbar} expand="lg">
            <Navbar.Brand className={styles.brand} href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
                <Nav>
                    <Nav.Link className={styles.navLink} href="#home">首頁</Nav.Link>
                    <Nav.Link className={styles.navLink} href="#news">最新消息</Nav.Link>
                    <Nav.Link className={styles.navLink} href="#about">關於我們</Nav.Link>
                    <Nav.Link className={styles.navLink} href="#courses">課程介紹</Nav.Link>
                    <Nav.Link className={styles.navLink} href="#contact">聯絡我們</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;

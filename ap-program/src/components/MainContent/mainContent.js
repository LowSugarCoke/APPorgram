import React from 'react';
import Banner from './Banner';
import MainCard from './MainCard';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './MainContent.module.css';

function MainContent() {
    return (
        <Container fluid className={styles.mainContainer}>
            <Row className={styles.bannerRow}>
                <Col>
                    <Banner></Banner>
                </Col>
            </Row>
            <Row className={styles.cardRow}>
                <Col className={styles.cardCol}><MainCard></MainCard></Col>
                <Col className={styles.cardCol}><MainCard></MainCard></Col>
                <Col className={styles.cardCol}><MainCard></MainCard></Col>
            </Row>
        </Container >

    );
}

export default MainContent;

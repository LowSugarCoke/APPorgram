import { Container, Row, Col } from "react-bootstrap"
import MainCard from "./MainCard"
import MainBanner from "./MainBanner"
import styles from "./MainContent.module.css"


const MainContent = () => {
    return (
        <>
            <Container fluid className={styles.mainContainer}>
                <Row g={0} m={0} p={0} className={styles.bannerRow}>
                    <Col className={styles.bannerCol}>
                        <MainBanner />
                    </Col>

                </Row>

                <Row className={styles.mainCardRow}>
                    <Col className={styles.mainCardCol}>
                        <MainCard />
                    </Col>
                    <Col className={styles.mainCardCol} >
                        <MainCard />
                    </Col>
                    <Col className={styles.mainCardCol}>
                        <MainCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainContent
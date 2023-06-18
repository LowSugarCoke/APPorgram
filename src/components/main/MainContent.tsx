import { Container, Row, Col } from "react-bootstrap"
import MainCard from "./MainCard"
import MainBanner from "./MainBanner"
import styles from "./MainContent.module.css"

// 定義你的CardInfo接口
interface CardInfo {
    imgLink: string;
    title: string;
    content: string;
    link: string;
}

const MainContent = () => {
    // 定義你的卡片資料
    const cardData: CardInfo[] = [
        {
            imgLink: "../../../public/card-1.jpg",
            title: "APCS線上試聽課程開始報名了！",
            content: "APCS線上免費試聽課程： 時間： 2/13(日)13:30~16:30 上課方式：google meet 課程內容：主要會介紹APCS，並帶同學寫 3~4屆APCS第一題，歡迎想要考APCS卻不太了解的同學報名！ ~~~~~報名連結~~~~~",
            link: "/register"
        },
        {
            imgLink: "/card-2.jpg",
            title: "家教小團班開始招生拉~~",
            content: "歡迎直接打電話詢問，或者直接填寫報名表，由我們直接聯繫您！ Loading…",
            link: "/register"
        },
        {
            imgLink: "/card-3.jpg",
            title: "2021/11月APCS開始開始報名",
            content: "報名日程：*10月01日（五）起至 10月04日（一）止每日9:00-18:00，限高中（職）三年級生報名。*10月05日（二）起至 10月08日（五）止每日9:00-18:00，限高中（職）各年級生報名。*10月09日（六）起至 10月11日（一）止每日9:00-18:00，不限對象。",
            link: "/register"
        },
    ];

    return (
        <>
            <Container fluid className={styles.mainContainer}>
                <Row g={0} m={0} p={0} className={styles.bannerRow}>
                    <Col className={styles.bannerCol}>
                        <MainBanner />
                    </Col>
                </Row>
                <Row className={styles.mainCardRow}>
                    {cardData.map((data, index) => (
                        <Col className={styles.mainCardCol} key={index}>
                            <MainCard {...data} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default MainContent

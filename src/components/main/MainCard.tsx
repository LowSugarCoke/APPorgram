import { Card, Button } from 'react-bootstrap';
import styles from './MainCard.module.css';

interface Prop {
    imgLink?: string;
    title?: string;
    content?: string;
    link?: string;
}

const MainCard = ({ imgLink, title, content, link }: Prop) => {
    return (
        <Card className={styles.myCardStyle}>
            <Card.Header as='h3' className={styles.header}>
                <a href={link} >
                    <div
                        className={styles.imageContainer}
                        style={{ backgroundImage: `url(${imgLink})` }}
                    />
                    <span className={styles.title}>{title}</span>
                </a>
                <div className={styles.meta}>
                    <span >
                        <time dateTime="2022-01-30T11:21:17+08:00" itemProp="datePublished">2022-01-30</time>
                    </span>
                </div>
            </Card.Header>
            <Card.Body className={styles.body}>
                <Card.Text>
                    {content}
                </Card.Text>
            </Card.Body>
            <div className={styles.btnGrid}>
                <Button variant="primary" className={styles.button} href={link}>Read More</Button>
            </div>
        </Card>
    );
}

export default MainCard;

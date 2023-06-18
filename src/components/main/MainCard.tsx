import { Card, Button } from 'react-bootstrap';

const MainCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header as='h3'>
                <a href="https://branchprogramming.com/2022/01/30/apcs%e7%b7%9a%e4%b8%8a%e8%a9%a6%e8%81%bd%e8%aa%b2%e7%a8%8b%e9%96%8b%e5%a7%8b%e5%a0%b1%e5%90%8d%e4%ba%86%ef%bc%81/">APCS線上試聽課程開始報名了！</a>
                <div className="entry-meta">
                    <span className="posted-on">
                        <time className="entry-date published updated" dateTime="2022-01-30T11:21:17+08:00" itemProp="datePublished">2022-01-30</time>
                        <time className="updated" dateTime="2022-01-30T11:22:56+08:00" itemProp="dateModified">2022-01-30</time>
                    </span>
                    <span className="comment-box">
                        <a href="https://branchprogramming.com/2022/01/30/apcs%e7%b7%9a%e4%b8%8a%e8%a9%a6%e8%81%bd%e8%aa%b2%e7%a8%8b%e9%96%8b%e5%a7%8b%e5%a0%b1%e5%90%8d%e4%ba%86%ef%bc%81/#respond">No Comment</a>
                    </span>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    APCS線上免費試聽課程： 時間： 2/13(日)13:30~16:30 上課方式：google meet 課程內容：主要會介紹APCS，並帶同學寫 3~4屆APCS第一題，歡迎想要考APCS卻不太了解的同學報名！
                </Card.Text>
                <Button variant="primary" href="https://branchprogramming.com/2022/01/30/apcs%e7%b7%9a%e4%b8%8a%e8%a9%a6%e8%81%bd%e8%aa%b2%e7%a8%8b%e9%96%8b%e5%a7%8b%e5%a0%b1%e5%90%8d%e4%ba%86%ef%bc%81/">Read More</Button>
            </Card.Body>
        </Card>
    );
}

export default MainCard

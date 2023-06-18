import styles from "./MainBanner.module.css"
import { Button } from "react-bootstrap"

const MainBanner = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.bannerBackground}> </div>

                <div className={styles.content}>
                    <h1 className={styles.contentHeader}>AP程式-國高中生程式教育團隊</h1>
                    <p className={styles.contentContent}>
                        AP程式教育是一個專門為高中生設計程式課程的團隊。
                        我們是由一群年輕的資工、電機系學生、畢業生創立，秉持著熱忱以及充分的準備，照顧好每個上課的學生。
                    </p>

                    <Button variant="primary" className={styles.btn}>Learn more</Button>

                </div>
            </div>
        </>
    )
}

export default MainBanner
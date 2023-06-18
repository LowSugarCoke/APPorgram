import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.links}>
                    <a href="https://www.youtube.com">Youtube</a>
                    <a href="https://www.facebook.com">FB粉專</a>
                    <a href="https://www.example.com/blog">教學網誌</a>
                    <a href="https://www.example.com/contact">聯絡我們</a>
                </div>
                <p>AP程式版權所有 &copy; 2023</p>
            </div>
        </>
    );
}

export default Footer;

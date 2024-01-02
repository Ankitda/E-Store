import styles from "./Footer.module.css"

const Footer = () => {
    
    return (
        <footer>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-section"]}>
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className={styles["footer-section"]}>
                    <h3>Follow Us</h3>
                    <p>Facebook | Twitter | Instagram</p>
                </div>
                <div className={styles["footer-section"]}>
                    <h3>Address</h3>
                    <p>123 Street, City, Country</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
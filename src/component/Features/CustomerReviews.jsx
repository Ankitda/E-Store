import { reviews } from "../data"
import styles from "./CustomerReviews.module.css"

const CustomerReviews = () => {
    return (
        <div className={styles["review-container"]}>
            {reviews.map((review) => (
                <div className={styles["review"]} key={review.id}>
                    <img className={styles["customer-image"]} src={`${review.img}`} alt="Customer Image" />
                    <p>{review.description}</p>
                    <p>{review.rating}</p>
                </div>
            ))}
        </div>
    )
}

export default CustomerReviews
import { useLoaderData } from "react-router-dom";
import styles from "./ProductList.module.css"

const ProductList = () => {

    const productDetails = useLoaderData();

    return (
        <div className={styles["product-container"]}>
            {productDetails.map((item) => (
                <div className={`${styles["card"]}`} key={item.id}>
                    <img src={`${item.images[0]}`} alt="Product Image" />
                    <div className={styles["card-content"]}>
                        <div className={styles["product-name"]}>{item.title}</div>
                        <div className={styles["product-rating"]}>Rating: {`${item.rating}/5`}</div>
                        <div className={`${styles["product-usage"]} lh-base font-monospace`}><span className="fw-bolder">Description: </span> {item.description}</div>
                        <div className={styles["product-usage"]}><span className="fw-bolder">Price: </span>Rs {item.price}.00</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const products = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const productDetails = await response.json();
    return productDetails.products;
}

export default ProductList
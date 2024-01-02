import { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { SetIsFilled } from "../App";
import styles from "./ProductFeatures.module.css"

const ProductFeatures = () => {

    const { id } = useParams();
    const { setActive } = useContext(SetIsFilled)
    const data = useLoaderData();

    useEffect(() => {
        setActive(false);
    }, [id])


    return (

        <div className={styles["center"]}>
            {data.id && <div className={styles["product-details-container"]}>
                <div className={styles["product-image"]}>
                    <img src={data.images[0]} alt="Product Image" />
                </div>
                <div className={styles["product-details"]}>
                    <div class={styles["product-title"]}>{data.title}</div>
                    <div class={styles["product-info"]}><strong>Brand : </strong>{data.brand}</div>
                    <div class={styles["product-info"]}><strong>Category : </strong>{data.category}</div>
                    <div class={styles["product-info"]}>{data.description}</div>
                    <div class={styles["product-info"]}><strong>Discount : </strong>{data.discountPercentage}%</div>
                    <div class={styles["product-info"]}><strong>Rating : </strong>{data.rating}/5</div>
                    <div class={styles["product-price"]}><strong>Price : </strong>Rs {data.price}.00</div>
                </div>
            </div>}
            {data.message && <center>
                <p className="fs-3 font-monospace">{data.message}
                    <br />
                    Please enter the correct Product Id
                </p>
            </center>}
        </div>


    )
}

export const productInfo = async ({ params }) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${params.id}`);
        const productDetail = await response.json();
        return productDetail;
    } catch (error) {
        return error;
    }
}

export default ProductFeatures
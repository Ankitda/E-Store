import { useContext } from "react"
import { Link } from "react-router-dom"
import { SetIsFilled } from "../App" 
import styles from "./DropDown.module.css"

const DropDown = () => {

    const {setActive} = useContext(SetIsFilled);
    
    return (
        <div className={styles["dropdown"]}>
            <button className={styles["dropdown-button"]}>Features</button>
            <div className={styles["dropdown-content"]}>
                <Link to="products" onClick={() => setActive(false)}>Products</Link>
                <Link to="reviews" onClick={() => setActive(false)}>Reviews</Link>
            </div>
        </div>
    )
}

export default DropDown
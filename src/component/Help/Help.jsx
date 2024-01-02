import React from 'react'
import { orderProcess } from '../data'
import { Link, Outlet } from 'react-router-dom'
import styles from "./Help.module.css"

const Help = () => {
    return (
        <section className={styles["help"]}>
            <h2>FAQs - Frequently Asked Questions</h2>

            <h3>How do I place an order?</h3>
            <span className={styles['help-span']}>To place an order, follow these steps:</span>
            <ul className={styles['help-ul-list']}>
                {orderProcess.map((process, index) => (
                    <li className={styles['help-li-list']} key={index}>{`${index + 1} ➜ ${process}`}</li>
                ))}
            </ul>

            <h3>Can I modify or cancel my order?</h3>
            <p>Once an order is placed, modifications or cancellations may not be possible. Please contact our customer support for assistance.</p>

            <h3>What payment methods are accepted?</h3>
            <p>We accept various payment methods, including credit/debit cards, PayPal, and other secure payment gateways. You can find the complete list at the checkout page.</p>

            <div className={styles['help-button-container']}>
                <Link to={"contact"}><button type="button" className="btn btn-warning">Contact-us</button></Link>
            </div>

            <Outlet />
        </section>
    )
}

export default Help
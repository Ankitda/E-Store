import { Form, redirect } from "react-router-dom"
import styles from "./Contact.module.css"

const Contact = () => {

  return (
    <div className={styles["contact-form"]}>
        <h2>Contact Us</h2>
        <Form action="/help/contact" method="post">
            <div className={styles["form-group"]}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>

            <div className={styles["form-group"]}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div className={styles["form-group"]}>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <div className={styles["form-group"]}>
                <button>Submit</button>
            </div>
        </Form>
    </div>
  )
}

export const personData = async ({request}) => {
    const data = await request.formData();

    const dataFetched = {
        name : data.get("name"),
        email : data.get("email"),
        message : data.get("message")
    }
    
    return redirect("/home");
}

export default Contact
import * as React from "react"
import "../style/global.css"
import * as contactCardStyle from "../style/ContactCard.module.css"

const ContactCard = () => {
    return(
        <section className = {contactCardStyle.contactCard}>
            <h3 className="purpleText">Contact Us</h3>
            <p>E-mail: <a href="mailto: briefer@gmail.com">briefer@gmail.com</a></p>
        </section>
    )
}

export default ContactCard
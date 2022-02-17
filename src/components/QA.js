import * as React from "react"
import "../style/global.css"

const Qa = ({question, answer}) =>{
    return(
        <section>
            <h1 className = "darkBlueText">{question}</h1>
            <p className = "opaqueDarkBlueText">{answer}</p>
        </section>
    )
}

export default Qa;
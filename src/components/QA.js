import * as React from "react"
import "../style/global.css"

const Qa = ({question, answer, extras}) =>{
    return(
        <section>
            <h1 className = "purpleText">{question}</h1>
            <p className = "darkBlueText">{answer}</p>
            {extras}
        </section>
    )
}

export default Qa;
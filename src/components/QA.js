import * as React from "react"
import "../style/global.css"

const Qa = ({question, answer, extras}) =>{
    return(
        <section>
            <h1 className = "darkBlueText">{question}</h1>
            <p className = "opaquegreyText">{answer}</p>
            {extras}
        </section>
    )
}

export default Qa;
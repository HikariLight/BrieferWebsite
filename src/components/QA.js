import * as React from "react"
import "../style/global.css"

const Qa = (props) =>{
    return(
        <section>
            <h1 className = "purpleText">{props.question}</h1>
            <p className = "darkBlueText">{props.answer}</p>
            {props.extras}
        </section>
    )
}

export default Qa;
import * as React from "react"
import {questionStyle, answerStyle} from "../style/QA.module.css"

const Qa = ({question, answer}) =>{
    return(
        <section>
            <h1 className = {questionStyle}>{question}</h1>
            <p className = {answerStyle}>{answer}</p>
        </section>
    )
}

export default Qa;
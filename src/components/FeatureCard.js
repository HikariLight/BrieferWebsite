import * as React from "react"
import "../style/global.css"

const FeatureCard = ({imgLink, feature, featureText}) => {
    return(
        <section className = "featureCard">
            <img className = "logo" src={imgLink} alt="logo"></img>
            
            <article className = "description">
                <h3>{feature}</h3>
                <p>{featureText}</p>
            </article>
        </section>
    )
}

export default FeatureCard
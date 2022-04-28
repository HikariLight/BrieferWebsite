import * as React from "react"
import "../style/global.css"
import * as featureCardStyle from "../style/Features.module.css"

const FeatureCard = ({imgLink, feature, featureText}) => {
    return(
        <section className = {featureCardStyle.featureCard}>
            <div id= { featureCardStyle.featureLogoWrapper}>
                <img className = {featureCardStyle.featureLogo} src={imgLink} alt="Briefer logo"></img>
            </div>
            
            <article className = {featureCardStyle.featureDescription}>
                <h3 className="purpleText">{feature}</h3>
                <p>{featureText}</p>
            </article>
        </section>
    )
}

export default FeatureCard
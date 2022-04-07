import * as React from "react"
import { Link } from "gatsby"
import * as blogStyle from "../style/Blog.module.css"

const BlogPostCard = (props) =>{
    return(
        <section className = {blogStyle.blogCard}>
            <Link to ="/">{props.blogTitle}</Link>
            <h4>{props.blogSubTitle}</h4>
        </section>
    )
}

export default BlogPostCard
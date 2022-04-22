import * as React from "react"
import { Link } from "gatsby"
import * as blogStyle from "../style/Blog.module.css"

const BlogPostCard = (props) =>{
    return(
        <section className = {blogStyle.blogCard}>
            <Link to = {props.post.slug}><h1>{props.post.title}</h1></Link>
            <p>Posted on: {props.post.publishedAt}</p>
        </section>
    )
}

export default BlogPostCard
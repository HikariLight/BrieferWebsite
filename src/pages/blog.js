import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import BlogPostCard from "../components/BlogPostCard"
import * as blogStyle from "../style/Blog.module.css"
import "../style/global.css"

const Blog = () =>{
    return(
        
        <Layout>
            <Helmet>
                <title>Briefer | Blog</title>
            </Helmet>

        <main className = {blogStyle.blogMain} >
            <BlogPostCard blogTitle="This is working" blogSubTitle="For the best, I think"></BlogPostCard>
            <BlogPostCard blogTitle="This is working" blogSubTitle="For the best, I think"></BlogPostCard>
            <BlogPostCard blogTitle="This is working" blogSubTitle="For the best, I think"></BlogPostCard>
        </main>

        </Layout>
    )
}

export default Blog
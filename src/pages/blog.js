import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import BlogPostCard from "../components/BlogPostCard"
import * as blogStyle from "../style/Blog.module.css"
import "../style/global.css"
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {

    const data = useStaticQuery(graphql`
        query {
            allStrapiPost {
            edges {
                node {
                        id
                        title
                        slug
                        publishedAt
                    }
                }
            }
        }
    `);

    return (

        <Layout>
            <Helmet>
                <title>Briefer | Blog</title>
            </Helmet>

            <main className={blogStyle.blogMain} >

                {data.allStrapiPost.edges.map((post) => (
                        <BlogPostCard key = {post.node.id} post = {post.node}></BlogPostCard>
                ))}

            </main>

        </Layout>
    )
}

export default Blog
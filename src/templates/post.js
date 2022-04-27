import * as React from 'react';
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout';
import * as postStyle from "../style/BlogPost.module.css"

const Post = (props) =>{
    return(
        <Layout>
            <main className = {postStyle.blogPostMain}>
                <h1>{props.pageContext.title}</h1>
                <ReactMarkdown className = {postStyle.blogPostBody}>
                    {props.pageContext.body.data.body}
                </ReactMarkdown>
            </main>
        </Layout>
    )
}

export default Post;
import * as React from 'react';
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout';

const Post = (props) =>{
    return(
        <Layout>
            <main className='blogPostMain'>
                <h1>{props.pageContext.title}</h1>
                <ReactMarkdown>
                    {props.pageContext.body.data.body}
                </ReactMarkdown>
            </main>
        </Layout>
    )
}

export default Post;
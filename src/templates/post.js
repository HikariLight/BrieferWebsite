import * as React from 'react';
import Layout from '../components/Layout';

const Post = (props) =>{
    return(
        <Layout>
            <main className='blogPostMain'>
                <h1>{props.pageContext.title}</h1>
                <p>{props.pageContext.body.data.body}</p>
            </main>
        </Layout>
    )
}

export default Post;
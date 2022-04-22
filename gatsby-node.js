exports.createPages = ({ graphql, actions }) => {

    const { createPage } = actions

    return graphql(`
        query {
            allStrapiPost {
            edges {
                node {
                id
                title
                slug
                body {
                    data {
                    body
                    }
                }
                }
            }
            }
        }
    `).then(result => {
        if (result.errors) {
            throw result.errors
        }

        result.data.allStrapiPost.edges.forEach(post => {
            createPage({
                path: `blog/${post.node.slug}`,
                component: require.resolve("./src/templates/post.js"),
                context: {
                    title: post.node.title,
                    body: post.node.body
                },
            })
        })
    })
}
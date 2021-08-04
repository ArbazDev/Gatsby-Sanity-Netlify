// import artic from "../myapp/src/pages/article-details";
const path = require('path')


exports.createPages = async({graphql, actions}) =>{
  const results= await graphql(`
  query {
    allSanityPost {
      edges {
        node {
          slug {
            current
          }
        }
      }
    }
  }
  
  
  `
  )

  const pagin = results.data.allSanityPost.edges.map(({node}) =>node);
  pagin.forEach(pagi => {
    actions.createPage({
      path: '/article/' + pagi.slug.current,
      component:path.resolve('./src/pages/article-details.js'),
      context:{
        slug : pagi.slug.current,
      }
    })
  });
  
}


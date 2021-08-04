import * as React from "react";
import { graphql, Link } from "gatsby";
import "../components/header.css";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer"



export const query =
  graphql`
  query {
    allSanityPost {
      edges {
        node {
          title
          slug {
            current
          }
        }
      }
    }
  }     
  `

const article = ({ data }) => (
  <>
    <div>
      <h1>
        <Header></Header>
      </h1>
      <p>
        <Body></Body>
      </p>
    </div>
    <h1 className="p-10 text-2xl h-14"><b>List of Articles</b></h1>
    <section>
      {data.allSanityPost.edges.map(({ node: post }) => (
        <h2 className="h-16 m-7 rounded-md shadow-2xl p-3">{post.title} <Link to ={post.slug.current}><button className="p-1 bg-red-100 rounded-xl space-x-96 ml-14">Read More</button></Link></h2>
      ))}
    </section>
    <Footer></Footer>
    
  </>
)

export default article;




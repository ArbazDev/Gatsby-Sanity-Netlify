import React, { useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Bodyy from "../components/body";
import { graphql, StaticQuery } from "gatsby";
import { func, node, object } from "prop-types";
import { Children } from "react";



export const query = graphql`
query ($slug:String) {
    allSanityPost (filter: {slug: {current: {eq: $slug}}}) {
        edges {
          node {
            title
            body {
              children {
                text
              }
            }
          }
        }
      }
    }
    
  
`


export default ({ data }) => (
  <Layout>
    <Header></Header>
    <div>
      {data.allSanityPost.edges.map(({ node }) => (
        <div>
          <h1 className="text-center h-16 border-b-8 border-solid border-black p-3 text-3xl mt-10 text-opacity-20 font-bold bg-gray-100">{node.title}</h1>
          <p className="text-center m-10 text-2xl border-black border-2 h-96">{node.body[0].children[0].text}</p>
        </div>
      ))}
    </div>
  </Layout>
)
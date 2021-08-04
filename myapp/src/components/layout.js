/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Bodyy from "./body"
import "./layout.css"
import Cards from "./cards"

const Layout = ({ children }) => {
  return (
    <>
    <div>
      {/* <Header siteTitle={`Title`} /> */}
      {/* <Cards /> */}
      <main>{children}</main>
      {/* <footer /> */}
    </div>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout

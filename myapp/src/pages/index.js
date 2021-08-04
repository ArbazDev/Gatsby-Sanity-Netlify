import * as React from "react"
import { Link } from "@reach/router"

import Layout from "../components/layout"
import NewComponent from "../components/header"
import Bodyy from "../components/body"
import Seo from "../components/seo"
import Cards from "../components/cards"
import Map from "../components/map"
import Footer from "../components/footer"


const IndexPage = () => (
  <Layout>
    <NewComponent/>
    <Bodyy/>
    <Cards/>
    <Map/>
    <Footer/>
  </Layout>
)

export default IndexPage

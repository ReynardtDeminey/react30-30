import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info" bgColor={infoData.background_color}>
      <section className={infoStyles.info_blurb}>
        <h2>
          <div dangerouslySetInnerHTML={{__html: "This page was created using Gatsby and Forestry"}}></div>
          <div dangerouslySetInnerHTML={{__html: "To get in touch, contact me here:"}}></div>
        </h2>
        <ul>
          <li>
            <p>
              <a href="mailto:midstreamlearntocode@gmail.com">Email: midstreamlearntocode@gmail.com</a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://twitter.com/ReynardtDeminey">
                Twitter: @ReynardtDeminey
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://github.com/ReynardtDeminey">Github: ReynardtDeminey</a>
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
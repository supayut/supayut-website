import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'
import ContactInfo from "../components/ContactInfo"
import Article from "../components/Article"
import Hobby from "../components/hobby"

const linkStyle = {
  color: '#8BC34A',
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Container className="p-3 fill">
      <div className="base-content">
        <div className="display-1 container-header">
          <span className="gradient-custard">Supayut</span> <span className="color-pink">|</span> <span className="gradient-custard-reverse">Nookskill</span>
        </div>
        <div className="main-info">
          <div className="about-me-info rounded base-shadow">
            <h2>
              Hi, my name is <span className="color-custard">Nook</span>
            </h2>
            <h4>
              I'm a <span className="color-custard">Software Engineer</span> living in Bangkok, Thailand.
            </h4>
            <Hobby />
            <Article />
          </div>
          <div className="contact">
            <ContactInfo />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Supayut Raksuk</title>

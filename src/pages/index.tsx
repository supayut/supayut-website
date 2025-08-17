import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
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
          <span className="gradient-blue-pink">Supayut</span> 
          <span className="color-neon-yellow"> | </span> 
          <span className="gradient-pink-yellow">Nookskill</span>
        </div>
        <div className="main-info">
          <div className="contact mobile-order-first">
            <ContactInfo />
          </div>
          <div className="about-me-info glass-card">
            <h2>
              Hi, my name is <span className="color-neon-yellow">Nook</span> ✨
            </h2>
            <h4>
              I'm a <span className="color-neon-blue">Software Engineer</span> living in Bangkok, Thailand 🇹🇭
            </h4>
            <Hobby />
            <Article />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Supayut Raksuk</title>

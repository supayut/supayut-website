import * as React from "react"
import { EnvelopeAtFill, Github, Linkedin, Medium } from "react-bootstrap-icons"


export default function ContactInfo() {
  return (
    <div className="contact-info glass-card">
      <h2>
        <span className="gradient-blue-pink">Contact</span> 💬
      </h2>
      <ul>
        <li>
          <a href="mailto:nookskill@hotmail.com">
            <EnvelopeAtFill className="color-neon-yellow" />{` `}
            <span>Email</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/supayut-raksuk" target="_blank">
            <Linkedin className="color-neon-blue" />{` `}
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://medium.com/@nookskill" target="_blank">
            <Medium className="color-neon-green" />{` `}
            <span>Medium</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/supayut" target="_blank">
            <Github className="color-neon-pink" />{` `}
            <span>Github (supayut)</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/nookskill" target="_blank">
            <Github className="color-neon-green" />{` `}
            <span>Github (nookskill)</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

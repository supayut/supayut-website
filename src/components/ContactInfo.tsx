import * as React from "react"
import { EnvelopeAtFill, Github, Linkedin, Medium } from "react-bootstrap-icons"


export default function ContactInfo() {
  return (
    <div className="contact-info rounded base-shadow">
      <h2 className="">
        <span className="gradient-mint">Contact</span>
      </h2>
      <ul>
        <li>
          <a href="mailto:nookskill@hotmail.com"><EnvelopeAtFill/>{` `}Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/supayut-raksuk" target="_blank"><Linkedin/>{` `}Linkedin</a>
        </li>
        <li>
          <a href="https://medium.com/@nookskill" target="_blank"><Medium/>{` `}Medium</a>
        </li>
        <li>
          <a href="https://github.com/supayut" target="_blank"><Github/>{` `}Github</a>
        </li>
      </ul>
    </div>
  )
}

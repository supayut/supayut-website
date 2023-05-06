import * as React from "react"
import { LinkProps } from "./type"

const listStyles = {
  marginBottom: '4rem',
  paddingLeft: '2rem',
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
}

const linkStyle = {
  color: "#8BC34A",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const descriptionStyle = {
  color: "#fff",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const links: LinkProps[] = [
  {
    text: "มาติดตั้ง/ต่ออายุ(อัตโนมัติ) SSL (https) ของ Let’s encrypt free https กันดีกว่า",
    url: "https://medium.com/c0d1um/มาติดตั้ง-ต่ออายุ-ssl-https-ของ-lets-encrypt-free-https-กันดีกว่า-75b44a6526b7",
    color: "#E95800",
  },
  {
    text: "เทคนิคการเขียน Python ให้กระชับสั้นได้ใจความ (Tips & Tricks)",
    url: "https://medium.com/@nookskill/เทคนิคการเขียน-python-ให้กระชับสั้นได้ใจความ-tips-tricks-6c4ca276f1af",
    color: "#1099A8",
  },
  {
    text: "มารู้จัก yield ใน Python กันเถอะ!!! (เบื้องต้น)",
    url: "https://medium.com/c0d1um/มารู้จัก-yield-ใน-python-กันเถอะ-เบื้องต้น-f615905907f9",
    color: "#BC027F",
  },
  {
    text: "EditorConfig คืออะไร แล้วทำไมเราต้องใช้มันล่ะ ? (Developer ควรรู้จักนะ!!!)",
    url: "https://medium.com/c0d1um/editorconfig-คืออะไร-แล้วทำไมเราต้องใช้มันล่ะ-developer-ควรรู้จักนะ-c4551f2541da",
    color: "#0D96F2",
  },
  // {
  //   text: "Plugin Library",
  //   url: "https://www.gatsbyjs.com/plugins",
  //   color: "#8EB814",
  // },
  // {
  //   text: "Build and Host",
  //   url: "https://www.gatsbyjs.com/cloud",
  //   badge: true,
  //   color: "#663399",
  // },
]

export default function Article() {
  return (
    <div className="article">
      <h4>
        <span className="gradient-mint">Articles</span>
      </h4>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

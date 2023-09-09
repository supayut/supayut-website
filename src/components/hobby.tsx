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
  marginTop: '0.25rem',
  marginBottom: 0,
  lineHeight: 1.25,
}

const links: LinkProps[] = [
  {
    text: "Noob Trader (Stock Trading Tools for Thailand's SET)",
    url: "https://invest.supayut.com/",
    description: "This project is designed to provide stock traders in Thailand's SET market with a suite of tools to help them make more informed trading decisions.",
    color: "#E95800",
  },
  {
    text: "Financial Overview Table (TradingView Pine Script)",
    url: "https://www.tradingview.com/script/vjQPdZuM-Financial-Overview-Table/",
    description: "This script displays quarterly Revenue, Net Income, Gross Profit, EPS data, and their year-on-year percentage change.",
    color: "#3acf82",
  },
]

export default function Hobby() {
  return (
    <div className="article">
      <h4>
        <span className="gradient-mint">Hobbies</span>
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
            {link.description && <div style={descriptionStyle}>{link.description}</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}

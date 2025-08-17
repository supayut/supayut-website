import * as React from "react"
import { LinkProps } from "./type"

const links: LinkProps[] = [
  {
    text: "📈 Noob Trader (Stock Trading Tools for Thailand's SET)",
    url: "https://invest.supayut.com/",
    description: "This project is designed to provide stock traders in Thailand's SET market with a suite of tools to help them make more informed trading decisions.",
    color: "var(--neon-blue)",
  },
  {
    text: "📊 Financial Overview Table (TradingView Pine Script)",
    url: "https://www.tradingview.com/script/vjQPdZuM-Financial-Overview-Table/",
    description: "This script displays quarterly Revenue, Net Income, Gross Profit, EPS data, and their year-on-year percentage change.",
    color: "var(--neon-green)",
  },
]

export default function Hobby() {
  return (
    <div className="hobby-section">
      <h4>
        <span className="gradient-pink-yellow">Hobbies & Projects</span> 🚀
      </h4>
      <div className="hobby-grid">
        {links.map(link => (
          <div key={link.url} className="hobby-card glass">
            <div className="hobby-header">
              <a
                href={`${link.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hobby-link"
                style={{ color: link.color }}
              >
                {link.text}
              </a>
              {link.badge && (
                <span className="hobby-badge">
                  NEW! ✨
                </span>
              )}
            </div>
            {link.description && (
              <p className="hobby-description">{link.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

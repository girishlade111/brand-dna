<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>XML Sitemap // Brand DNA — The Invisible Instrument</title>
        <style type="text/css">
          :root {
            --bg: #0c0d0e;
            --surface: #141618;
            --surface-raised: #1c1f22;
            --border: #282c30;
            --border-subtle: #202428;
            --text-primary: #eceef0;
            --text-secondary: #9ba1a6;
            --text-muted: #6b7278;
            --accent: #22c55e;
            --accent-bg: rgba(34, 197, 94, 0.1);
            --font-mono: "Courier Prime", "SF Mono", Monaco, Consolas, "Liberation Mono", monospace;
            --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          }

          @media (prefers-color-scheme: light) {
            :root {
              --bg: #f8f9fa;
              --surface: #ffffff;
              --surface-raised: #f1f3f5;
              --border: #e2e5e8;
              --border-subtle: #ebedf0;
              --text-primary: #111418;
              --text-secondary: #4b5563;
              --text-muted: #6b7280;
              --accent: #15803d;
              --accent-bg: rgba(21, 128, 61, 0.08);
            }
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: var(--bg);
            color: var(--text-primary);
            font-family: var(--font-sans);
            font-size: 14px;
            line-height: 1.6;
            padding: 2.5rem 1.5rem;
            min-height: 100vh;
          }

          .container {
            max-width: 1100px;
            margin: 0 auto;
          }

          header {
            border-bottom: 2px solid var(--border);
            padding-bottom: 2rem;
            margin-bottom: 2rem;
          }

          .brand-eyebrow {
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--accent);
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
          }

          .status-dot {
            width: 8px;
            height: 8px;
            background-color: var(--accent);
            display: inline-block;
          }

          h1 {
            font-size: 28px;
            font-weight: 500;
            letter-spacing: -0.02em;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .lead {
            color: var(--text-secondary);
            font-size: 14px;
            max-width: 720px;
            line-height: 1.5;
          }

          .summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .summary-card {
            background-color: var(--surface);
            border: 1px solid var(--border);
            padding: 1.25rem;
            font-family: var(--font-mono);
          }

          .card-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-muted);
            margin-bottom: 4px;
          }

          .card-value {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
          }

          .card-subtext {
            font-size: 11px;
            color: var(--text-secondary);
            margin-top: 4px;
          }

          .table-wrapper {
            background-color: var(--surface);
            border: 1px solid var(--border);
            overflow-x: auto;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            text-align: left;
          }

          th {
            background-color: var(--surface-raised);
            border-bottom: 1px solid var(--border);
            color: var(--text-muted);
            font-family: var(--font-mono);
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding: 12px 16px;
            font-weight: 600;
          }

          td {
            padding: 12px 16px;
            border-bottom: 1px solid var(--border-subtle);
            color: var(--text-secondary);
            vertical-align: middle;
          }

          tr:last-child td {
            border-bottom: none;
          }

          tr:hover td {
            background-color: var(--surface-raised);
          }

          .col-num {
            font-family: var(--font-mono);
            color: var(--text-muted);
            width: 48px;
            font-size: 11px;
          }

          .col-url a {
            color: var(--text-primary);
            text-decoration: none;
            font-family: var(--font-mono);
            font-size: 13px;
            word-break: break-all;
            transition: color 0.15s ease;
          }

          .col-url a:hover {
            color: var(--accent);
            text-decoration: underline;
          }

          .badge {
            display: inline-block;
            padding: 2px 8px;
            font-family: var(--font-mono);
            font-size: 11px;
            font-weight: 600;
            border: 1px solid var(--border);
            background-color: var(--surface-raised);
          }

          .badge-priority-high {
            color: var(--accent);
            border-color: var(--accent);
            background-color: var(--accent-bg);
          }

          .badge-freq {
            font-family: var(--font-mono);
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-secondary);
          }

          .col-date {
            font-family: var(--font-mono);
            font-size: 12px;
            color: var(--text-muted);
            white-space: nowrap;
          }

          footer {
            margin-top: 2.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: gap;
            gap: 1rem;
            font-family: var(--font-mono);
            font-size: 11px;
            color: var(--text-muted);
          }

          .btn-home {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--text-primary);
            background-color: var(--surface);
            border: 1px solid var(--border);
            padding: 8px 14px;
            text-decoration: none;
            font-family: var(--font-mono);
            font-size: 12px;
            transition: all 0.15s ease;
          }

          .btn-home:hover {
            border-color: var(--text-primary);
            background-color: var(--surface-raised);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="brand-eyebrow">
              <span class="status-dot"></span>
              <span>Brand DNA // XML Sitemaps Protocol 0.9</span>
            </div>
            <h1>Verified Production Sitemap Index</h1>
            <p class="lead">
              This document serves as both a machine-parseable XML schema for search engine crawlers and a human-readable index of Brand DNA's verified production routes and token tools.
            </p>
          </header>

          <div class="summary-grid">
            <div class="summary-card">
              <div class="card-label">// INDEXED URLS</div>
              <div class="card-value">
                <xsl:value-of select="count(sitemap:urlset/sitemap:url | urlset/url)"/>
              </div>
              <div class="card-subtext">Crawlable production routes</div>
            </div>
            <div class="summary-card">
              <div class="card-label">// PROTOCOL SCHEMA</div>
              <div class="card-value">sitemaps.org</div>
              <div class="card-subtext">Standard 0.9 XML spec</div>
            </div>
            <div class="summary-card">
              <div class="card-label">// DOMAIN ORIGIN</div>
              <div class="card-value">branddna.design</div>
              <div class="card-subtext">Canonical HTTPS target</div>
            </div>
            <div class="summary-card">
              <div class="card-label">// DYNAMIC EXCLUSIONS</div>
              <div class="card-value">Protected</div>
              <div class="card-subtext">/kit/* and /share/* noindexed</div>
            </div>
          </div>

          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th class="col-num">#</th>
                  <th>Location (URL)</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url | urlset/url">
                  <tr>
                    <td class="col-num">
                      <xsl:value-of select="position()"/>
                    </td>
                    <td class="col-url">
                      <a href="{sitemap:loc | loc}" target="_blank" rel="noopener noreferrer">
                        <xsl:value-of select="sitemap:loc | loc"/>
                      </a>
                    </td>
                    <td>
                      <span class="badge-freq">
                        <xsl:value-of select="sitemap:changefreq | changefreq"/>
                      </span>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="(sitemap:priority | priority) &gt;= 0.9">
                          <span class="badge badge-priority-high">
                            <xsl:value-of select="sitemap:priority | priority"/>
                          </span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="badge">
                            <xsl:value-of select="sitemap:priority | priority"/>
                          </span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="col-date">
                      <xsl:value-of select="sitemap:lastmod | lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <footer>
            <div>Generated for crawler indexing and architectural transparency.</div>
            <a href="/" class="btn-home">[ ↖ RETURN TO WORKBENCH ]</a>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

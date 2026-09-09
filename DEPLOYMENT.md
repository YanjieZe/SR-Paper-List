# Deployment

- Public website: https://sr.yanjieze.com
- Sites fallback: https://sr-paper-list.lastyanjieze.chatgpt.site
- Source repository: https://github.com/YanjieZe/SR-Paper-List
- Hosting: Sites; custom DNS zone: Cloudflare.

The following records were configured on September 9, 2026. Keep the CNAME **DNS only**.

| Type | Name | Content |
|---|---|---|
| CNAME | sr.yanjieze.com | custom-domains.chatgpt.site |
| TXT | _openai-site-verification.sr.yanjieze.com | openai-site-verification=GCLg_8aQXuk9MNFySlVgXBmhcS8Jp--ON1kEQYksFVE |
| TXT | _cf-custom-hostname.sr.yanjieze.com | b72e89ce-f96d-4555-8bb6-3b5cc2f2dcf8 |

Update `papers.json`, regenerate the README, run the documented checks, commit and push to GitHub, then build and publish the same commit through Sites. Source push credentials are short-lived and are not stored in this repository. This project does not configure automatic publication from GitHub.

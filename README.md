# Northline Construct — static prototype

Open `index.html` directly in a browser. No build step or runtime is required.

## Before launch

- Replace the Northline placeholder brand, all bracketed content, contact details, project facts and images.
- Connect forms to a trusted WordPress form plugin with nonces, validation, sanitization, spam protection and SMTP.
- Have privacy, cookie and terms content reviewed for the operating jurisdiction.
- Use licensed, client-approved project imagery in responsive WebP/AVIF formats with explicit dimensions.
- Add Rank Math metadata and schema only after WordPress migration to avoid duplicate output.

## WordPress / Elementor mapping

Each major `<section>` maps to an Elementor container; cards and rows map to Loop/Grid items; services, projects, team members, testimonials and insights should become custom post types or standard posts as appropriate. CSS variables in `assets/css/style.css` map directly to Elementor Global Colors, Fonts and spacing presets.

Suggested dynamic fields for projects: title, location, sector, client, scope, completion date, services, challenge, response, result and gallery. Suggested taxonomies: sector, service and location.

## Suggested Rank Math plan

| Page | Focus keyword | Schema | Suggested title pattern |
|---|---|---|---|
| Home | construction company [location] | LocalBusiness + WebSite | Construction Company in [Location] \| [Brand] |
| Services | construction services [location] | CollectionPage | Construction Services in [Location] \| [Brand] |
| Service | [service] [location] | Service | [Service] in [Location] \| [Brand] |
| Projects | construction projects [location] | CollectionPage | Construction Projects \| [Brand] |
| Project | [project type] project [location] | WebPage | [Project Name] \| [Brand] |
| Insights | construction insights | Blog | Construction Insights \| [Brand] |
| Contact | contact [brand] | ContactPage | Contact [Brand] |

Use Organization/LocalBusiness data once, with verified legal name, address, service area, phone, opening hours and social profiles. Use FAQ schema only where the content and current search-engine eligibility justify it.

## Security and performance handoff

Configure HTTPS, HSTS, CSP, `X-Content-Type-Options`, `Referrer-Policy`, backups, least-privilege roles, updates and a reputable WordPress security layer at hosting level. Self-host fonts or use the system stack already configured. Cache static assets and optimize the hero image aggressively while keeping it eager-loaded.

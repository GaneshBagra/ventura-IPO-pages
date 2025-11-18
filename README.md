# IPO Pages

Small React + Vite project that lists upcoming IPOs and shows IPO details (timeline, company info). Built with React, React Router and Bootstrap.

## Features
- List view of IPOs with logo, issue dates, price range and min investment  
- Detail view with IPO details card, horizontal / vertical timeline and company description  
- Responsive layout: desktop (horizontal timeline), tablet, and mobile (vertical timeline)

## Screenshots
Place screenshots in `public/screenshots/` and reference them as below.

- List IPO page  
  ![List IPO page](/public/screenshots/listIPOPage.png)

- IPO details page (desktop)  
  ![IPO details desktop](/public/screenshots/ipo-details-desktop.png)

- IPO details page (mobile / responsive)  
  ![IPO details mobile](/public/screenshots/ipo-details-mobile.png)

## Quick start (Windows)
1. Install dependencies
   npm install

2. Run dev server
   npm run dev

3. Build for production
   npm run build

4. Preview production build
   npm run preview

## Project structure
- src/
  - pages/ — page components (ListIpoPage, IpoDetailsPage)
  - components/ — presentational components (IPOTimeLine, IPODetails, CompanyDetails)
  - utils/data.js — sample IPO data
  - App.jsx, main.jsx, App.css
- public/ — static assets and screenshots (put screenshot files here)

## Styling & breakpoints
- Global / desktop: default CSS in `src/App.css`  
- Tablet: media query (min-width: 426px and max-width: 768px)  
- Mobile: media query (max-width: 425px)  
Timeline switches from horizontal (desktop/tablet) to vertical (mobile) via CSS. If using Bootstrap utility classes that hide/show elements (e.g. `d-none d-md-flex`), remove them so the app CSS controls visibility for tablet sizes.

## Development workflow
1. Create a feature branch: `git checkout -b feat/<name>`
2. Implement changes, update CSS in `src/App.css` or components in `src/components/`
3. Run locally: `npm run dev` and test responsive behavior (Chrome DevTools or device)
4. Lint: `npm run lint`
5. Commit and push, open a PR for review
6. Merge to `main` and `npm run build` for production

## Notes / Troubleshooting
- If you see "Invalid hook call" or `useNavigate` errors, ensure the app is wrapped in a Router in `src/main.jsx` (BrowserRouter) and there's only one copy of React installed.
- Put screenshot image files into `public/screenshots/` with names used above (`list-ipo.png`, `ipo-details-desktop.png`, `ipo-details-mobile.png`) so they render in this README.

## License
MIT
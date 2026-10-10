# qg-frontend-v2

This is the intended Queer Global web app. There is no public website yet.

- **Docs:** [qg-docs](https://github.com/QueerGlobal/qg-docs)

## Run locally

```bash
npm install
npm start
```

Create React App, React 17, `react-scripts` 4. Use a current Node 18+ if you can; CI still mentions Node 16.

## Status

| Route | State |
| --- | --- |
| `/` Home | Has UI |
| `/about` | Has copy; image placeholders remain |
| `/donate`, `/blog`, `/profile`, `/search`, `/add-resource`, `/logout` | Heading stubs |
| `/resources`, `/get-involved`, `/contact-us`, and other nav/footer hrefs | Linked, no route |

There is no backend. The mobile nav `GET /user` call does not hit a real API.

See [STATUS.md in qg-docs](https://github.com/QueerGlobal/qg-docs/blob/cursor/rewrite-public-front-door/STATUS.md) for the full list. That file lands on `main` when [qg-docs PR #18](https://github.com/QueerGlobal/qg-docs/pull/18) merges.

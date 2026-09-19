# qg-frontend-v2

This is the intended Queer Global web app. It is **not** what currently serves [queerglobal.com](https://queerglobal.com).

- **Live placeholder:** [https://queerglobal.com](https://queerglobal.com)
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

See [qg-docs/STATUS.md](https://github.com/QueerGlobal/qg-docs/blob/main/STATUS.md) for the full list.

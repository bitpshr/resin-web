<img src="src/app/icon.png" width="36px">

**Resin** is an automated news system that removes journalists and opinions and surfaces raw data directly to readers.

[resin.news](resin.news)

<img src="src/app/assets/preview.png">

## Running locally

```bash
>   nvm use      # Load NPM version
>   npm install  # Install dependencies
>   vercel dev   # Serve app locally
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Concepts

**Next.js**

**Tailwind and Framer**

**SWR data fetching**

**Serverless API**

**LLM ingestion pipeline**

**Neon Serverless Postgres**

**Playwright testing**

**GitHub Workflows**

**Sentry monitoring**

## Going further

If I had more time to get this feature production-ready, I'd focus on the following next-steps:

1. **UI resiliency:** I'd circle back to improve loading, error, and success states, especially in the context of wallet connection, minting, and on-chain event listening. The app has basic transactional states and UI loading states, but informative user-facing error messaging about failed RPC requests or network outages should also be accounted for. I'd also improve UX flows like mandating a specific chain or network, rather than leaving this to the wallet.
1. **Testing:** I'd focus on adding a resilient test suite with high, non-contrived test coverage. As the application and designs stabilize and this application becomes feature-complete, I'd enforce coverage thresholds via CI and begin adding end-to-end tests using Cypress. I'd mock RPC network interaction using a utility that allowed for various chain states to be simulated.
1. **Internationalization:** All strings were crudely put into a `locale.ts` file to simulate real-world i18n. I'd probably lean on something like `react-i18n` to facilitate the creation and consumption of locale files for all strings across the app.
1. **Componentization:** Depending on how large this application got and if other applications will use the same look-and-feel, I'd also look into componentizing the application as a whole in a more maintainable manner, both on the React and the CSS sides. I'd ideally create an in-house design system of reusable components rather than creating one-off components in the application, and I'd create utility classes and use better Tailwind extension to reduce the number of CSS classes used in the virtual DOM of each page.
1. **Accessibility:** Before releasing this to users, I'd triage the application for accessibility and seek to maintain WCAG 2.1 compliance throughout the component set and the CSS. Ideally, I'd incorporate this verification into the test suite.

## Conclusion

I really enjoyed this activity and I liked how open ended it was. I felt like it allowed me to pick and choose what to focus on, versus having to solve a very specific algorithmic problem. Thank you in advance for your consideration!

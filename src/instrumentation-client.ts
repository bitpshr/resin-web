// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://0f989f7156eb3dc2b6212f08fa9dcc31@o4509200384983040.ingest.us.sentry.io/4509200385900544",

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system",
      themeLight: {
        background: "#fffef6",
        accentBackground: "#afbea5",
        accentForeground: "#000000",
        border: "1px solid #000000",
      },
      themeDark: {
        background: "#3e403d",
        accentBackground: "#afbea5",
        accentForeground: "#000000",
        border: "1px solid #000000",
      },
      buttonLabel: "Report bug",
      buttonId: "sentry-feedback",
      dialogId: "sentry-feedback-dialog",
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

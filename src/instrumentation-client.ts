// This file configures the initialization of Sentry on the client.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://0f989f7156eb3dc2b6212f08fa9dcc31@o4509200384983040.ingest.us.sentry.io/4509200385900544",

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

  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

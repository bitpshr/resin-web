// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://0f989f7156eb3dc2b6212f08fa9dcc31@o4509200384983040.ingest.us.sentry.io/4509200385900544",
  tracesSampleRate: 1,
  debug: false,
});

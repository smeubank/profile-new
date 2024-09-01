import * as Sentry from "@sentry/nuxt";

Sentry.init({
    dsn: process.env.PUBLIC_SENTRY_DSN || "https://2282dedd47bbffe63362464775319f06@o673219.ingest.us.sentry.io/4507874577809408",
    debug: true,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
      Sentry.feedbackIntegration({
        // Additional SDK configuration goes in here, for example:
        colorScheme: "system",
        triggerLabel: "Contact me",
        triggerAriaLabel: "Contact me",
        formTitle: "Contact me",
        submitButtonLabel: "Contact me",
        messagePlaceholder: "This is honestly just me dogfooding some Sentry features. I may not see this.",
        successMessageText: "Thank you for your message.",
      }),
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
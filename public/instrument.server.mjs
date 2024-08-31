import * as Sentry from "@sentry/nuxt";

Sentry.init({
    dsn: process.env.PUBLIC_SENTRY_DSN || "https://2282dedd47bbffe63362464775319f06@o673219.ingest.us.sentry.io/4507874577809408",
    debug: true,
});
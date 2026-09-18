// Local dev escape hatch: run the dev server with `BYPASS_AUTH=true` to skip
// auth / permission gating — route access predicates are forced true and 401s
// no longer redirect to /login, so pages can be inspected without a session.
// Off by default. `process.env.BYPASS_AUTH` is inlined at build time via the
// `define` block in config/config.ts, so it is a compile-time constant, not a
// runtime lookup.
export const BYPASS_AUTH = process.env.BYPASS_AUTH === 'true';

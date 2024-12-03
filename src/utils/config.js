const BACKEND_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.base.crabdance.com"
    : "http://localhost:3001";

export { BACKEND_BASE_URL };

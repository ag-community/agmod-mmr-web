declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test"
    readonly PUBLIC_URL: string
    readonly REACT_APP_AGMMR_API_BASE_URL: string
  }
}

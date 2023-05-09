import config from "../config"

export enum ServiceStatuses {
  SUCCESS = 1,
  FAILED = 0,
}

export const USERNAME = {
  ALLOWED_REGEX: "a-zA-Z0-9_",
  SEPARATOR: "_",
  MAX_LENGTH: 50,
  MAX_RANDOM_DIGITS_LENGTH: 6,
}

export const TokenServiceOptions = {
  jwt: {
    expirationTime: 8 * 60 * 60, // 8 hours in seconds
    secret: config.env.tokens.jwtSecret,
  },
}

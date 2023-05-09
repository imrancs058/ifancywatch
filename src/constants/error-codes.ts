enum ErrorCodes {
  INVALID_BODY = "INVALID_BODY",
  NO_BRAND_FOUND = "NO_BRAND_FOUND",
  SERVER_ERR = "SERVER_ERROR",
  NO_RECORD_FOUND_WITH_THIS_ID = "NO_RECORD_FOUND_WITH_THIS_ID",
  PHONE_ALREADY_EXISTS = "PHONE_ALREADY_EXISTS",
  NO_CATEGORY_EXISTS = "NO_CATEGORY_EXISTS",
  EMAIL_ALREADY_EXISTS = "EMAIL_ALREADY_EXISTS",
  INVALID_EMAIL_OR_PHONE = "INVALID_EMAIL_OR_PHONE",
  USERNAME_GENERATION_LIMIT_EXCEEDED = "USERNAME_GENERATION_LIMIT_EXCEEDED",
  VERIFICATION_CODE_EXPIRED = "VERIFICATION_CODE_EXPIRED",
  INVALID_VERIFICATION_CODE = "INVALID_VERIFICATION_CODE",
  EMAIL_NOT_FOUND = "EMAIL_NOT_FOUND",
  PHONE_NOT_FOUND = "PHONE_NOT_FOUND",
  USER_ALREADY_VERIFIED = "USER_ALREADY_VERIFIED",
  VERIFICATION_CODE_GENERATION_FAILED = "VERIFICATION_CODE_GENERATION_FAILED",
  EMAIL_MESSAGE_SERVICE_FAILED = "EMAIL_MESSAGE_SERVICE_FAILED",
  PHONE_MESSAGE_SERVICE_FAILED = "PHONE_MESSAGE_SERVICE_FAILED",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  NO_DATA_FOUND = "NO_DATA_FOUND",
  DATA_NOT_SAVED = "DATA_NOT_SAVED",
  USER_NOT_VERIFIED = "USER_NOT_VERIFIED",
  AUTHORIZATION_FAILED = "AUTHORIZATION_FAILED",
  INVALID_JWT_TOKEN = "INVALID_JWT_TOKEN",
  INVALID_VERIFICATION_INTENT = "INVALID_VERIFICATION_INTENT",
  CODE_VERIFICATION_FAILED = "CODE_VERIFICATION_FAILED",
  FAILED_TO_UPDATE_USER_STATUS_TO_VERIFIED_USER_NOT_FOUND = "FAILED_TO_UPDATE_USER_STATUS_TO_VERIFIED_USER_NOT_FOUND",
  CURRENT_PASSWORD_NOT_MATCH = "CURRENT_PASSWORD_NOT_MATCH",
  WRONG_PASSWORD = "WRONG_PASSWORD",
  PHONE_NUMBER_OR_NAME_IS_REQUIRED = "PHONE_NUMBER_OR_NAME_IS_REQUIRED",
  USER_NOT_FOUND_BY_PHONE = "USER_NOT_FOUND_BY_PHONE",
  USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS",
  EMPTY_BODY_NOT_ALLOWED = "EMPTY_BODY_NOT_ALLOWED",
}

export const ErrorCodesMeta = {
  INVALID_BODY: { name: "INVALID_BODY", message: "Your request body is not valid." },
  SERVER_ERR: { name: "SERVER_ERROR", message: "Server crashed." },
  PHONE_ALREADY_EXISTS: { name: "PHONE_ALREADY_EXISTS", message: "Phone no. is already in use." },
  EMAIL_ALREADY_EXISTS: {
    name: "EMAIL_ALREADY_EXISTS",
    message: "Email address is already in use.",
  },
  INVALID_EMAIL_OR_PHONE: {
    name: "INVALID_EMAIL_OR_PHONE",
    message: "Email Address or Phone number is required.",
  },
  USERNAME_GENERATION_LIMIT_EXCEEDED: {
    name: "INVALID_EMAIL_OR_PHONE",
    message: "Maximum username generation limit exceeded.",
  },
  VERIFICATION_CODE_EXPIRED: {
    name: "VERIFICATION_CODE_EXPIRED",
    message: "Your verification code is expired.",
  },

  INVALID_VERIFICATION_CODE: {
    name: "INVALID_VERIFICATION_CODE",
    message: "Invalid/not found verification code.",
  },
  PHONE_NOT_FOUND: {
    name: "PHONE_NOT_FOUND",
    message: "User not found with this phone number.",
  },
  EMAIL_NOT_FOUND: {
    name: "EMAIL_NOT_FOUND",
    message: "User not found with this email address.",
  },
  USER_ALREADY_VERIFIED: {
    name: "USER_ALREADY_VERIFIED",
    message: "User is already verified.",
  },
  VERIFICATION_CODE_GENERATION_FAILED: {
    name: "VERIFICATION_CODE_GENERATION_FAILED",
    message: "Failed generate verification code: Server Error!",
  },
  EMAIL_MESSAGE_SERVICE_FAILED: {
    name: "EMAIL_MESSAGE_SERVICE_FAILED",
    message: "Failed to send email message: Server Error!",
  },
  PHONE_MESSAGE_SERVICE_FAILED: {
    name: "PHONE_MESSAGE_SERVICE_FAILED",
    message: "Failed to send message on phone number: Server Error!",
  },
  USER_NOT_FOUND: {
    name: "USER_NOT_FOUND",
    message: "User not found with this email and password",
  },
  USER_NOT_VERIFIED: {
    name: "USER_NOT_VERIFIED",
    message: "User is not verified yet.",
  },
  AUTHORIZATION_FAILED: {
    name: "AUTHORIZATION_FAILED",
    message: "User is not authorized",
  },
  INVALID_JWT_TOKEN: {
    name: "INVALID_JWT_TOKEN",
    message: "Invalid Json Web Token.",
  },
  INVALID_VERIFICATION_INTENT: {
    name: "INVALID_VERIFICATION_INTENT",
    message: "Invalid verification cod intent.",
  },
  CODE_VERIFICATION_FAILED: {
    name: "CODE_VERIFICATION_FAILED",
    message: "Code Verification Failed.",
  },
  FAILED_TO_UPDATE_USER_STATUS_TO_VERIFIED_USER_NOT_FOUND: {
    name: "FAILED_TO_UPDATE_USER_STATUS_TO_VERIFIED_USER_NOT_FOUND",
    message: "Failed to update the user status: User Not Found!",
  },
  CURRENT_PASSWORD_NOT_MATCH: {
    name: "CURRENT_PASSWORD_NOT_MATCH",
    message: "Current password not match.",
  },
  WRONG_PASSWORD: {
    name: "WRONG_PASSWORD",
    message: "Wrong password.",
  },
  PHONE_NUMBER_OR_NAME_IS_REQUIRED: {
    name: "PHONE_NUMBER_OR_NAME_IS_REQUIRED",
    message: "Phone number or name is required.",
  },
  USER_NOT_FOUND_BY_PHONE: {
    name: "USER_NOT_FOUND_BY_PHONE",
    message: "User not found by phone number.",
  },
  USERNAME_ALREADY_EXISTS: {
    name: "USERNAME_ALREADY_EXISTS",
    message: "Username already exists.",
  },
  EMPTY_BODY_NOT_ALLOWED: {
    name: "EMPTY_BODY_NOT_ALLOWED",
    message: "Empty body not allowed.",
  },
}

export default ErrorCodes

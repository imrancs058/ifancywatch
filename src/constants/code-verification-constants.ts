export enum CodeVerificationProtectedIntents {
  UPDATE_EMAIL = "UPDATE_EMAIL",
}

export enum CodeVerificationUnProtectedIntents {
  REGISTRATION = "registration",
  FORGET_PASSWORD = "forget_password",
}

export enum AllIntents {
  UPDATE_EMAIL = "UPDATE_EMAIL",
  REGISTRATION = "registration",
  FORGET_PASSWORD = "forget_password",
}

export type CodeVerificationIntents =
  | CodeVerificationUnProtectedIntents
  | CodeVerificationProtectedIntents

export enum VerificationReceivers {
  PHONE = "phone",
  EMAIL = "email",
}

export const CodeVerificationOptions = {
  EXPIRATION_TIME: 5 * 60, // 300 seconds/10 mins
}

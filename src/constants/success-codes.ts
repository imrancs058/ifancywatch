enum SuccessCodes {
  USER_REGISTERED_SUCCESSFULLY = "USER_REGISTERED_SUCCESSFULLY",
  USER_VERIFIED_SUCCESSFULLY = "USER_VERIFIED_SUCCESSFULLY",
  User_AUTHORIZED_SUCCESSFULLY = "User_AUTHORIZED_SUCCESSFULLY",
  User_SESSION_OUT = "User_SESSION_OUT",
  USER_LOGGED_OUT_SUCCESSFULLY = "USER_LOGGED_OUT_SUCCESSFULLY",
  USER_UPDATED_SUCCESSFULLY = "USER_UPDATED_SUCCESSFULLY",
  USER_DELETED_SUCCESSFULLY = "USER_DELETED_SUCCESSFULLY",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  USER_PASSWORD_RESET_SUCCESSFULLY = "USER_PASSWORD_RESET_SUCCESSFULLY",
  USER_PASSWORD_CHANGED_SUCCESSFULLY = "USER_PASSWORD_CHANGED_SUCCESSFULLY",
  VERIFICATION_CODE_SENT_SUCCESSFULLY = "VERIFICATION_CODE_SENT_SUCCESSFULLY",
  CODE_VERIFICATION_SUCCESSFUL = "CODE_VERIFICATION_SUCCESSFUL",
  CODE_VERIFICATION_PASSED = "CODE_VERIFICATION_PASSED",
  PASSWORD_UPDATED_SUCCESSFULLY = "PASSWORD_UPDATED_SUCCESSFULLY",
  EMAIL_OR_PHONE_UPDATED_SUCCESSFULLY = "EMAIL_OR_PHONE_UPDATED_SUCCESSFULLY",
  USER_PROFILE = "USER_PROFILE",
  SEARCHED_USERS = "SEARCHED_USERS",
  USERNAME_UPDATE_SUCCESSFUL = "USERNAME_UPDATE_SUCCESSFUL",
  PROFILE_UPDATE_SUCCESSFUL = "PROFILE_UPDATE_SUCCESSFUL",
  READ_CSV_SUCCESSFULLY = "READ_CSV_SUCCESSFULLY",
}

export const SuccessCodesMeta = {
  USER_REGISTERED_SUCCESSFULLY: {
    code: SuccessCodes.USER_REGISTERED_SUCCESSFULLY,
    message: "User registered successfully",
  },
  USER_VERIFIED_SUCCESSFULLY: {
    code: SuccessCodes.USER_VERIFIED_SUCCESSFULLY,
    message: "User verified successfully",
  },
  User_AUTHORIZED_SUCCESSFULLY: {
    code: SuccessCodes.User_AUTHORIZED_SUCCESSFULLY,
    message: "User authorized successfully",
  },
  User_SESSION_OUT: {
    code: SuccessCodes.User_SESSION_OUT,
    message: "User SESSION OUT PLEASE LOG IN AGAIN",
  },
  USER_LOGGED_OUT_SUCCESSFULLY: {
    code: SuccessCodes.USER_LOGGED_OUT_SUCCESSFULLY,
    message: "User logged out successfully",
  },
  USER_UPDATED_SUCCESSFULLY: {
    code: SuccessCodes.USER_UPDATED_SUCCESSFULLY,
    message: "User updated successfully",
  },
  USER_DELETED_SUCCESSFULLY: {
    code: SuccessCodes.USER_DELETED_SUCCESSFULLY,
    message: "User deleted successfully",
  },
  USER_NOT_FOUND: {
    code: SuccessCodes.USER_NOT_FOUND,
    message: "User Not Found",
  },
  USER_PASSWORD_RESET_SUCCESSFULLY: {
    code: SuccessCodes.USER_PASSWORD_RESET_SUCCESSFULLY,
    message: "User password reset successfully",
  },
  USER_PASSWORD_CHANGED_SUCCESSFULLY: {
    code: SuccessCodes.USER_PASSWORD_CHANGED_SUCCESSFULLY,
    message: "User password changed successfully",
  },
  VERIFICATION_CODE_SENT_SUCCESSFULLY: {
    code: SuccessCodes.VERIFICATION_CODE_SENT_SUCCESSFULLY,
    message: "Verification code sent successfully",
  },
  CODE_VERIFICATION_SUCCESSFUL: {
    code: SuccessCodes.CODE_VERIFICATION_SUCCESSFUL,
    message: "Code verification successful",
  },
  CODE_VERIFICATION_PASSED: {
    name: SuccessCodes.CODE_VERIFICATION_PASSED,
    message: "Code Verification Passed",
  },
  PASSWORD_UPDATED_SUCCESSFULLY: {
    code: SuccessCodes.PASSWORD_UPDATED_SUCCESSFULLY,
    message: "Password updated successfully",
  },
  EMAIL_OR_PHONE_UPDATED_SUCCESSFULLY: {
    code: SuccessCodes.EMAIL_OR_PHONE_UPDATED_SUCCESSFULLY,
    message: "Email or phone number updated successfully",
  },
  USER_PROFILE: {
    code: SuccessCodes.USER_PROFILE,
    message: "User profile",
  },
  SEARCHED_USERS: {
    code: SuccessCodes.SEARCHED_USERS,
    message: "Searched users",
  },
  USERNAME_UPDATE_SUCCESSFUL: {
    code: SuccessCodes.USERNAME_UPDATE_SUCCESSFUL,
    message: "Username updated successfully",
  },
  PROFILE_UPDATE_SUCCESSFUL: {
    code: SuccessCodes.PROFILE_UPDATE_SUCCESSFUL,
    message: "Profile updated successfully",
  },
  READ_CSV_SUCCESSFULLY: {
    code: SuccessCodes.READ_CSV_SUCCESSFULLY,
    message: "Read CSV successfully",
  },
}

export default SuccessCodes

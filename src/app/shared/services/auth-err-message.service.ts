import { AuthErrorCodes } from '@angular/fire/auth';

export const AuthErrorMap = (code: string): string => {
  // export login error messages
  const loginErrorMessages: {[key: string]: string} = {
    [AuthErrorCodes.USER_DELETED]: 'Email or password is incorrect.',
    [AuthErrorCodes.USER_DISABLED]: 'The user corresponding to the provided email has been disabled.',
    [AuthErrorCodes.INVALID_EMAIL]: 'The email address is not valid.',
    [AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER]: 'We have blocked all requests from this device due to unusual activity. Try again later.',
    [AuthErrorCodes.OPERATION_NOT_ALLOWED]: 'Password sign-in is disabled for this project.',
    [AuthErrorCodes.EMAIL_EXISTS]: 'The email address is already in use by another account.',
    [AuthErrorCodes.INVALID_IDP_RESPONSE]: 'The supplied auth credential is malformed or has expired.',
    [AuthErrorCodes.INVALID_PASSWORD]: 'Email or password is incorrect.',
  };
  return loginErrorMessages[code] || code;
}

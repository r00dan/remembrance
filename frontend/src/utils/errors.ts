import { Errors } from 'types/enums';

export type Error = Record<Errors, string>;

const errorList: Error = {
  [Errors.AUTH_CREDENTIALS]: 'You should fill all fields to complete registration.',
  [Errors.USER_NOT_FOUND]: 'User not found.',
  [Errors.UNKNOWN]: 'Unknown error.',
};

export function getError(errorType: Errors, additionalInfo?: string): string {
  return `${errorList[errorType]}${additionalInfo ? ` ${additionalInfo}` : ''}`;
}

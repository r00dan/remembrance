import {
  Button,
  Input,
  Layout,
  Separator,
} from 'components';
import { IAuthProps } from 'interfaces';
import { ButtonThemes } from 'types/enums';

import styles from './Auth.module.scss';

export function Auth({
  signUpConfig,
  signInConfig,
  signUpError,
  signInError,
  onSignUpEmailChange,
  onSignUpPasswordChange,
  onSignUpUsernameChange,
  onSignInIdentifierChange,
  onSignInPasswordChange,
  onSignUpClick,
  onSignInClick,
}: IAuthProps) {
  const {
    email: signUpEmail,
    username: signUpUsername,
    password: signUpPassword,
  } = signUpConfig;
  const {
    identifier,
    password: signInPassword,
  } = signInConfig;
  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.form}>
          <div className={styles.signup}>
            <h2 className={styles.title}>Sign Up</h2>
            <Input
              id="signup_email"
              value={signUpEmail}
              label="Email"
              onChange={onSignUpEmailChange}
            />
            <Input
              id="signup_username"
              value={signUpUsername}
              label="Username"
              onChange={onSignUpUsernameChange}
            />
            <Input
              isPassword
              id="signup_password"
              value={signUpPassword}
              label="Password"
              onChange={onSignUpPasswordChange}
            />
            {signUpError && (
              <div className={styles.error}>{signUpError}</div>
            )}
            <Button
              theme={ButtonThemes.GRADIENT}
              onClick={onSignUpClick}
            >
              Join
            </Button>
          </div>
          <Separator width={80} />
          <div className={styles.signin}>
            <h2 className={styles.title}>Sign In</h2>
            <Input
              id="signin_identifier"
              value={identifier}
              label="Email / Username"
              onChange={onSignInIdentifierChange}
            />
            <Input
              isPassword
              id="signin_password"
              value={signInPassword}
              label="Password"
              onChange={onSignInPasswordChange}
            />
            {signInError && (
              <div className={styles.error}>{signInError}</div>
            )}
            <Button
              className={styles.button}
              theme={ButtonThemes.PRIMARY}
              onClick={onSignInClick}
            >
              Go in
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

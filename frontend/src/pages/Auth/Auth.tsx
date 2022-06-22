import {
  Button,
  ButtonThemes,
  Input,
  Layout,
  Separator,
} from '../../components';
import styles from './Auth.module.scss';
import { IAuthProps } from './types';

export function Auth({
  signUpConfig,
  signInConfig,
  onSignUpEmailChange,
  onSignUpPasswordChange,
  onSignUpUsernameChange,
  onSignInUsernameChange,
  onSignInPasswordChange,
}: IAuthProps) {
  const {
    email: signUpEmail,
    username: signUpUsername,
    password: signUpPassword,
  } = signUpConfig;
  const {
    username: signInUsername,
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
            <Button
              theme={ButtonThemes.GRADIENT}
              onClick={() => { }}
            >
              Join
            </Button>
          </div>
          <Separator width={75} />
          <div className={styles.signin}>
            <h2 className={styles.title}>Sign In</h2>
            <Input
              id="signin_username"
              value={signInUsername}
              label="Username"
              onChange={onSignInUsernameChange}
            />
            <Input
              isPassword
              id="signin_password"
              value={signInPassword}
              label="Password"
              onChange={onSignInPasswordChange}
            />
            <Button
              className={styles.button}
              theme={ButtonThemes.PRIMARY}
              onClick={() => { }}
            >
              Go in
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

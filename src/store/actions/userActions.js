export const USER_SING_IN = "USER_SIGN_IN";
export const USER_SING_OUT = "USER_SIGN_OUT";

export function signIn(user) {
  return {
    type: USER_SING_IN,
    payload: user
  };
}

export function signOut() {
  return {
    type: USER_SING_OUT,
    payload: null
  };
}

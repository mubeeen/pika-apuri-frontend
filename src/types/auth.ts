export interface AuthState {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  password: string;
  loggedIn: boolean;
  loading: boolean;
  error: string;
}

export interface loginCredentials {
  email: string;
  password: string;
}

export interface signupCredentials {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  password: string;
}

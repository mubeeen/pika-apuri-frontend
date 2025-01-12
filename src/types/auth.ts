export interface AuthState {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
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
  password: string;
}

export interface forgotPasswordCredentials {
  email: string;
}

export interface resetPasswordCredentials {
  newPassword: string;
  token: string;
}

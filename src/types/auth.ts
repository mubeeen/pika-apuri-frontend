export interface AuthState {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
  loading: boolean;
  error: string;
  accountType: 'seller' | 'buyer' | null
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
  role: 'seller' | 'buyer'
}

export interface forgotPasswordCredentials {
  email: string;
}

export interface resetPasswordCredentials {
  newPassword: string;
  token: string;
}

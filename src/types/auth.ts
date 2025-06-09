export interface LoginCredentials {
  identifier: string; // email o username
  password: string;
}

export interface AuthResponse {
  jwt: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

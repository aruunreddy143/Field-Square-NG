export interface Authenticate {
  username: string;
  password: string;
}
export interface Login {
  Email: string;
  Password: string;
  Code: string,
  DeviceId: string
}

export interface Tokens {
  AuthToken: string;
}

export interface SignUp {
  firstName: string;
  middleName?: string
  lastName: string;
  Email: string;
  phone?: string;
  Password: string;
  confirmPassword: string;
}

export interface User {
  Email?: string;
  Code?: '',
  AuthToken: string
}

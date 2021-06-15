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
  accessToken: string;
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
  id: number;
  Email: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  phone?: string;
  Code: '',
  DeviceId: "90.253.210.217"
}

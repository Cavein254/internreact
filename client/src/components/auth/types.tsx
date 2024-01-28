export type AuthData = {
  login: boolean;
  setLogin: (value: boolean | false) => void;
};

export enum Gender {
  MALE,
  FEMALE,
}

export interface RegisterDetails {
  fName: string;
  lName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
  phone: string;
  gender: Gender;
}

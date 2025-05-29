export interface IAuthSignInDto{
  email: string;
  password: string;
}

export interface IAuthSignUpDto extends IAuthSignInDto {
  full_name: string;
}

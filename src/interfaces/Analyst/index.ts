export interface IAnalystRegisterProps {
    email: string;
    username: string;
    password: string;
  }

  export interface IAnalystLoginProps {
    username: string;
    password: string;
  }

  export interface IAnalystContext {
    signup: (analyst: IAnalystRegisterProps) => Promise<void>;
    login: (analyst: IAnalystLoginProps) => Promise<void>;
    autentication: any;
    setAutentication: any;
  }
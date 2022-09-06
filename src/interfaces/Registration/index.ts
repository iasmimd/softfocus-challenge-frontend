import { SubmitHandler } from 'react-hook-form';

export interface IRegistrationProps {
    farmer_name: string;
    farmer_email: string;
    farmer_cpf: string;
    latitude: number;
    longitude: number;
    tillage_type: string;
    harvest_date: Date;
    cause: string;
  }

export interface IRegistrationResponse {
    id: string;
    farmer_name: string;
    farmer_email: string;
    farmer_cpf: string;
    latitude: number;
    longitude: number;
    tillage_type: string;
    harvest_date: Date;
    cause: string;
    last_modified: Date;
    analyst_id: string;
  }

  export interface IRegistrationContext {
    createRegistration: (registration: IRegistrationProps) => Promise<void>;
    getAllRegistrations: () => Promise<void>;
    registrationsList: Array<IRegistrationResponse>;
    setRegistrationId: (active: string) => void;
    uptadeRegistration: (registration: IRegistrationUpdate) => Promise<void>;
    deleteRegistration: () => Promise<void>;
  }

  export interface IRegistrationUpdate {
    id:string;
    farmer_email: string;
    latitude: number;
    longitude: number;
    tillage_type: string;
    cause: string;
  }
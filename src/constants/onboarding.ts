import { Timestamp } from 'firebase/firestore';

export type UserDataProps = {
  id: string;
  createdAt: Timestamp;

  email: string;
  displayName: string;
  authType: string;
  fullname: string;
  sex: string;
  dob: string;
  phone: string;
  role: string;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  isDeactivated: boolean;
  managementType: string | null;
};

export type PropertyProps = {
  id?: string;
  slug?: string;
  propertyName: string;
  createdAt?: Timestamp;
  ownerId: string;
  videos?: string[];
  images: string[];
  address: {
    coordinates?: { longitude: string | number; latitude: string | number };
    codeplus?: string;
    address: string;
    state: string;
  };
  propertyType: string; // shortlet|flat|penthouse|duplex
  propertyMarketType: string; // buy/rent
  marketStatus: string; // sold|rented|off market | on market
  propertyStatus?: string; // ok|issues|rent arrears
  tenants?: string[]; // tenantsIds
  management?: string; // gold|standard|platinuim
  assignedManagers?: string[]; //admins/agent userIds
  marketPrice: number;
  bedrooms: number;
  bathrooms: number;
  size: string | number;
  likes?: number;
  road: string; // tarred | graded | laterite
  water: string; //borehole | municipal | public | tanker
  isEnsuite: boolean;
  floors: number;
  ceiling: string; // asbestos| pop
  description: string;
  additionalFees?: { type: string; amount: string | number }[];
};

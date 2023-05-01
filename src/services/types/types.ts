export type Users = Record<string, User>;
export type CompanyData = Record<string, Company>;

export interface User {
  username: string;
  password: string;
}

export interface Company {
  users: Users;
  unlockedCharacters: string[];
  lBucks: number;
  lootBoxes: number;
  keys: number;
}

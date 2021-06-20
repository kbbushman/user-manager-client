export enum AccessRight {
  CREATE,
  READ,
  UPDATE,
  DELETE,
}

export interface SessionToken {
  tokenId: string;
  username: string;
  valid: boolean;
  expirationTime: Date;
  accessRights: AccessRight[];
}

export class AuthenticationModel {}

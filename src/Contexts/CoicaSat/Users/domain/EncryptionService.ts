
export interface EncryptionService {
  encrypt(value: string): string;
  compareSync(value: string, hash: string): boolean;
}

import { EncryptionService } from "../../../domain/EncryptionService";
import bcrypt from "bcrypt";

export class BcryptEncryptionService implements EncryptionService {
  compareSync(value: string, hash: string): boolean {
    return bcrypt.compareSync(value, hash);
  }

  encrypt(value: string): string {
    return bcrypt.hashSync(value, 10);
  }

}

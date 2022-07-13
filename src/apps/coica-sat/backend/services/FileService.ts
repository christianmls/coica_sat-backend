import { v4 as uuidv4 } from 'uuid';
import {mkdirSync} from 'fs';

export class FileService {
  static async uploadFile(fileDocument: any, userId: string): Promise<string> {
    return new Promise(async(resolve)  => {
      const fileId = uuidv4();
      const fileExtension = fileDocument.name.split('.').pop();
      const fileName = `${fileId}.${fileExtension}`;
      const rootPath = process.env.NODE_ENV === 'production' ? `${ __dirname }/../../../../../../public/uploads/${userId}/` :
        `${ __dirname }/../../../../../public/uploads/${userId}/`;
      const filePath = `${ rootPath }${ fileName }`;
      await mkdirSync(rootPath, {recursive: true});
      fileDocument.mv(filePath, (err: any) => {
        if (err) {
          throw new Error(err);
        }
        resolve(fileName);
      });
    });
  }
}

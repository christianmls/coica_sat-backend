import { v4 as uuidv4 } from 'uuid';
import {mkdirSync} from 'fs';

export class FileService {
  static async uploadFile(fileDocument: any): Promise<string> {
    return new Promise(async(resolve)  => {
      const fileId = uuidv4();
      const fileExtension = fileDocument.name.split('.').pop();
      const fileName = `${fileId}.${fileExtension}`;
      const rootPath = process.env.NODE_ENV === 'production' ? `${ __dirname }/../../../../../../public/uploads/` :
        `${ __dirname }/../../../../../public/uploads/`;
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

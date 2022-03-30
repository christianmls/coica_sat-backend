import { v4 as uuidv4 } from 'uuid';

export class FileService {
  static async uploadFile(fileDocument: any): Promise<string> {
    return new Promise((resolve)  => {
      const fileId = uuidv4();
      const fileExtension = fileDocument.name.split('.').pop();
      const fileName = `${fileId}.${fileExtension}`;
      const filePath = `${ __dirname }/../public/uploads/${ fileName }`;
      fileDocument.mv(filePath, (err: any) => {
        if (err) {
          throw new Error(err);
        }
        resolve(fileName);
      });
    });
  }
}

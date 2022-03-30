import {FileService} from '../../services/FileService';
import httpStatus from 'http-status';

export class FilePostController {
  async run(req: any, res: any) {
    const {  files  } = req;
    const { fileDocument  } = files;
    const fileId = await FileService.uploadFile(fileDocument);
    return res.status(httpStatus.CREATED).send(fileId);
  }
}

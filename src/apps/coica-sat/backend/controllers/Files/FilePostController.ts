import {FileService} from '../../services/FileService';
import httpStatus from 'http-status';

export class FilePostController {
  async run(req: any, res: any) {
    try {
      const {  files  } = req;
      const { fileDocument  } = files;
      const fileId = await FileService.uploadFile(fileDocument);
      res.status(httpStatus.CREATED).send(fileId);
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}

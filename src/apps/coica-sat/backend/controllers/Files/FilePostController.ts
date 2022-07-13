import {FileService} from '../../services/FileService';
import httpStatus from 'http-status';
import {getUserFromRequest} from '../../services/Utility';

export class FilePostController {
  async run(req: any, res: any) {
    try {
      const {  files  } = req;
      const { fileDocument  } = files;
      const { id: userId} = getUserFromRequest(req);
      const fileId = await FileService.uploadFile(fileDocument, userId);
      res.status(httpStatus.CREATED).send(fileId);
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}

import { Request, Response } from "express";
import { ImportSpecificationUseCase } from "./ImportSpecificationUseCase";

class ImportSpecificationController {
  constructor(private importSpecificationUseCase: ImportSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    this.importSpecificationUseCase.execute();
    return response.send();
  }
}

export { ImportSpecificationController };

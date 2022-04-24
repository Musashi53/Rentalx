import { ImportSpecificationUseCase } from "./ImportSpecificationUseCase";
import { ImportSpecificationController } from "./ImportSpecificationController";

const importSpecificationUseCase = new ImportSpecificationUseCase();

const importSpecificationController = new ImportSpecificationController(
  importSpecificationUseCase
);

export { importSpecificationController };

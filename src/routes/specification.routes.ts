import Router from "express";
import { createSpecificationController } from "../modules/Cars/useCases/createSpecification";
import { importSpecificationController } from "../modules/Cars/useCases/importSpecification";
import { listSpecificationController } from "../modules/Cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

specificationsRoutes.get("./import", (request, response) => {
  return importSpecificationController.handle(request, response);
});

export { specificationsRoutes };

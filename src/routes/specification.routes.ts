import Router from "express";
import { createSpecificationController } from "../modules/Cars/useCases/createSpecification";
import { listSpecificationController } from "../modules/Cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  listSpecificationController.handle(request, response);
});

export { specificationsRoutes };

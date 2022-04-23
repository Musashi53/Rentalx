import Router from "express";
import { createSpecificationController } from "../modules/Cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.get("/", (request, response) => {
  createSpecificationController.handle(request, response);
});

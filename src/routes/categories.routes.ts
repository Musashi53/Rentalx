import { Router } from "express";
import { createCategoryController } from "../modules/Cars/useCases/createCategory/index";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const category = request.query;
});

export { categoriesRoutes };

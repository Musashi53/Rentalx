import { Router } from "express";
import { createCategoryController } from "../modules/Cars/useCases/createCategory/index";
import { listCategoryController } from "../modules/Cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  listCategoryController.handle(request, response);
});

export { categoriesRoutes };

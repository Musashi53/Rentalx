import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/Cars/useCases/createCategory/index";
import { listCategoryController } from "../modules/Cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  const { file } = request;
  console.log(file);

  return response.send();
});

export { categoriesRoutes };

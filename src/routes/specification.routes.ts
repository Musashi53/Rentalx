import Router from "express";

const specificationRoutes = Router();

specificationRoutes.get("", (request, response) => {
  return response.send();
});

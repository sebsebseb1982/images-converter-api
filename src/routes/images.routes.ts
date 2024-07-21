import { Router } from "express";
import ImagesController from "../controllers/images.controller";

class ImagesRoutes {
  router = Router();
  controller = new ImagesController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/:imageToConvertUrl", this.controller.convert);
  }
}

export default new ImagesRoutes().router;

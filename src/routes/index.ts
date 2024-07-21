import { Application } from "express";
import imagesRoutes from "./images.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/images", imagesRoutes);
    //app.use("/api/tutorials", tutorialRoutes);
  }
}

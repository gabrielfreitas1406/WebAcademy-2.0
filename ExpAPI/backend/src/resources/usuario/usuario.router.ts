import { Router } from "express";
import usuarioController from "./usuario.controller";
const router = Router();

router.get("/", usuarioController.index);
router.post("/", usuarioController.create);
router.get("/:id", usuarioController.read);
router.get("/:id", usuarioController.update);
router.get("/:id", usuarioController.remove);


export default router;
import { Router} from "express";
import mainController from "../controllers/main"
import produtoController from "../controllers/produto"

const router = Router();

router.get("/", mainController.index);
router.get("/hb1", mainController.hb1);
router.get("/hb2",mainController.hb2);
router.get("/hb3", mainController.hb3);
router.get("/hb4", mainController.hb4);
router.get("/bemvindo/:nome", mainController.bemvindo);
router.get("/lorem/:numero",mainController.loremGenerator);

router.get("/produto", produtoController.index);
router.get("/produto/create", produtoController.create);
router.post("/produto/create", produtoController.create);
router.get("/produto/:id", produtoController.read);
router.get("/produto/update/:id", produtoController.update);
router.post("/produto/update/:id", produtoController.update);
router.get("/produto/remove/:id", produtoController.remove);


export default router;
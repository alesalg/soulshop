const { Router } = require("express");
const ProdutoController = require("../controllers/ProdutoController")
const router = Router();

router.get("/produtos", ProdutoController.paginaProdutos);
router.get("/produtos/novo", ProdutoController.paginaAdicionarProduto);
router.get("/produtos/editar/:id", ProdutoController.paginaEditProduto);
router.post("/produtos/atualizar", ProdutoController.editProduto);
router.post("/produtos/enviar", ProdutoController.addProduto);


module.exports = router
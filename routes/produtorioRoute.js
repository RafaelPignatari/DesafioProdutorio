var express = require('express');
const produtorioService = require('../services/produtorioService');
const produtorio = new produtorioService();
var router = express.Router();

router.get('/', (req, res) => {
    let resultado = produtorio.checaInput(req.query.limiteInferior, req.query.limiteSuperior, req.query.tipo)

    if (resultado.valido) {
        switch (resultado.tipo) {
            case 1:
                res.json(produtorio.metodoIterativo(resultado.limInf, resultado.limSup));
                break;
            case 2:
                res.json(produtorio.metodoRecursivo(resultado.limInf, resultado.limSup));
                break;
        }
    }
    else
        res.status(400).json(resultado.erro);
});

module.exports = router;
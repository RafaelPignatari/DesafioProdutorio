class produtorioService {
    metodoIterativo(limiteInferior, limiteSuperior) {
        let resultado = 1;

        for (let i = limiteInferior; i <= limiteSuperior; i++){
            resultado = resultado * (i+1/i);
        }

        return resultado;
    }

    metodoRecursivo(limiteInferior, limiteSuperior) {
        if (limiteInferior == 0)
            return 0;

        if (limiteInferior == limiteSuperior)
            return (limiteInferior + (1/limiteInferior));
        else
            return this.metodoRecursivo(limiteInferior + 1, limiteSuperior) * (limiteInferior + (1/ limiteInferior));
    }

    checaInput(limInferior, limSuperior, tipoMetodo) {
        try {
            let limiteInferior = parseInt(limInferior);
            let limiteSuperior = parseInt(limSuperior);
            let tipo = parseInt(tipoMetodo);

            if (isNaN(limiteInferior) || isNaN(limiteSuperior) || isNaN(tipo))
                return new Object({valido: false, erro: "Tenha certeza de que todas as entradas são números!"});

            if (limiteInferior <= 0 || limiteInferior > limiteSuperior)
                return new Object({valido: false, erro: "Os dados de entrada não são válidos!"});

            if (tipo < 1 || tipo > 2)
                return new Object({valido: false, erro: "Método não cadastrado! Possíveis métodos: 1->Iterativo 2->Recursivo"});

            return new Object({valido: true, limInf: limiteInferior, limSup: limiteSuperior, tipo: tipo});
        }
        catch (error) {
            return new Object({valido: false, erro: error});
        }
    }
}

module.exports = produtorioService;
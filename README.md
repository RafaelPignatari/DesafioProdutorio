# Problema

Na matemática, um produtório é definido como:

![image](https://user-images.githubusercontent.com/88250190/233863044-a5f272b1-f924-4fea-9c8c-5e4c5f5f1d56.png)

Com base nessa equação, e considerando que $xi = i + {1 \over i}$ com $i > 0$ faça o que se pede nos itens a seguir:

Escreva uma API em NodeJS que receba os parâmetros:
- limite inferior m;
- limite superior n;
- opção de método de excecução: iterativa ou recursiva;

A API deve calcular o produtório de acordo com os parâmetros de entrada e resultar um JSON com o resultado final.

# Solução

Por padrão, utilizou-se a porta 3000 para subir o serviço, portanto, tenha certeza de que essa porta está disponível para ser utilizada. Além disso, a pasta de módulos
não está no repositório, portanto, ao executar o projeto pela primeira vez, rode o comando "npm install".

Rota: /api/v1/produtorio (GET)

Parâmetros requisitados pela API:
- m: limite inferior;
- n: limite superior;
- tipo: método de execução;

O limite inferior não deve ser menor ou igual a 0, além disso ele não deve ser maior ou igual que o limite superior. Além disso, o tipo pode ser chaveado de 2 maneiras:
- 1: Iterativo;
- 2: Recursivo;

Caso essas regras não sejam atendidas, a API retornará o código 400 e uma mensagem de erro.

# Exemplo de Requisição

Iterativo:
![image](https://user-images.githubusercontent.com/88250190/233864555-a4c1c686-246b-494a-a7f1-95478ec4c995.png)

Recursivo:
![image](https://user-images.githubusercontent.com/88250190/233864489-0d3b8147-8ceb-4ebe-81f7-c09f612f9807.png)

Erro:
![image](https://user-images.githubusercontent.com/88250190/233864597-96504f9f-7a62-48af-b94f-18e54ab294be.png)

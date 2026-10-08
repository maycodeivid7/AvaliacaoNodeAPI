//console.log("Hello, World!"); // Para testes Execute no terminal com o comando: node index.js

// Para instalar o express, execute o comando: npm install express

// Para iniciar o servidor, execute o comando: node index.js ou npm run dev

// No arquivo package.json, na seção dependencies, no express, altere a versão para "5.2.1" e remova o símbolo "^" antes do número da versão, para que o express seja instalado na versão exata especificada.

import express from "express";
import router from "./src/router/filme.js";

const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(3000, () => {
    console.log("O servidor está rodando na porta 3000");
});

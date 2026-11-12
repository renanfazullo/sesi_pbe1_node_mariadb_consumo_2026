const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const usuarioRoutes = require("./src/routes/usuario.routes");
const consumoRoutes = require("./src/routes/consumo.routes");

app.use("/usuarios", usuarioRoutes);
app.use("/consumo", consumoRoutes);

app.listen(3000, () => {
    console.log("Servidor online");
});
const express = require("express");
const app = express();
const cors = require("cors");

// Rutas
const usersRoutes = require("./routes/user.routes");
// Middlewares para cliente
app.use(cors());
app.use(express.json());

// Uso de rutas

app.use("/crud/users", usersRoutes);

app.listen(3000, () => console.log("Servidor en ejecución en el puerto 3000"));

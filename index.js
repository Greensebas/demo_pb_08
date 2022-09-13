const path = require("path");
const express = require('express');
const apiRoutes = require("./routers/app.routers");
const loggerMiddleware = require("./middlewares/logger")

const app = express();
const PORT = process.env.PORT || 8080;


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //Si comentamos esto y descomentamos lo otro deberian andar todos los css (también hay que cambiar el nombre de la carpeta public a nav-app)
// app.use(loggerMiddleware);  Ahora está puesto a nivel de router en products


/*
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./nav-app/index.html"));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/nav-app/styles.css"))
});

app.get("/browser-app.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/nav-app/browser-app.js"))
});

app.get("/logo.svg", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/nav-app/logo.svg"))
});
*/


// Routes
app.use("/api", apiRoutes);

const connectedServer = app.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.error('Error: ', error);
})

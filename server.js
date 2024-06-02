import express from "express";
import cors from "cors";
import path from "path";
import UserRouter from "./routers/user-routes.js";
// import TestsRouter from "./routers/tests-routes.js";
import CounterRouter from "./routers/counter-routers.js"; 
import calculationsRouter from "./routers/calculations-routes.js";
import ProductsRouter from "./routers/products-routes.js";
import { syncModels } from "./database/index.js";
import counterLogin from './middlewares/counterLogin.js'; // קונטרולר של הסטטיסטיקה
const app = express();

//connect to db and sync models
syncModels();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
app.use(cors());

//routes
app.use("/users",counterLogin, new UserRouter().getRouter());
app.use("/calculations",counterLogin, new calculationsRouter().getRouter());
app.use("/Products",counterLogin, new ProductsRouter().getRouter());
// app.use("/tests",counterLogin, new TestsRouter().getRouter());
app.use("/counter", new CounterRouter().getRouter()); // קונטרולר של הסטטיסטיקה

//static files
app.use(express.static(path.join('frontEnd')));


// app.get("/", counterLogin, (req, res) => {
//     res.sendFile(path.join('frontEnd', 'index.html'));
//     }
// );

app.listen(3000, () => {
    console.log("Server running on port 3000");
  
    }
);


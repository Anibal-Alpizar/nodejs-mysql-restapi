import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import IndexRoutes from './routes/index.routes.js'

const app = express();

// routes
app.use(employeesRoutes);
app.use(IndexRoutes)

app.listen(3000);
console.log(`Server running on port ${3000}`);
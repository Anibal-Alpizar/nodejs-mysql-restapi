import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import IndexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());

// routes
app.use("/api", employeesRoutes);
app.use(IndexRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;

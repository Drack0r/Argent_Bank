const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");

dotEnv.config();

let swaggerUi, swaggerDocs;
if (process.env.NODE_ENV !== "production") {
  swaggerUi = require("swagger-ui-express");
  const yaml = require("yamljs");
  swaggerDocs = yaml.load("./swagger.yaml");
}

const dbConnection = require("./database/connection");

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the database
dbConnection();

const allowedOrigins = ["http://localhost:5173", process.env.FRONTEND_URL];

// Handle CORS issues
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

// Request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle custom routes
app.use("/api/v1/user", require("./routes/userRoutes"));

// API Documentation
if (process.env.NODE_ENV !== "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

app.get("/", (req, res, next) => {
  res.send("Hello from my Express server v2!");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
